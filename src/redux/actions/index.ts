

export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;

export interface Login {
    type: LOGIN;
    token: string;
}

export function login(token: string): Login {
    return { type: LOGIN, token};
}


export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;

export interface Logout {
    type: LOGOUT;
}

export function logout(): Logout {
    return {type: LOGOUT};
}


export const PROCESS_HANDLED = 'PROCESS_HANDLED';
export type PROCESS_HANDLED = typeof PROCESS_HANDLED;

export interface ProcessHandled {
    type: PROCESS_HANDLED;
}

export function processHandled(): ProcessHandled {
    return {type: PROCESS_HANDLED};
}

