import * as api from '../configs/api';

export function $fetchMyInfo() {
    return api.test.fetchMyInfo().exec();
}

export function $testGetMethod() {
    return api.test.testGetMethod().exec();
}

export function $login(param: {
    username: string;
    password: string;
}) {
    return api.user.login(param).exec();
}
