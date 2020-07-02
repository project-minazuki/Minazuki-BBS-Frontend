import * as $actions from '../../redux/actions/async';
import {put, takeLatest, select} from 'redux-saga/effects';
import * as api from '../../configs/api';
import * as actions from '../../redux/actions';

import {$history} from "../../App";
import {notification} from "antd";
import {stringConvert} from "../../utils/DateTimes";
import {cateToCate} from "../../utils/tools";

function* worker(action: $actions.FetchMyInfoStart) {
    try {
        yield put(actions.toggleUserLoading(true));
        const res = yield api.user.getMyInfo().exec();
        const res2 = yield api.category.getManage().exec();
        const body = res.data.data;
        const body2 = res2.data.data;
        console.log(body.createdAt, body.lastSignIn, body);
        const act = actions.myInfoFetched({
            ...body, _id: body.id,
            createdAt: stringConvert(body.createdAt),
            lastSignIn: stringConvert(body.lastSignIn),
            avatar: body.avatarUrl,
        });
        const res3 = yield api.inbox.countAllUnchecked(body.id).exec();
        const arr = body2.map((obj: any) => cateToCate(obj));
        const act2 = actions.manageCategoriesFetched(arr);
        yield put(act);
        yield put(act2);
        yield notification.success({
            message: action.isFirstTime ? '登陆成功' : '久等了',
            description: `${body.username}，欢迎回来！`,
        });
        yield put(actions.inboxCountFetched(res3.data.data));
        yield $history.push('/');           // TODO: 已收藏页面怎么办？
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
