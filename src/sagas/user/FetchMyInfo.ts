import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as actions from '../../redux/actions';
import * as url from '../../configs/url';

import {$history} from "../../App";
import {notification} from "antd";
import {stringConvert} from "../../utils/DateTimes";
import {cateToCate, userToUser} from "../../utils/tools";
import {message} from 'antd';

function* worker(action: $actions.FetchMyInfoStart) {
    try {
        yield put(actions.toggleUserLoading(true));
        const res = yield api.user.getMyInfo().exec();
        if (res.data.code == -1) {
            message.warn('身份认证已经过期，请重新登录！');
            yield put(actions.logout());
            yield $history.push(url.login);
        } else {
            const res2 = yield api.category.getManage().exec();
            const body = res.data.data;
            const body2 = res2.data.data;
            const act = actions.myInfoFetched(userToUser(body));
            const res3 = yield api.inbox.countAllUnchecked(body.id).exec();
            const arr = body2.map((obj: any) => cateToCate(obj));
            const act2 = actions.manageCategoriesFetched(arr);
            yield put(act);
            yield put(act2);
            yield (!!action.isFirstTime || !!action.title) &&
            notification.success({
                message: action.title ?? '登陆成功',
                description: `${body.username}，欢迎回来！`,
            });
            yield put(actions.inboxCountFetched(res3.data.data));
            yield put(actions.userInfoFetched(body.id, userToUser(body)));
            yield $history.push(action.redirect);
        }
    } catch (err) {
        console.log(err);
    } finally {
        yield put(actions.toggleUserLoading(false));
    }
}

function* watcher() {
    yield takeLatest($actions.FETCH_MY_INFO_START, worker);
};

export default watcher;
