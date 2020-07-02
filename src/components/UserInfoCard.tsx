import React, {FC, memo} from "react";

import '../styles/components/UserInfoCard.scss';
import {User} from "../configs/types";
import * as url from '../configs/url';

import {Avatar, Tag} from 'antd';
import {defaultAvatar} from "../configs/consts";
import {getUserGroup} from "../utils/tools";
import {useHistory} from "react-router";
import IconItem from "./IconItem";
// @ts-ignore
import ListItem from "./ListItem";

interface IProps {
    className?: string | undefined;
    info: User;
}

const UserInfoCard: FC<IProps> = memo(({className, info}) => {

    const history = useHistory();

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
          <div className='nickname'>{info.nickname ?? '游客'}</div>
          <div className='username'>{`用户名： ${info.username}`}</div>
          <div className='group'>{tags[getUserGroup(info)]}</div>
          <div className='entries'>
            <IconItem type='if-inbox' title='私信' className='item' msg={2}
                      onClick={() => history.push('/testApp')}/>
            <IconItem type='if-todo' title='待处理' className='item'/>
          </div>
          <div className='menu'>

          </div>
        </div>
      </div>
    )
})

export default UserInfoCard;
