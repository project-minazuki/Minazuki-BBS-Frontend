import * as actions from '../actions';
import {User} from "../../configs/types";

type Action =
    | actions.ProcessHandled
    | actions.ProcessStarted
    | actions.UserInfoFetched

export interface ComponentStore {
    inProcess: boolean;
    userCenter: User[];
}

export const componentInit: ComponentStore = {
    inProcess: false,
    userCenter: [],
}

export function componentReducer(state = componentInit, action: Action): ComponentStore {
    switch (action.type) {
        case actions.PROCESS_HANDLED:
            return {...state, inProcess: false};
        case actions.PROCESS_STARTED:
            return {...state, inProcess: true};
        case actions.USER_INFO_FETCHED:
            let arr = state.userCenter;
            arr[action.id] = action.data;
            return {...state, userCenter: arr};
    }
    return state;
}
