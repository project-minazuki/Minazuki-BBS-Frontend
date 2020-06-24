import * as action from "./async";
import axios from 'axios'
import * as URL from '../../configs/requests';
import {Dispatch} from "redux";
import {User} from "../../configs/types";
import {ThunkAction} from 'redux-thunk';
import {StoreState} from "../reducers";

type asyncAction<R> = ThunkAction<R, StoreState, undefined, { type: string }>;

export function $getUserInfo(token: string): asyncAction<void> {
    return (dispatch) => {
        dispatch(action.getUserInfoStart());
        return axios.post(URL.getUserInfo, {token})
            .then(response => {
                const info: User = response.data;
                dispatch(action.getUserInfoSuccess(info));
            })
            .catch(error => {
                console.log('xhr.$getUserInfo: Failed', error);
                dispatch(action.getUserInfoFailed());
            });
    }
}
