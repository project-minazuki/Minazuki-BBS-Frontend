import * as actions from '../actions';
import {User, Notification, Category, Mail, Favorite} from "../../configs/types";
import {getToken, setToken, removeToken} from "../../utils/useStorage";

type Action =
    | actions.Login
    | actions.Logout
    | actions.MyInfoFetched
    | actions.ToggleUserLoading
    | actions.InboxCountFetched
    | actions.MyFavoriteFetched
    | actions.MyInboxFetched
    | actions.MyMessageFetched

export interface UserStore {
    token: string;
    info: User;
    isLoading: boolean;
    inbox: number;
    sysMsg: Notification[];
    success: boolean;
    manageCate: Category[];
    mails: Mail[];
    favorites: Favorite[],
}

const existingToken = getToken() ?? '';

export const userInit: UserStore = {
    token: existingToken,
    info: {} as User,
    isLoading: false,
    sysMsg: [],
    success: false,
    manageCate: [],
    inbox: 0,
    mails: [],
    favorites: [],
};

export function userReducer(state = userInit, action: Action): UserStore {
    switch (action.type) {
        case actions.LOGIN:
            const {token} = action;
            setToken(token);
            return {...state, token};
        case actions.LOGOUT:
            removeToken();
            return {...userInit, token: ''};
        case actions.MY_INFO_FETCHED:
            const info = action.data;
            return {...state, info};
        case actions.TOGGLE_USER_LOADING:
            const isLoading = action.on;
            return {...state, isLoading};
        case actions.INBOX_COUNT_FETCHED:
            return {...state, inbox: action.count};
        case actions.MY_INBOX_FETCHED:
            return {...state, mails: action.data};
        case actions.MY_FAVORITE_FETCHED:
            return {...state, favorites: action.data};
        case actions.MY_MESSAGE_FETCHED:
            return {...state, sysMsg: action.msg};
    }
    return state;
}
