import {Tag} from "antd";
import React from "react";
import Card from "../components/Card";

import {LoadingOutlined} from '@ant-design/icons';

export const tags = [
    <Tag>游客</Tag>,
    <Tag color='green'>用户</Tag>,
    <Tag color='red'>版主</Tag>,
    <Tag color='geekblue'>管理员</Tag>,
    <Tag color='gold'>开发者</Tag>,
]

export const loading$1 = <div style={{
    width: '100vw', height: '100vh', display: 'flex', alignItems: 'center',
    justifyContent: 'center'}}><Card style={{
    width: '300px', height: '300px', fontSize: '120px',
}}><LoadingOutlined /></Card></div>
