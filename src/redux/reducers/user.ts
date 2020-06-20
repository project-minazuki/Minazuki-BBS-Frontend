import * as actions from '../actions';
import storage from "../../configs/storages";

type Action =
    | actions.Login
    | actions.Logout;

export interface UserStore {
    token: string;

}

const existingToken = localStorage.getItem(storage.token) ?? '';

export const userInit: UserStore = {
    token: existingToken,
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
    }
    return state;
}
