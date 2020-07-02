import {RegisterForm} from "../../configs/types";

export const FETCH_MY_INFO_START = 'FETCH_MY_INFO_START';
export type FETCH_MY_INFO_START = typeof FETCH_MY_INFO_START;

export interface FetchMyInfoStart {
    type: FETCH_MY_INFO_START;
    isFirstTime: boolean;
}

export function fetchMyInfoStart(isFirstTime: boolean): FetchMyInfoStart {
    return {type: FETCH_MY_INFO_START, isFirstTime}
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

export const WAIT_PROCESS = 'WAIT_PROCESS';
export type WAIT_PROCESS = typeof WAIT_PROCESS;

export interface WaitProcess {
    type: WAIT_PROCESS;
    time: number;
    handler?: Function;
}

export function waitProcess(
    time: number,
    handler?: Function
): WaitProcess {
    return {type: WAIT_PROCESS, time, handler};
}

export const REGISTER_START = 'REGISTER_START';
export type REGISTER_START = typeof REGISTER_START;

export interface RegisterStart {
    type: REGISTER_START;
    form: RegisterForm;
    cb?: () => void;
}

export function registerStart(form: RegisterForm, cb?: () => void): RegisterStart {
    return {type: REGISTER_START, form, cb};
}
