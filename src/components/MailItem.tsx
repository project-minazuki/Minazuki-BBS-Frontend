import React, {FC, memo} from "react";
import {MailOutlined} from '@ant-design/icons';
import {message} from 'antd';

import '../styles/components/MailItem.scss';
import {Mail} from "../configs/types";
import {stringConvert} from "../utils/DateTimes";
import * as api from '../configs/api';

interface IProps {
    className?: string | undefined;
    content: Mail;
}

const MailItem: FC<IProps> = memo(props => {

    const {senderId, _id, content, checked, createdAt} = props.content;

    const handleClick = () => {
        const hold = message.loading('正在通信中');
        // _id && api.inbox.get(_id.toString()).exec().then(res =>
        //     hold.then(() => res.data.code < 0 ? message.warn(res.data.msg) : message.success('成功'),
        //         () => message.info('Rejected'))
        // ).catch(err => message.error(err.toString()))
        _id && api.inbox.get(_id.toString()).exec().then(res => hold());
    }

    return (
        <div id='comp-mail-item' className={props.className} onClick={handleClick}>
            <div className='container'>
                <MailOutlined className='icon' />
                <div className='text-field'>
                    <div className='content'>{content}</div>
                    <div className='infomation'>{`发件人：${senderId} · ${stringConvert(createdAt ?? '')} · #${_id}`}</div>
                </div>
            </div>
        </div>
    )
});

export default MailItem;
