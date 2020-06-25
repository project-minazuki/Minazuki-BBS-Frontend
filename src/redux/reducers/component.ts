import * as actions from '../actions';

type Action =
    | actions.ProcessHandled

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

    }
    return state;
}
