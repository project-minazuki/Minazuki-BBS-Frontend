import React, {ChangeEvent, FC, memo, useState} from 'react';
import {RegisterProps} from "../../containers/views/Register";
import '../../styles/components/views/Register.scss';

import {useHistory} from "react-router";
import {Form, Input, Button, Progress} from 'antd';
import {
    LeftOutlined, RightOutlined,
    CheckOutlined, LoadingOutlined,
} from '@ant-design/icons';

import BgImg from "../BgImg";

import atri from '../../images/bg-atri.png';
import * as url from '../../configs/url';
import SignCard from "../SignCard";
import {checkPassWord} from "../../utils/tools";
import {toASCII} from "punycode";

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
        <Form.Item name='username' className='input-item'>
            <Input placeholder='用户名' />
        </Form.Item>
        <Form.Item name='password' className='input-item'>
            <Input.Password placeholder='新密码' onChange={testPwd}/>
        </Form.Item>
        <Form.Item name='passwordConfirm' className='input-item'>
            <Input.Password placeholder='确认密码' />
        </Form.Item>
        <Form.Item><div className='pwd-strength'>
            <div className='label'>密码强度：</div>
            <Progress type='line' steps={5} percent={strength * 20} className='progress'
                      strokeWidth={14}
                      format={(percent, success) => {
                          const v = (percent ?? 0) / 20;
                          return <div style={{color:'black'}}> {text[Math.ceil(v)]}</div>;
                      }} strokeColor={color[strength]} size={'small'}/></div>
        </Form.Item>
    </>;
    else if (step == 1) return <>
        <Form.Item name='phone' className='input-item'>
            <Input placeholder='移动电话号码' />
        </Form.Item>
        <Form.Item name='email' className='input-item'>
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
    const isLastStep = () => step + 1 == regSteps;

    const stepForward = () => {
        if (step <= 0) history.push(url.login);
        else setStep(step - 1);
    }

    const stepNext = () => {
        if (isLastStep()) history.push(url.login);
        else switch (step) {
            case regSteps - 2:
                handleSubmit();
                break;
            default: setStep(step + 1);
        }

    }

    const handleSubmit = () => {    // TODO: 尝试使用 ref 触发原生 finish 事件来取代
        const value = {
            username: form.getFieldValue('username'),
            password: form.getFieldValue('password'),
            phone: form.getFieldValue('phone'),
            email: form.getFieldValue('email'),
        }
        console.log(value);
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
              <Form form={form} size='large'>
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
                      onClick={stepNext} className='nav-button'>
                {isLastStep() ? '现在登陆' : '下一步'}
                {waiting ? <LoadingOutlined /> : <RightOutlined />}
              </Button>
            </div>
          </SignCard>
        </div>
    )
});

export default Register;
