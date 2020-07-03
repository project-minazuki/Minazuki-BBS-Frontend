import {store} from "../App";
import {developerName, pwdMinLength} from "../configs/consts";
import {Announcement, Category, Theme, User} from "../configs/types";
import {stringConvert} from "./DateTimes";
import md5 from 'js-md5';

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

/**
 *
 * 用户新密码校验
 *
 * @param pwd 密码字符串
 * @return      密码分析结果
 */
export function testPassWord(pwd: string){
    return {
        hasDigit: /\d/.test(pwd),
        hasLower: /[a-z]/.test(pwd),
        hasUpper: /[A-Z]/.test(pwd),
        hasSymbol: /\W|_/.test(pwd),
        hasIllegal: /\n|\f|\r|\t|\v|\s/.test(pwd),
        metLength: pwd.length >= pwdMinLength,
    }
}

type pwdTestResult = ReturnType<typeof testPassWord>;
type pwsStrength = -1 | 0 | 1 | 2 | 3 | 4 | 5;

export function analyzePassWord(res: pwdTestResult): pwsStrength {
    let value = 0;
    for (let key in res)
        if (res.hasOwnProperty(key))
            switch (key) {
                case 'hasDigit': case 'hasLower': case 'hasUpper':
                    value += res[key] ? 1 : 0; break;
                case 'hasSymbol': value += res[key] ? 2 : 0; break;
            }
    if (value > 5) value = 5;
    return (res.hasIllegal || !res.metLength) ? -1 : value as pwsStrength;
}

export const checkPassWord = (pwd: string) =>
    analyzePassWord(testPassWord(pwd));

type UserType = 0 | 1 | 2 | 3 | 4;

export function getUserGroup(user: User, cate?: Category[]): UserType {
    if (user._id === undefined) return 0;
    if (!!developerName.find(value => value === user.username)) return 4;
    if (user.isAdmin) return 3;
    if (!!cate) return cate.length ? 2 : 1;
    if (user.manageCateId === null) return 1;
    else return 2;
}

export function _getUserGroup(user: User, cnt?: number): UserType {
    const $cnt = cnt ?? user.manageCateId ?? 0;
    if (user._id === undefined) return 0;
    if (!!developerName.find(value => value === user.username)) return 4;
    if (user.isAdmin) return 3;
    return !!$cnt ? 2 : 1;
}

export function cateToCate(obj: any): Category {
    return {
        avatar: obj.coverUrl,
        createTime: stringConvert(obj.createdAt),
        desc: obj.description,
        _id: obj.id,
        name: obj.name,
        status: obj.status,
        updateTime: stringConvert(obj.updatedAt),
        visits: obj.visitsCount,
    }
}

export function userToUser(body: any): User {
    return {
        ...body, _id: body.id,
        createdAt: stringConvert(body.createdAt),
        lastSignIn: stringConvert(body.lastSignIn),
        avatar: body.avatarUrl,
    }
}

export function convertGravatar(email: string): string {
    const mailto = email.trim().toLowerCase();
    const hash = md5(mailto);
    return `https://www.gravatar.com/avatar/${hash}`;
}

export function themeToTheme(body: any): Theme {
    return {
        ...body,
        cateId: body?.categoryId,
        createdTime: stringConvert(body?.createdAt),
        authorId: body?.creatorId,
        _id: body?.id,
        latestReplyTime: stringConvert(body?.latestReplyAt),
        replies: body?.replyCount,
        pinned: body?.top,
        visits: body?.visitsCount,
    }
}

export function noticeToAnnouncement(body: any): Announcement {
    return {
        ...body,
        _id: body?.id,
        cateId: body?.categoryId,
        authorId: body?.creatorId,
        createTime: stringConvert(body?.createdAt),
        updateTime: stringConvert(body?.updatedAt),
    }
}

