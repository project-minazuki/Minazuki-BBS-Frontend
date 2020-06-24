import {User} from "../../configs/types";

export const GET_USER_INFO_START = 'GET_USER_INFO_START';
export type GET_USER_INFO_START = typeof GET_USER_INFO_START;

export interface GetUserInfoStart {
    type: GET_USER_INFO_START;
}

export function getUserInfoStart(): GetUserInfoStart {
    return {type: GET_USER_INFO_START};
}

export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export type GET_USER_INFO_SUCCESS = typeof GET_USER_INFO_SUCCESS;

export interface GetUserInfoSuccess {
    type: GET_USER_INFO_SUCCESS;
    info: Partial<User>;
}

export function getUserInfoSuccess(info: Partial<User>): GetUserInfoSuccess {
    return {
        type: GET_USER_INFO_SUCCESS,
        info
    };
}

export const GET_USER_INFO_FAILED = 'GET_USER_INFO_FAILED';
export type GET_USER_INFO_FAILED = typeof GET_USER_INFO_FAILED;

export interface GetUserInfoFailed {
    type: GET_USER_INFO_FAILED;
    errMsg?: string;
}

export function getUserInfoFailed(): GetUserInfoFailed {
    return {
        type: GET_USER_INFO_FAILED,
    }
}
