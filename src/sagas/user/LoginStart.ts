import * as asyncs from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as xhr from '../../utils/xhr';
import * as actions from '../../redux/actions';

import {message} from 'antd';

function* worker(action: asyncs.LoginStart) {
    try {
        const {username, password} = action;
        const res = yield xhr.$login({username, password});
        const body = res.data.data;
        if (body.code === 1) {
            yield put(actions.login(body.data));
        } else {
            yield message.error(`[code=${body.code}] ${body.msg}`);
        }
    } catch (err) {
        console.log(err);
        message.error(err.toString())
    }
}

function* watcher() {
    yield takeLatest(asyncs.LOGIN_START, worker);
}

export default watcher;
