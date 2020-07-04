import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as url from '../../configs/url';
import * as actions from '../../redux/actions';

import {message} from 'antd';
import {cateToCate, userToUser} from "../../utils/tools";
import {$history} from "../../App";

function* worker() {
    try {
        const res = yield api.category.getOpening().exec();
        if (res.data.code < 0) {
            yield message.warn(res.data.msg);
        } else {
            const data = res.data.data;
            let arr = [];
            for (const ii of data) arr.push(cateToCate(ii));
            yield put(actions.categoriesFetched(arr));
        }
    } catch (e) {
        yield message.error(e.toString());
        $history.push(url.$404);
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_CATEGORIES_START, worker);
}

export default watcher;
