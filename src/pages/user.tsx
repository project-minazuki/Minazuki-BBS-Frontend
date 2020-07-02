import React, {FC, memo, useContext, useEffect, useState} from "react";
import {UserProps} from '../containers/pages/user';
import '../styles/user.scss';
import * as url from '../configs/url';

import {message, Avatar, Button} from 'antd';
import {ArrowRightOutlined, EditOutlined, SaveOutlined} from '@ant-design/icons';
import ayane from '../images/bg-ayane.png';
import BgImg from "../components/BgImg";
import {RouteContext} from "../components/PageFrame";
import {useHistory} from "react-router-dom";
import Card from "../components/Card";
import {defaultAvatar, defaultSignature} from "../configs/consts";
import {loading$1, tags} from "../utils/items";
import {_getUserGroup} from "../utils/tools";
import UserCenterView from "../components/UserCenterView"

const Item: FC<{title: string; content: string}> =memo(({title, content}) => (
    <div className='inner-item'>
       <div className='inner-title'>{title}</div>
       <div className='inner-content'>{content}</div>
    </div>
))

const EditCard: FC<{}> = memo(props => {

    return (
    <Card className='edit-card'>

    </Card>)
})

const User: FC<UserProps> = memo(({user, loggedIn, getById, lib, inProcess}) => {

    const route = useContext(RouteContext);
    const history = useHistory();
    const isMe = !route.match.params.uid || route.match.params.uid === user.info._id;
    const uid = route.match.params.uid ?? user.info._id;

    const [edit, setEdit] = useState(false);

    useEffect(() => {
        // if (loggedIn && !user.info._id) return;
        console.log(uid);
        illegalUID(uid, loggedIn);
        console.log(lib[uid]);
        if (!isMe && !lib[uid]) getById(uid);
    }, [])

    const illegalUID = (uid: any, loggedIn: boolean) => {
        if (!!uid && /[a-zA-Z_]/.test(uid)) {
            message.info(`UID: ${uid} 格式不正确，将回到主页！`); // TODO: 怎么样才能不弹出两次通知啊？
            history.push(url.root);
        } else if (uid === undefined && !loggedIn) {
            message.info('您还没有登录，将跳转登陆页面！');
            history.push(url.login);
        } else return undefined;
    }

    const $lib = ($uid: number) => {
        return lib[$uid] ?? {
            avatar: defaultAvatar,
            nickname: '加载中……',
            isAdmin: false,
            manageCateId: uid ?? 0,
            createdAt: '加载中……',
            lastSignIn: '加载中……',
            signature: '加载中……',
            username: '加载中……',
            _id: 0,
        }
    }

    return (
      <div id='page-user' className='page'>
        <BgImg src={ayane} />
        {!inProcess ? loading$1 :
        <div className='container'>
          <div className='upper-block'>
            <Card><div className='card-container'>
              <div className='standard-info'>
                <Avatar src={$lib(uid).avatar ?? defaultAvatar} size={64} className='avatar'/>
                <div className='text-field'>
                  <div className='main-text'>
                    <div className='nickname'>{$lib(uid).nickname}</div>
                    <div className='tags'>{tags[_getUserGroup($lib(uid))]}</div>
                    <div className='username'>用户名： {$lib(uid).username}</div>
                  </div>
                  <div className='sign-text'>{$lib(uid).signature ?? defaultSignature}</div>
                </div>
              </div>
              <div className='buttons-group'>
                <Button className='button' shape='round' onClick={()=>setEdit(!edit)}>
                  {edit ? <SaveOutlined /> : <EditOutlined/>}
                  {edit ? '保存修改' : '编辑信息'}
                </Button>
              </div>
            </div></Card>
          </div>
          <div className='lower-block'>{edit ? <EditCard /> :
            <><UserCenterView className='center-view'/>
            <Card className='standard-info'><div>
              <div className='main-title'>个人基本信息</div>
              <div className='list-content'>
                <Item title='用户名' content={$lib(uid).username} />
                <Item title='用户 ID' content={$lib(uid)._id.toString()} />
                <Item title='注册日期' content={$lib(uid).createdAt} />
                <Item title='最后登录' content={$lib(uid).lastSignIn} />
              </div>
              <div className='wrapper'><Button title='进行主题帖，回复等管理' shape='round' className='goto-manage' size='large'
                      onClick={() => {}}>
                <ArrowRightOutlined />
                管理入口
              </Button></div>
            </div></Card></>}
          </div>
        </div>}
      </div>
    )
});

export default User;
