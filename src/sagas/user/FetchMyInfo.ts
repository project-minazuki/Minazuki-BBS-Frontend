import * as asyncs from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as xhr from '../../utils/xhr';
import * as actions from '../../redux/actions';
import {toggleUserLoading} from "../../redux/actions";

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
        put(toggleUserLoading(false));
    }
}

function* watcher() {
    yield takeLatest(asyncs.FETCH_MY_INFO_START, worker);
};

export default watcher;
