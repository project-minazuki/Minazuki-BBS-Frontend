import React, {FC, memo, useContext, useEffect, useState} from "react";
import {UserProps} from '../containers/pages/user';
import '../styles/user.scss';
import * as url from '../configs/url';
import {User as $User} from '../configs/types';

import {
    message, Avatar, Button, Form,
    Input, Switch, Modal, Checkbox,
} from 'antd';
import {
    ArrowRightOutlined, EditOutlined,
    SaveOutlined, LoadingOutlined,
} from '@ant-design/icons';
import ayane from '../images/bg-ayane.png';
import BgImg from "../components/BgImg";
import {RouteContext} from "../components/PageFrame";
import {useHistory} from "react-router-dom";
import Card from "../components/Card";
import {defaultAvatar, defaultSignature} from "../configs/consts";
import {loading$1, tags} from "../utils/items";
import {_getUserGroup, convertGravatar} from "../utils/tools";
import UserCenterView from "../components/UserCenterView"

const Item: FC<{title: string; content: string}> = memo(({title, content}) => (
    <div className='inner-item'>
       <div className='inner-title'>{title}</div>
       <div className='inner-content'>{content}</div>
    </div>
))

const EditCard: FC<{
    form: ReturnType<Form["useForm"]>
    cb: (value: object) => void;
    user: $User;
}> = memo(props => {

    const [form] = props.form;
    const {cb, user} = props;
    const {username, nickname, signature, privacyShow} = user;
    const _avatar = user.avatar ?? defaultAvatar;
    const [view, setView] = useState(false);
    const [avatar,setAvatar] = useState(_avatar);
    const [gravatar, setGravatar] = useState(false);
    const $avatar = () => gravatar ? convertGravatar(avatar) : avatar;

    const callback = (value: object) => cb({...value, avatar: $avatar()});

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };

    return (
    <Card className='edit-card'>
      <div className='card-container'>
        <div className='form-container'>
          <Form form={form} onFinish={callback} className='form' {...layout} size='large'
                initialValues={{username, nickname, signature, privacyShow}}
                onFinishFailed={() => message.info('表单信息验证失败，请重试！')}>
            <Form.Item name='username' label='用户名'>
              <Input disabled/>
            </Form.Item>
            <Form.Item name='nickname' label='昵称'>
              <Input />
            </Form.Item>
            <Form.Item name='signature' label='个性签名'>
              <Input />
            </Form.Item>
            <Form.Item name='privacyShow' label='显示资料' valuePropName='checked'>
              <Switch />
            </Form.Item>
            <Form.Item name='avatar'>
              <Modal title='更换头像' visible={view}
                     onCancel={() => {
                         setView(false);
                         setAvatar(_avatar);
                         setGravatar(false);
                     }}
                     onOk={() => setView(false)}
                     okText='暂存修改' cancelText='取消并还原修改'>
                <div style={{margin: '10px 0'}}>请输入头像的 URL 地址，它需要允许本站的访问：</div>
                <Input onChange={e => setAvatar(e.target.value)} value={avatar}/>
                <Checkbox checked={gravatar}
                          style={{margin: '10px 0'}}
                          onChange={e => setGravatar(!gravatar)}>
                  使用 Gravatar （需要提供电子邮件地址）
                </Checkbox>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div style={{width: '100%', margin: '10px 0'}}>预览图：</div>
                  <Avatar src={$avatar()} shape='square' size={180}/>
                </div>
              </Modal>
            </Form.Item>
          </Form>
        </div>
        <div className='avatar-container'>
          <Avatar src={$avatar()} shape='square' size={240}/>
          <Button shape='round' onClick={() => setView(true)} size='large'
                  className='edit-avatar' >
            编辑
          </Button>
        </div>
      </div>
    </Card>)
})

const User: FC<UserProps> = memo(({user, loggedIn, getById, lib, updateInfo, inProcess}) => {

    const route = useContext(RouteContext);
    const history = useHistory();
    const isMe = !route.match.params.uid || route.match.params.uid === user.info._id;
    const uid = route.match.params.uid ?? user.info._id;

    const [edit, setEdit] = useState(false);
    const [form] = Form.useForm();

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

    const handleEdit = (values: object) => {
        console.log(values);
        updateInfo(2000, () => setEdit(false));
    }

    const handleClick = () => {
        if (!edit) setEdit(!edit);
        else form.submit();
    }

    return (
      <div id='page-user' className='page'>
        <BgImg src={ayane} />
        {// TODO: 除了初始值之外还有更好的办法吗？
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
                <Button className='button' shape='round' onClick={handleClick}>
                  {edit ? (inProcess ? <LoadingOutlined /> :<SaveOutlined />) : <EditOutlined/>}
                  {edit ? '保存修改' : '编辑信息'}
                </Button>
              </div>
            </div></Card>
          </div>
          <div className='lower-block'>{edit ?
            <EditCard form={[form]} cb={handleEdit} user={user.info}/> :
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
