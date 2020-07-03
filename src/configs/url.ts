
const header = '';

export const root = `${header}/`;

export const login = `${header}/login`;

export const register = `${header}/register`;

export const search = `${header}/search`;

export const manager = `${header}/manager`;

export const report = `${header}/report`;

export const category = `${header}/category/:cateId`;

export const theme = `${header}/theme/:themeId`;

export const announcement = `${header}/announcement/:announceId`;

export const user = `${header}/user/:uid/`;

export const me = `${header}/user/`;

export const $user = (uid: string, hash?: string) => `${header}/user/${uid}/#/` + (hash ?? '');

export const $category = (cid: number) => `${header}/category/${cid}`;

export const $404 = `${header}/`;
