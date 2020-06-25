import {API, MockServer} from './consts';

const header = (!!0 ? API : MockServer);

export const getUserInfo = (uid: number) => `${header}/user/getInfo/${uid}`;

export const login = `${header}/user/login`;
