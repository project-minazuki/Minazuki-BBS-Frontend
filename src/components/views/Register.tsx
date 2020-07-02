import React, {ChangeEvent, FC, memo, useState} from 'react';
import {RegisterProps} from "../../containers/views/Register";
import '../../styles/components/views/Register.scss';

import {useHistory} from "react-router";
import {Form, Input, Button, Progress, message} from 'antd';
import {
    LeftOutlined, RightOutlined,
    CheckOutlined, LoadingOutlined,
} from '@ant-design/icons';

import BgImg from "../BgImg";

import atri from '../../images/bg-atri.png';
import * as url from '../../configs/url';
import SignCard from "../SignCard";
import {checkPassWord} from "../../utils/tools";
import {pwdMinLength} from "../../configs/consts";

const regSteps: number = 3;

const NowForm: FC<{step: number, alia?: string}> = memo(({step, alia}) => {

    const [strength, setStrength] = useState(0);
    const text = ['', '弱', '较弱', '中等', '较强', '强'];
    const color = ['', 'red', 'orange', '', '', '#73CF46'];

    const testPwd = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const res = checkPassWord(value);
        setStrength(res < 0 ? 0 : res);
    }

    if (step <= 0) return <>
        <Form.Item name='username' className='input-item'
                   rules={[{required: true, message: '用户名不能为空'},
                       {pattern: /^[a-z0-9A-Z_]+$/, message: '用户名仅可包含字母、数字以及下划线'},
                       {pattern: /^[a-zA-Z].*$/, message: '用户名的第一个字符必须是字母'}]}>
            <Input placeholder='用户名' />
        </Form.Item>
        <Form.Item name='password' className='input-item'
                   rules={[{required: true, message: '新密码不能为空'},
                       {type: 'string', min: pwdMinLength, message: `密码长度不能小于 ${pwdMinLength} 位`}]}>
            <Input.Password placeholder='新密码' onChange={testPwd}/>
        </Form.Item>
        <Form.Item name='passwordConfirm' className='input-item'
                   rules={[{required: true, message: '请确认您的密码'},
                       ({ getFieldValue }) => ({
                           validator(rule, value) {
                               if (!value || getFieldValue('password') === value) {
                                   return Promise.resolve();
                               } else return Promise.reject('两次输入的密码不匹配，请重试！');
                           },
                       }),]}>
            <Input.Password placeholder='确认密码' />
        </Form.Item>
        <Form.Item><div className='pwd-strength'>
            <div className='label'>密码强度：</div>
            <Progress type='line' steps={5} percent={strength * 20} className='progress'
                      strokeWidth={14}
                      format={(percent) => {
                          const v = (percent ?? 0) / 20;
                          return <div style={{color:'black'}}> {text[Math.ceil(v)]}</div>;
                      }} strokeColor={color[strength]} size={'small'}/></div>
        </Form.Item>
    </>;
    else if (step === 1) return <>
        <Form.Item name='phone' className='input-item'
                   rules={[{required: true, message: '电话号码不能为空！'}]}>
            <Input placeholder='移动电话号码' />
        </Form.Item>
        <Form.Item name='email' className='input-item'
                   rules={[{type: 'email', message: '请输入合法的电子邮件地址！'},
                       {required: true, message: '电子邮件地址不能为空！'}]}>
            <Input placeholder='电子邮箱地址' />
        </Form.Item>
    </>;
    else return <div className='success-form'>
        <CheckOutlined className='success-icon'/>
        <div className='success-title'>
            注册成功
        </div>
        <div className='success-content'>
            {alia}，欢迎您的加入！
        </div>
    </div>;
})

const Register: FC<RegisterProps> = memo(({
    tryRegister, waiting,
}) => {
    const [form] = Form.useForm();
    const [step, setStep] = useState(0);
    const history = useHistory();

    const guides = ['首先，请设置您的账户的基本信息~', '现在，再添加一些联系方式~', ''];
    const isLastStep = () => step + 1 === regSteps;

    const stepForward = () => {
        if (step <= 0) history.push(url.login);
        else setStep(step - 1);
    }

    const stepNext = (values: {}) => {
        if (isLastStep()) history.push(url.login);
        else switch (step) {
            case regSteps - 2:
                handleSubmit(values);
                break;
            default: setStep(step + 1);
        }

    }

    const handleSubmit = (values: {}) => {
        console.log(values);
        tryRegister(2000, () => setStep(step + 1));
    }

    return (
        <div id='view-register' className='bg-frame'>
          <BgImg src={atri} />
          <SignCard title='注册' favicon={false}>
            <div className='guide'>
              {guides[step]}
            </div>
            <div className='form'>
              <Form form={form} size='large' onFinish={stepNext}
                    onFinishFailed={() => message.warn('请检查表单内容合法性！')}>
                <NowForm step={step} alia={form.getFieldValue('username')}/>
              </Form>
            </div>
            <div className='navigator'>
              <Button title={''} type='text' shape="round" size='large'
                      disabled={isLastStep()}
                      onClick={stepForward} className='nav-button'>
                <LeftOutlined />{!step ? `返回登陆` : `上一步`}
              </Button>
              <div className='now-step'>
                {`第 ${step + 1} 步，共 ${regSteps} 步`}
              </div>
              <Button title={''} type='text' shape="round" size='large'
                      onClick={() => form.submit()} className='nav-button'>
                {isLastStep() ? '现在登陆' : '下一步'}
                {waiting ? <LoadingOutlined /> : <RightOutlined />}
              </Button>
            </div>
          </SignCard>
        </div>
    )
});

export default Register;
