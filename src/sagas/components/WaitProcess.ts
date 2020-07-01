import * as $actions from '../../redux/actions/async';
import {put, takeLatest, delay} from 'redux-saga/effects';
import * as actions from '../../redux/actions';

function* worker(action: $actions.WaitProcess) {
    yield put(actions.processStarted());
    const func = action.handler ?? (() => {});
    // TODO: 怎么使用 Window.setTimeout 实现？
    // setTimeout(func, action.time);
    yield delay(action.time);
    yield func();
    yield put(actions.processHandled());
}

function* watcher() {
    yield takeLatest($actions.WAIT_PROCESS, worker);
}

export default watcher;
