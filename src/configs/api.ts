import {ApiServer, MockServer} from './consts';
import axios from 'axios';

const header = (!!0 ? ApiServer : MockServer);
const userHeader = `${header}/user`;
const cateHeader = `${header}/category`;
const inboxHeader = `${header}/inbox`;
const postHeader = `${header}/post`;
const favoriteHeader = `${header}/favorite`;
const historyHeader = `${header}/historyViewed`;
const themeHeader = `${header}/theme`;
const noticeHeader = `${header}/notice`;

interface AxiosRequest {
    method: RequestMethod;
    url: string;
    data?: object;
}

type RequestMethod = `GET` | 'POST' | 'DELETE';

export class Request {

    body: AxiosRequest;

    constructor(desc: AxiosRequest) {
        this.body = desc;
    }

    exec = () => axios(this.body);

}

export namespace test {

    export const testGetMethod = () => new Request({
        method: 'GET', url: `${MockServer}/test/testGetMethod`
    });

    export const fetchMyInfo = () => new Request({
        method: 'GET', url: `${MockServer}/user/me`
    });

    export const login = () => new Request({
        method: 'GET', url: `${MockServer}/user/login`
    });

    export const getUserInfo = (uid: string) => new Request({
        method: 'GET', url: `${header}/user/getInfo/${uid}`
    });

}

export namespace category {

    export namespace moderator {

        export const getByCateId = (id: string) => new Request({
            method: 'GET', url: `${cateHeader}/${id}/moderator`
        });

        export const dismissById = (cid: string, mid: string) => new Request({
            method: 'DELETE', url: `${cateHeader}/${cid}/moderator/${mid}`
        });
    }

    export const getOpening = () => new Request({
        method: 'GET',  url: `${cateHeader}`
    });

    export const getInfoById = (id: string) => new Request({
        method: 'GET', url: `${cateHeader}/${id}`
    });

    export const deleteById = (id: string) => new Request({
        method: 'DELETE', url: `${cateHeader}/${id}`
    });

    export const closeById = (id: string) => new Request({
        method: 'GET', url: `${cateHeader}/${id}/close`
    });

    export const openById = (id: string) => new Request({
        method: 'GET', url: `${cateHeader}/${id}/open`
    });

    export const getAll = () => new Request({
        method: 'GET', url: `${cateHeader}/all`
    });

    export const create = (param: {
        name: string;
        description: string;
    }) => new Request({
        method: 'POST',
        url: `${cateHeader}/create`,
        data: param
    });

    export const getManage = () => new Request({
        method: 'GET', url: `${cateHeader}/manager`
    });

    export const update = (param: {
        id: number;
        name?: string;
        description?: string;
        coverUrl?: string;
    }) => new Request({
        method: 'POST',
        url: `${cateHeader}/update`,
        data: {
            name: null,
            description: null,
            coverUrl: null,
            ...param
        }
    });

}

export namespace user {

    export const register = (param: {
        username: string;
        password: string;
        nickname: string;
        email: string;
        phoneNumber: string;
    }) => new Request({
        method: 'POST',
        url: `${userHeader}/signUp`,
        data: param
    });

    export const login = (param: {
        username: string;
        password: string;
    }) => new Request({
        method: 'POST',
        url: `${userHeader}/signIn`,
        data: param
    });

    export const search = (keyword: string) => new Request({
        method: 'GET', url: `${userHeader}/search?keyword=${keyword}`
    });

    export const getMyInfo = () => new Request({
        method: 'GET', url: `${userHeader}/current`
    });

    export const getInfoById = (id: string) => new Request({
        method: 'GET', url: `${userHeader}/${id}`
    });

    export const update = (param: {
        id: number,
        nickname?: string,
        signature?: string,
        avatarUrl?: string,
        privacyShow?: boolean
    }) => new Request({
        method: 'POST',
        url: `${userHeader}/update`,
        data: {
            ...param,
            privacyShow: param.privacyShow ? 1 : 0
        }
    });

}

export namespace notice {

}

export namespace theme {

}

export namespace history {

}

export namespace favorite {

}

export namespace post {

}

export namespace inbox {

}
