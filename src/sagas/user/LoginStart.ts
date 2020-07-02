import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as xhr from '../../utils/xhr';
import * as actions from '../../redux/actions';
import * as url from '../../configs/url';

import {message, notification} from 'antd';

function* worker(action: $actions.LoginStart) {
    try {
        const {username, password} = action;
        const res = yield xhr.$login({username, password});
        const body = res.data;
        if (body.code === 1) {
            yield put(actions.login(body.data));
            yield put($actions.fetchMyInfoStart(url.root, true));
        } else {
            yield message.error(`[code=${body.code}] ${body.msg}`);
        }
    } catch (err) {
        console.log(err);
        message.error(err.toString())
    }
}

function* watcher() {
    yield takeLatest($actions.LOGIN_START, worker);
}

export default watcher;
