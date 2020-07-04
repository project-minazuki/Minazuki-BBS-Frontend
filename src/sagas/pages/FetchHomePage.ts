import * as $actions from '../../redux/actions/async';
import * as actions from '../../redux/actions/';
import {put, takeLatest} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as url from '../../configs/url';

import {message} from 'antd';
import {themeToTheme} from "../../utils/tools";
import {$history} from "../../App";

function* worker() {
    try {
        yield put($actions.fetchCategoriesStart());
        const res_new = yield api.theme.top10ByVisitsCount().exec();
        const res_rep = yield api.theme.top10ByReplyCount().exec();
        if (res_new.data.code < 0 || res_rep.data.code < 0) {
            message.warn(res_new.data.msg);
            message.warn(res_rep.data.msg);
        } else {
            let $new = [], $rep = [];
            for (const ii of res_new.data.data) {
                $new.push(themeToTheme(ii));
                yield put($actions.fetchUserInfoStart(ii.creatorId));
            }
            for (const ii of res_rep.data.data) {
                $rep.push(themeToTheme(ii));
                yield put($actions.fetchUserInfoStart(ii.creatorId));
            }
            yield put(actions.recommendFetched($new, $rep));
        }
    } catch (e) {
        yield message.error(e.toString());
        $history.push(url.$404);
    } finally {
        yield put(actions.homepageIsLoaded(true));
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_HOME_PAGE_START, worker);
}

export default watcher;
