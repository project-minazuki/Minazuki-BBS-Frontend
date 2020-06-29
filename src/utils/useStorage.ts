import {storage, tokenExpireTime} from "../configs/consts";

/**
 *
 * @param key
 * @deprecated
 */
export const getItem = (key: string) => {
    return sessionStorage.hasOwnProperty(key) ? sessionStorage.getItem(key) :
        localStorage.hasOwnProperty(key) ? localStorage.getItem(key) : '';
}

export const setToken = (token: string, temp = false) => {
    const useStorage = temp ? sessionStorage : localStorage;
    useStorage.setItem(storage.token, token);
    useStorage.setItem(storage.tokenSetTime, Date.now().toString());
}

const hasToken = (s: Storage): boolean => {
    const {token, tokenSetTime} = storage;
    if (s.hasOwnProperty(token) && s.hasOwnProperty(tokenSetTime)) {
        const timestamp = parseInt(s.getItem(tokenSetTime) ?? '0');
        const now = Date.now();
        return (now - timestamp <= tokenExpireTime)
    } else return false;
}

export const getToken = (): string | null => {
    if (hasToken(sessionStorage)) return sessionStorage.getItem(storage.token);
    else return hasToken(localStorage) ? localStorage.getItem(storage.token) : null;
}

export const removeToken = () => {
    sessionStorage.removeItem(storage.token);
    localStorage.removeItem(storage.token);
}
