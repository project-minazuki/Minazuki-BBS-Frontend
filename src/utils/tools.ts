import {store} from "../App";

/**
 *
 * @param param
 *
 * @deprecated 将在 axios 中全局设置统一认证请求头
 */
export function withToken(param: object) {
    const token = store.getState().user.token ?? '';
    return {...param, token};
}
