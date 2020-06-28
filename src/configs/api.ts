import {ApiServer, MockServer} from './consts';

const header = (!!0 ? ApiServer : MockServer);

export const getUserInfo = (uid: number) => `${header}/user/getInfo/${uid}`;

export const login = `${header}/user/login`;

export const fetchMyInfo = `${header}/user/me`;

export const testGetMethod = `${MockServer}/test/testGetMethod`;


export const getOpeningCategories = `${header}/category`;

export const getCategoryInfo = (cateId: string) => `${header}/category/${cateId}`;

export const deleteCategory = (cateId: string) => `${header}/category/${cateId}`;

export const closeCategory = (cateId: string) => `${header}/category/${cateId}/close`;

export const getAllModerator = (cateId: string) => `${header}/category/${cateId}/moderator`;

export const dismissModerator = (cateId: string, modId: string) => `${header}/category/${cateId}/moderator/${modId}`;

export const openCategory = (cateId: string) => `${header}/category/${cateId}/open`;

export const getAllCategories = `${header}/category/all`;

export const createCategory = `${header}/category/create`;

