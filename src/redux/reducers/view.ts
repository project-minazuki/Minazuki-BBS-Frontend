import * as actions from '../actions';

type Action =
    | actions.RegisterFormFilled

export interface ViewStore {
    regForm: {
        username: string;
        password: string;
    };
}

export const viewInit: ViewStore = {
    regForm: {} as any,
}

export function viewReducer(state = viewInit, action: Action): ViewStore {
    switch (action.type) {
        case actions.REGISTER_FORM_FILLED:
            return {...state, regForm: action.value as any};
    }
    return state;
}
