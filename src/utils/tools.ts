import {store} from "../App";
import {developerName, pwdMinLength} from "../configs/consts";
import {User} from "../configs/types";

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

export function getUserGroup(user: User): UserType {
    if (user._id === undefined) return 0;
    if (!!developerName.find(value => value === user.username)) return 4;
    if (user.isAdmin) return 3;
    if (user.manageCateId === null) return 1;
    else return 2;
}
