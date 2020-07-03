import * as $actions from '../../redux/actions/async';
import {put, takeLatest} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as url from '../../configs/url';
import * as actions from '../../redux/actions';

import {message} from 'antd';
import {cateToCate, noticeToAnnouncement, themeToTheme} from "../../utils/tools";
import {$history} from "../../App";
import {Announcement, Theme} from "../../configs/types";

function processTheme(body: any, action: any[]): Theme[] {
    let arr = [];
    for (const ii of body.data) {
        arr.push(themeToTheme(ii));
        action.push($actions.fetchUserInfoStart(ii.creatorId));
    }
    return arr;
}

function processAnnounce(body: any, action: any[]): Announcement[] {
    let arr = [];
    for (const ii of body.data) {
        arr.push(noticeToAnnouncement(ii));
        action.push($actions.fetchUserInfoStart(ii.creatorId));
    }
    return arr;
}

function* worker(action: $actions.FetchCategoryDetail) {
    try {
        const $id = action.cateId.toString();
        let res = [], fail = 0;
        res[0] = yield api.theme.all($id).exec();
        res[1] = yield api.category.getInfoById($id).exec();
        res[2] = yield api.theme.top($id).exec();
        res[3] = yield api.theme.highQuality($id).exec();
        res[4] = yield api.notice.all($id).exec();
        res[5] = yield api.theme.tag().exec();
        for (const ii of res) if (ii.data.code < 0) {
            message.warn(ii.data.msg);
            ++ fail;
        }
        if (!fail) {
            let $action: any[] = [];
            const all = processTheme(res[0].data, $action);
            const info = cateToCate(res[1].data.data);
            const pin = processTheme(res[2].data, $action);
            const highQuality = processTheme(res[3].data, $action);
            const announce = processAnnounce(res[4].data, $action);
            const tags = res[5].data.data;
            yield put(actions.categoryDetailsFetched(info, highQuality, pin, all, announce, tags));
        }
    } catch (e) {
        yield message.error(e.toString());
        $history.push(url.$404);
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_CATEGORY_DETAIL, worker);
}

export default watcher;
