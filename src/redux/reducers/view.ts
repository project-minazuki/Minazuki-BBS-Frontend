import * as actions from '../actions';

type Action =
    | actions.RegisterFormFilled

export interface ViewStore {
    regForm: object;
}

export const viewInit: ViewStore = {
    regForm: {},
}

export function viewReducer(state = viewInit, action: Action): ViewStore {
    switch (action.type) {
        case actions.REGISTER_FORM_FILLED:
            return {...state, regForm: action.value};
    }
    return state;
}
