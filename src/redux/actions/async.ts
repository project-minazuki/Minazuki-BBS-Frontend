
export const FETCH_MY_INFO_START = 'FETCH_MY_INFO_START';
export type FETCH_MY_INFO_START = typeof FETCH_MY_INFO_START;

export interface FetchMyInfoStart {
    type: FETCH_MY_INFO_START;
}

export function fetchMyInfoStart(): FetchMyInfoStart {
    return {type: FETCH_MY_INFO_START}
}

export const LOGIN_START = 'LOGIN_START';
export type LOGIN_START = typeof LOGIN_START;

export interface LoginStart {
    type: LOGIN_START;
    username: string;
    password: string;
}

export function loginStart(username: string, password: string): LoginStart {
    return {type: LOGIN_START, username, password}
}
