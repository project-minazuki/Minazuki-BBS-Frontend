import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as actions from '../../redux/actions';
import * as url from '../../configs/url';

import {$history} from "../../App";
import {notification} from "antd";
import {message} from 'antd';

function* worker(action: $actions.FetchMyInboxStart) {
    try {
        yield put(actions.processStarted());
        const res = yield api.inbox.myInbox(action.uid.toString()).exec();
        console.log(res);
        if (res.data.code >= 0) {
            yield put(actions.myInboxFetched(res.data.data));
            for (const ii of res.data.data) {
                yield ii?.senderId && put($actions.fetchUserInfoStart(ii.senderId));
            }
        } else {
            yield message.warn(res.msg);
        }
    } catch (e) {
        yield message.error(e.toString());
    } finally {
        yield put(actions.processHandled());
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_MY_INBOX_START, worker)
}

export default watcher;
