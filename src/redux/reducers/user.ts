import * as actions from '../actions';
import {User, Notification} from "../../configs/types";
import {getToken, setToken, removeToken} from "../../utils/useStorage";

type Action =
    | actions.Login
    | actions.Logout
    | actions.MyInfoFetched
    | actions.ToggleUserLoading

export interface UserStore {
    token: string;
    info: User;
    isLoading: boolean;
    sysMsg: Notification[];
    success: boolean;
}

const existingToken = getToken() ?? '';

export const userInit: UserStore = {
    token: existingToken,
    info: {} as User,
    isLoading: false,
    sysMsg: [],
    success: false,
};

export function userReducer(state = userInit, action: Action): UserStore {
    switch (action.type) {
        case actions.LOGIN:
            const {token} = action;
            setToken(token);
            return {...state, token};
        case actions.LOGOUT:
            removeToken();
            return {...state, token: ''};
        case actions.MY_INFO_FETCHED:
            const info = action.data;
            return {...state, info};
        case actions.TOGGLE_USER_LOADING:
            const isLoading = action.on;
            return {...state, isLoading};
    }
    return state;
}
