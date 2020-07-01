import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as xhr from '../../utils/xhr';
import * as actions from '../../redux/actions';

function* worker() {
    try {
        const res = yield xhr.$fetchMyInfo();
        const body = res.data.data;
        console.log(body);
        const act = actions.myInfoFetched({...body, _id: body.uid});
        yield put(act);
    } catch (err) {
        console.log(err);
    } finally {
        put(actions.toggleUserLoading(false));
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_MY_INFO_START, worker);
};

export default watcher;
