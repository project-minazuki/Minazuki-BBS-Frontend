
export const root = '/';

export const login = '/login';

export const register = '/register';

export const search = '/search';

export const manager = '/manager';

export const report = '/report';

export const category = '/category/:cateId';

export const theme = '/theme/:themeId';

export const announcement = '/announcement/:announceId';

export const user = '/user/:uid';

export const $user = (uid: string) => `/user/${uid}`;
