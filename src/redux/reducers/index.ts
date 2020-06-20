import {combineReducers} from "redux";
import {userInit, userReducer, UserStore} from "./user";

export interface StoreState {
    user: UserStore;
};

export const reducers = combineReducers({
    user: userReducer,
});
