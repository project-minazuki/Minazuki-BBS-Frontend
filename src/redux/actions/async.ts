
export const FETCH_MY_INFO_START = 'FETCH_MY_INFO_START';
export type FETCH_MY_INFO_START = typeof FETCH_MY_INFO_START;

export interface FetchMyInfoStart {
    type: FETCH_MY_INFO_START;
}

export function fetchMyInfoStart(): FetchMyInfoStart {
    return {
        type: FETCH_MY_INFO_START,
    }
}
