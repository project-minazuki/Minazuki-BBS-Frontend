
export type ReportType = 'theme' | 'post';
export type LoginMethod = 'phone' | 'email' | 'username';

export interface User {
    _id: number;
    username: string;
    isAdmin: boolean;
    avatar: string;
    nickname: string;
    createdAt: string;
    lastSignIn: string;
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
    avatar?: string;
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
    title: string;
    pinned: boolean;
    highQuality: boolean;
    authorId: number;
    cateId: number;
    visits: number;
    replies: number;
    updateTime: string;
    latestReplyTime: string;
    createdTime: string;
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

