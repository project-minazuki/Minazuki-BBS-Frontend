import * as actions from '../actions';
import * as asyncActions from '../actions/async';
import storage from "../../configs/storages";
import {User} from "../../configs/types";

type Action =
    | actions.Login
    | actions.Logout
    | asyncActions.GetUserInfoStart
    | asyncActions.GetUserInfoFailed
    | asyncActions.GetUserInfoSuccess

export interface UserStore {
    token: string;
    info: User;
    isLoading: boolean;
    sysMsg: Notification[];

}

const existingToken = localStorage.getItem(storage.token) ?? '';

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
            localStorage.setItem(storage.token, token);
            return {...state, token};
        case actions.LOGOUT:
            localStorage.removeItem(storage.token);
            return {...state, token: ''};
        case asyncActions.GET_USER_INFO_START:
            return {...state, isLoading: true};
        case asyncActions.GET_USER_INFO_FAILED:
            return {...state};
        case asyncActions.GET_USER_INFO_SUCCESS:
            const {info} = action;
            return {...state, info: {...state.info, ...info}};
    }
    return state;
}
