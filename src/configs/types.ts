
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
    themeNumber?:number;
    postNumber?:number;
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

export interface Mail {
    _id?: number;
    createdAt?: string;
    checked?: boolean;
    content: string;
    senderId: number;
    recipientId: number;
}

export interface RegisterForm {
    username: string;
    password: string;
    nickname: string;
    phoneNumber: string;
    email: string;
}


export interface UpdateUserInfoForm {
    id: number;
    avatarUrl?: string;
    nickname?: string;
    privacyShow?: boolean;
    signature?: string;
}

export interface Favorite {
    id: number;
    createdAt: string;
    lastViewwdAt: string;
    ownerId: number;
    themeId: number;
    $theme: Theme;
}
