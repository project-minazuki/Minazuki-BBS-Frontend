import {ApiServer, MockServer} from './consts';

const header = (!!0 ? ApiServer : MockServer);

export const getUserInfo = (uid: number) => `${header}/user/getInfo/${uid}`;

export const login = `${header}/user/login`;

export const fetchMyInfo = `${header}/user/me`;

export const testGetMethod = `${MockServer}/test/testGetMethod`;

