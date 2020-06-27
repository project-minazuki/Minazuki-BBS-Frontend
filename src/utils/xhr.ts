import * as api from '../configs/api';
import axios from 'axios';



export function $fetchMyInfo() {
    return axios.get(api.fetchMyInfo);
}

export function $testGetMethod() {
    return axios.get(api.testGetMethod);
}
