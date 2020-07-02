import * as $actions from '../../redux/actions/async';
import {put, takeLatest, delay} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as actions from '../../redux/actions';
import {message} from 'antd';

function* worker(action: $actions.RegisterStart) {
    try {
        yield put(actions.processStarted());
        const callback = action.cb ?? (() => {});
        const res = yield api.user.register(action.form).exec();
        console.log(res);
        const body = res.data;
        if (body.code === 0 || body.code === 1) {
            const {username, password} = action.form;
            yield put(actions.registerFormFilled({username, password}));
            yield callback();
        } else message.warn(body.msg);

    } catch (e) {
        message.error(e.toString());
    } finally {
        yield put(actions.processHandled());
    }
}

function* watcher() {
    yield takeLatest($actions.REGISTER_START, worker);
}

export default watcher;
