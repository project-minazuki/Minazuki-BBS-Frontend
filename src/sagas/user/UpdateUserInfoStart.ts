import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as url from '../../configs/url';
import * as actions from '../../redux/actions';

import {message} from 'antd';
import {$history} from "../../App";

function* worker(action: $actions.UpdateUserInfoStart) {
    const cb = action.cb ?? (() => {});
    try {
        yield put(actions.processStarted());
        const res = yield api.user.update(action.data).exec();
        if (res.data.code < 0) {
            yield message.warn(res.data.msg);
        } else {
            yield message.success('操作已成功！');
            yield put($actions.fetchMyInfoStart());
        }
    } catch (e) {
        message.error(e.toString());
    } finally {
        yield put(actions.processHandled());
        yield cb();
    }
}

function* watcher() {
    yield takeLatest($actions.UPDATE_USER_INFO_START, worker);
}

export default watcher;
