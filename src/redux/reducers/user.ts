import * as actions from '../actions';
import {User, Notification} from "../../configs/types";
import {getToken, setToken, removeToken} from "../../utils/useStorage";

type Action =
    | actions.Login
    | actions.Logout
    | actions.MyInfoFetched

export interface UserStore {
    token: string;
    info: User;
    isLoading: boolean;
    sysMsg: Notification[];

}

const existingToken = getToken() ?? '';

export const userInit: UserStore = {
    token: existingToken,
    info: {} as User,
    isLoading: false,
    sysMsg: [],
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
    }
    return state;
}
