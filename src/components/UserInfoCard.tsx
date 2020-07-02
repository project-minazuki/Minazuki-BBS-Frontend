import React, {FC, memo} from "react";

import '../styles/components/UserInfoCard.scss';
import * as url from '../configs/url';

import {Avatar, Tag} from 'antd';
import {defaultAvatar} from "../configs/consts";
import {getUserGroup} from "../utils/tools";
import {useHistory} from "react-router";
import IconItem from "./IconItem";
import ListItem from "./ListItem";
import {UserStore} from "../redux/reducers/user";

interface IProps {
    className?: string | undefined;
    store: UserStore;
}

const UserInfoCard: FC<IProps> = memo(({className, store}) => {

    const history = useHistory();
    const {info, manageCate, inbox} = store;
    const group = getUserGroup(info, manageCate);

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
          <div className='group'>{tags[group]}</div>
          {!!group && <div className='entries'>
            <IconItem type='if-inbox' title='私信' className='item' msg={inbox}
                      onClick={() => history.push('/testApp')}/>
            <IconItem type='if-todo' title='待处理' className='item'/>
          </div>}
            {group ? <div className='menu'>
              <ListItem label='个人中心' type='if-home' onClick={() => {
              }}/>
              <ListItem label='管理中心' type='if-center' onClick={() => {
              }}/>
              <ListItem label='退出登录' type='if-exit' onClick={() => {
              }}/>
            </div> : <div className='menu' style={{margin: '8px 0 0 0'}}>
              <ListItem label='登录' type='if-step' onClick={() => history.push(url.login)} />
            </div>}
        </div>
      </div>
    )
})

export default UserInfoCard;
