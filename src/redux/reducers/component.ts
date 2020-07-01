import * as actions from '../actions';

type Action =
    | actions.ProcessHandled
    | actions.ProcessStarted

export interface ComponentStore {
    inProcess: boolean;
}

export const componentInit: ComponentStore = {
    inProcess: false,
}

export function componentReducer(state = componentInit, action: Action): ComponentStore {
    switch (action.type) {
        case actions.PROCESS_HANDLED:
            return {...state, inProcess: false};
        case actions.PROCESS_STARTED:
            return {...state, inProcess: true};

    }
    return state;
}
