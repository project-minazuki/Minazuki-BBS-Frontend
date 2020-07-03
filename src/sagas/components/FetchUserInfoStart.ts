import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as url from '../../configs/url';
import * as actions from '../../redux/actions';

import {message} from 'antd';
import {userToUser} from "../../utils/tools";
import {$history} from "../../App";

function* worker(action: $actions.FetchUserInfoStart) {
    try {
        yield put(actions.processStarted());
        const res = yield api.user.getInfoById(action.uid.toString()).exec();
        const res1 = yield api.category.getManage(action.uid.toString()).exec();
        const body = res.data;
        const cnt = (res1.data.data ?? []).length;
        console.log(body)
        if (body.code >= 0) {
            const data = yield userToUser(body.data);
            console.log(data);
            yield put(actions.userInfoFetched(action.uid, {...data, manageCateId: cnt}));
        } else {
            yield message.warn(body.msg);
            $history.push(url.$404);
        }
    } catch (e) {
        yield message.error(e.toString());
        $history.push(url.$404);
    } finally {
        yield put(actions.processHandled());
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_USER_INFO_START, worker);
}

export default watcher;
