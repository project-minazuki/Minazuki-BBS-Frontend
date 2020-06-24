import {API, MockServer} from './consts';

const header = (!!0 ? API : MockServer);

export const getUserInfo = `${header}/user/getInfo`;
