
export const root = '/';

export const login = '/login';

export const register = '/register';

export const search = '/search';

export const manager = '/manager';

export const report = '/report';

export const category = '/category/:cateId';

export const theme = '/theme/:themeId';

export const announcement = '/announcement/:announceId';

export const user = '/user/:uid/';

export const me = '/user/';

export const $user = (uid: string, hash?: string) => `/user/${uid}/#/` + (hash ?? '');

export const $category = (cid: number) => `/category/${cid}`;

export const $404 = '/';
