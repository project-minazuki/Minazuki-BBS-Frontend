import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as actions from '../../redux/actions';

import {message} from 'antd';

function* worker(action: $actions.DeleteFavoriteStart) {
    try {
        yield put(actions.processStarted());
        const res = yield api.favorite.deleteFavorite(action.fid.toString()).exec();
        if (res.data.code < 0) {
            yield message.warn(res.data.msg);
        } else {
            yield message.success('删除成功！');
            yield put($actions.fetchMyFavoriteStart());     // TODO: 强制刷新？
        }
    } catch (e) {
        yield message.error(e.toString());
    } finally {
        yield put(actions.processHandled());
    }
}

function* watcher() {
    yield takeLatest($actions.DELETE_FAVORITE_START, worker);
}

export default watcher;
