import React, {FC, memo} from "react";

import '../styles/components/UserInfoCard.scss';
import {User} from "../configs/types";

import {Avatar, Tag} from 'antd';
import {defaultAvatar} from "../configs/consts";
import {getUserGroup} from "../utils/tools";

interface IProps {
    className?: string | undefined;
    info: User;
}

const UserInfoCard: FC<IProps> = memo(({className, info}) => {

    const tags = [
        <Tag>游客</Tag>,
        <Tag color='green'>用户</Tag>,
        <Tag color='red'>版主</Tag>,
        <Tag color='geekblue'>管理员</Tag>,
        <Tag color='gold'>开发者</Tag>,
    ]

    return (
      <div id='comp-user-info-card' className={className??''}>
        <div className='container'>
          <Avatar src={info.avatar ?? defaultAvatar} size={64}
                  className='avatar'/>
          <div className='nickname'>{info.nickname}</div>
          <div className='username'>{`用户名： ${info.username}`}</div>
          <div className='group'>{tags[getUserGroup(info)]}</div>
        </div>
      </div>
    )
})

export default UserInfoCard;
