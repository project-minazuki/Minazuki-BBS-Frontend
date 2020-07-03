import * as $actions from '../../redux/actions/async';
import {put, takeLatest} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as url from '../../configs/url';

import {message} from 'antd';
import {themeToTheme} from "../../utils/tools";
import {$history} from "../../App";

function* worker(action: $actions.FetchAllThemesStart) {
    try {
        const res = yield api.theme.all(action.cid.toString()).exec();
        if (res.data.code < 0) {
            yield message.warn(res.data.msg);
        } else {
            const data = res.data.data;
            let arr = [];
            for (const ii of data) arr.push(themeToTheme(ii));
            // TODO: put some action
        }
    } catch (e) {
        yield message.error(e.toString());
        $history.push(url.$404);
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_ALL_THEMES_START, worker);
}

export default watcher;
