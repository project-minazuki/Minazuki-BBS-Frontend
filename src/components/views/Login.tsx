import React, {FC, memo} from 'react';
import {LoginProps} from "../../containers/views/Login";
import '../../styles/components/views/Login.scss';

import {Button, Form, Input, message} from 'antd';
import {HomeOutlined, LoginOutlined, LoadingOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import SignCard from "../SignCard";

import shiroha from '../../images/bg-shiroha.png';
import * as url from '../../configs/url';

const styles = {
    input: {width: '360px'} as any,
    bg: {backgroundImage: `url(${shiroha})`} as any,
}

const Login: FC<LoginProps> = memo(({handleLogin, loggedIn, isLoading}) => {

    let history = useHistory();
    let [form] = Form.useForm();

    const backToHome = () => {
        history.push('/');
    };

    const forgetPwd = () => {
        message.info('功能开发中，请联系管理员来更改密码');
    };

    const navToReg = () => {
        history.push(url.register);
    };

    const tryLogin = (values: any) => {
        const {username, password} = values;
        handleLogin(username, password);
    }

    // TODO: 可能需要从 viewStore 里取出刚注册的信息
    return (
        <div id="view-login" className='bg-frame'>
            <div className='bg-shiroha' style={styles.bg} />
            <SignCard title={'登录'} favicon={true}>
                {!isLoading && loggedIn ? (<div className='logged-in-fallback'>
                    <div className='text-field'>
                        似乎您已经登陆成功了…… 要回到主页吗
                    </div>
                    <Button type="primary" shape="round" icon={<HomeOutlined />}
                            size='large' onClick={backToHome} className='back'>
                        回到主页
                    </Button>
                </div>) : (<>
                    <Form form={form} className='login-form' onFinish={tryLogin} size='large'>
                        <Form.Item name='username' style={styles.input} required>
                            <Input placeholder='用户名'/>
                        </Form.Item>
                        <Form.Item name='password' style={styles.input} required>
                            <Input.Password placeholder='密码' />
                        </Form.Item>
                        <Form.Item className='bottom-buttons'>
                            <Button type="text" shape="round" onClick={navToReg}>
                                注册新用户
                            </Button>
                            <Button type="primary" shape="round"  className='main'
                                    icon={!isLoading ? <LoginOutlined /> : <LoadingOutlined />}
                                    size='large' htmlType='submit'>
                                登录
                            </Button>
                            <Button type="text" shape="round" onClick={forgetPwd}>
                                忘记密码？
                            </Button>
                        </Form.Item>
                    </Form>
                </>)}
            </SignCard>
        </div>
    )
})

export default Login;
