import {Theme, User} from "../../configs/types";
import {defaultAvatar} from "../../configs/consts";


export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;

export interface Login {
    type: LOGIN;
    token: string;
}

export function login(token: string): Login {
    return { type: LOGIN, token};
}


export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;

export interface Logout {
    type: LOGOUT;
}

export function logout(): Logout {
    return {type: LOGOUT};
}


export const TOGGLE_USER_LOADING = 'TOGGLE_USER_LOADING';
export type TOGGLE_USER_LOADING = typeof TOGGLE_USER_LOADING;

export interface ToggleUserLoading {
    type: TOGGLE_USER_LOADING;
    on: boolean;
}

export function toggleUserLoading(on: boolean = false): ToggleUserLoading {
    return {type: TOGGLE_USER_LOADING, on};
}


export const MY_INFO_FETCHED = 'MY_INFO_FETCHED';
export type MY_INFO_FETCHED = typeof MY_INFO_FETCHED;

export interface MyInfoFetched {
    type: MY_INFO_FETCHED;
    data: User;
}

export function myInfoFetched(data: Partial<User>): MyInfoFetched {
    const init = {
        isAdmin: false,
        avatar: defaultAvatar,
    } as User;
    return {
        type: MY_INFO_FETCHED,
        data: {
            ...init,
            ...data
        }
    };
}


export const MY_MESSAGE_FETCHED = 'MY_MESSAGE_FETCHED';
export type MY_MESSAGE_FETCHED = typeof MY_MESSAGE_FETCHED;

export interface MyMessageFetched {
    type: MY_MESSAGE_FETCHED;
    msg: Notification[];
}

export function myMessageFetched(msg: Notification[]): MyMessageFetched {
    return {type: MY_MESSAGE_FETCHED, msg};
}



export const PROCESS_HANDLED = 'PROCESS_HANDLED';
export type PROCESS_HANDLED = typeof PROCESS_HANDLED;

export interface ProcessHandled {
    type: PROCESS_HANDLED;
}

export function processHandled(): ProcessHandled {
    return {type: PROCESS_HANDLED};
}

export const PROCESS_STARTED = 'PROCESS_STARTED';
export type PROCESS_STARTED = typeof PROCESS_STARTED;

export interface ProcessStarted {
    type: PROCESS_STARTED;
}

export function processStarted(): ProcessStarted {
    return {type: PROCESS_STARTED};
}


export const RECOMMEND_FETCHED = 'RECOMMEND_FETCHED';
export type RECOMMEND_FETCHED = typeof RECOMMEND_FETCHED;

export interface RecommendFetched {
    type: RECOMMEND_FETCHED;
    newTheme: Theme[];
    newReply: Theme[];
}

export function recommendFetched(
    newTheme: Theme[],
    newReply: Theme[]
): RecommendFetched {
    return {
        type: RECOMMEND_FETCHED,
        newTheme, newReply,
    };
}

export const REGISTER_FORM_FILLED = 'REGISTER_FORM_FILLED';
export type REGISTER_FORM_FILLED = typeof REGISTER_FORM_FILLED;

export interface RegisterFormFilled {
    type: REGISTER_FORM_FILLED;
    value: object;
}

export function registerFormFilled(value: object): RegisterFormFilled {
    return {type: REGISTER_FORM_FILLED, value}
}
