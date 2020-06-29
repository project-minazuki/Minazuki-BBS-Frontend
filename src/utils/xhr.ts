import * as api from '../configs/api';

export function $fetchMyInfo() {
    return api.test.fetchMyInfo().exec();
}

export function $testGetMethod() {
    return api.test.testGetMethod().exec();
}
