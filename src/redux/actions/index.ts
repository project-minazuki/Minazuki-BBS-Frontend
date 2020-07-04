import {Favorite, Mail, Theme, User, Notification, Category, Announcement, Tag} from "../../configs/types";
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


export const MANAGE_CATEGORIES_FETCHED = 'MANAGE_CATEGORIES_FETCHED';
export type MANAGE_CATEGORIES_FETCHED = typeof MANAGE_CATEGORIES_FETCHED;

export interface ManageCategoriesFetched {
    type: MANAGE_CATEGORIES_FETCHED;
    data: [],
}

export function manageCategoriesFetched(data: []): ManageCategoriesFetched {
    return {type: MANAGE_CATEGORIES_FETCHED, data};
}


export const INBOX_COUNT_FETCHED = 'INBOX_COUNT_FETCHED';
export type INBOX_COUNT_FETCHED = typeof INBOX_COUNT_FETCHED;

export interface InboxCountFetched {
    type: INBOX_COUNT_FETCHED;
    count: number;
}

export function inboxCountFetched(cnt: number): InboxCountFetched {
    return {type: INBOX_COUNT_FETCHED, count: cnt,}
}

export const USER_INFO_FETCHED = 'USER_INFO_FETCHED';
export type USER_INFO_FETCHED = typeof USER_INFO_FETCHED;

export interface UserInfoFetched {
    type: USER_INFO_FETCHED;
    id: number;
    data: User;
}

export function userInfoFetched(id: number, data: User): UserInfoFetched {
    return {type: USER_INFO_FETCHED, id, data};
}


export const MY_INBOX_FETCHED = 'MY_INBOX_FETCHED';
export type MY_INBOX_FETCHED = typeof MY_INBOX_FETCHED;

export interface MyInboxFetched {
    type: MY_INBOX_FETCHED;
    data: Mail[];
}

export function myInboxFetched(data: Mail[]) {
    return {type: MY_INBOX_FETCHED, data};
}


export const MY_FAVORITE_FETCHED = 'MY_FAVORITE_FETCHED';
export type MY_FAVORITE_FETCHED = typeof MY_FAVORITE_FETCHED;

export interface MyFavoriteFetched {
    type: MY_FAVORITE_FETCHED;
    data: Favorite[];
}

export function myFavoriteFetched(data: Favorite[]): MyFavoriteFetched {
    return {type: MY_FAVORITE_FETCHED, data}
}


export const HOME_PAGE_FETCHED = 'HOME_PAGE_FETCHED';
export type HOME_PAGE_FETCHED = typeof HOME_PAGE_FETCHED;

export interface HomePageFetched {
    type: HOME_PAGE_FETCHED;
    newTheme: Theme[];
    newReply: Theme[];
}

export function homePageFetched(
    newTheme: Theme[],
    newReply: Theme[],
): HomePageFetched {
    return {type: HOME_PAGE_FETCHED, newReply, newTheme}
}


export const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';
export type CATEGORIES_FETCHED = typeof CATEGORIES_FETCHED;

export interface CategoriesFetched {
    type: CATEGORIES_FETCHED;
    data: Category[];
};

export function categoriesFetched(data: Category[]): CategoriesFetched {
    return {type: CATEGORIES_FETCHED, data};
}


export const CATEGORY_DETAILS_FETCHED = 'CATEGORY_DETAILS_FETCHED';
export type CATEGORY_DETAILS_FETCHED = typeof CATEGORY_DETAILS_FETCHED;

export interface CategoryDetailsFetched {
    type: CATEGORY_DETAILS_FETCHED;
    info: Category;
    highQuality: Theme[];
    pinned: Theme[];
    all: Theme[];
    announce: Announcement[];
    tags: Tag[];
}

export function categoryDetailsFetched(
    info: Category,
    highQuality: Theme[],
    pinned: Theme[],
    all: Theme[],
    announce: Announcement[],
    tags: Tag[],
): CategoryDetailsFetched {
    return {
        type: CATEGORY_DETAILS_FETCHED,
        info, highQuality, pinned,
        all, announce, tags
    }
}

export const HOMEPAGE_IS_LOADED = 'HOMEPAGE_IS_LOADED';
export type HOMEPAGE_IS_LOADED  = typeof HOMEPAGE_IS_LOADED;

export interface HomepageIsLoaded {
    type: HOMEPAGE_IS_LOADED;
    on: boolean;
}

export function homepageIsLoaded(on: boolean): HomepageIsLoaded {
    return {type: HOMEPAGE_IS_LOADED, on};
}
