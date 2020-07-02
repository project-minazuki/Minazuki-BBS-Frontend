import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as actions from '../../redux/actions';

import {$history} from "../../App";
import {notification} from "antd";
import {stringConvert} from "../../utils/DateTimes";

function* worker(action: $actions.FetchMyInfoStart) {
    try {
        yield put(actions.toggleUserLoading(true));
        const res = yield api.user.getMyInfo().exec();
        const body = res.data.data;
        console.log(body.createdAt, body.lastSignIn, body);
        const act = actions.myInfoFetched({
            ...body, _id: body.id,
            createdAt: stringConvert(body.createdAt),
            lastSignIn: stringConvert(body.lastSignIn),
            avatar: body.avatarUrl,
        });
        yield put(act);
        yield notification.success({
            message: action.isFirstTime ? '登陆成功' : '久等了',
            description: `${body.username}，欢迎回来！`,
        });
        yield $history.push('/');
    } catch (err) {
        console.log(err);
    } finally {
        yield put(actions.toggleUserLoading(false));
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_MY_INFO_START, worker);
};

export default watcher;
