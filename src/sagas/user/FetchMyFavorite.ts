import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as actions from '../../redux/actions';

import {message} from 'antd';

function* worker() {
    try {
        yield put(actions.processStarted());
        const res = yield api.favorite.myFavorite().exec();
        if (res.data.code < 0) {
            yield message.warn(res.data.msg);
        } else {
            yield put(actions.myFavoriteFetched(res.data.data));
        }
    } catch (e) {
        yield message.error(e.toString());
    } finally {
        yield put(actions.processHandled());
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_MY_FAVORITE_START, worker);
}

export default watcher;
