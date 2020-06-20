
export type UserType = 'Guest' | 'Member' | 'Manager' | 'Owner';

export interface UserInfo {
    username: string;
    group: UserType;
    avatarUrl: string;
};
