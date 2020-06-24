
export type ReportType = 'theme' | 'post';

export interface User {
    _id: number;
    username: string;
    isAdmin: boolean;
    avatar: string;
    nickname: string;
    createTime: string;
    lastSignInTime: string;
    email: string;
    phone: string;
    signature: string;
    privacyShow: boolean;
    manageCateId: number | null;
    password?: string;
};

export interface Notification {
    _id: number;
    receiver: number;
    createTime: string;
    checked: boolean;
    content: string;
}

export interface Announcement {
    _id: number;
    cateId: number;
    authorId: number;
    content: string;
    createTime: string;
    updateTime: string;
}

export interface Category {
    _id: number;
    name: string;
    status: boolean;
    desc: string;
    createTime: string;
    updateTime: string;
    visits: number;
}

export interface HistoryViewed {
    _id: number;
    uid: number;
    themeId: number;
    viewTime: string;
}

export interface Theme {
    _id: number;
    status: boolean;
}

export interface Post {

}

export interface Report {
    _type: ReportType;
    _id: number;
    refId: number;
    uid: number;
    reason: string;
    checked: boolean;
    createTime: string;
    checkTime: string;
}

