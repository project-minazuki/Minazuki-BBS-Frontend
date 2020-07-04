import React, {FC, memo} from "react";
import {MailOutlined} from '@ant-design/icons';

import '../styles/components/MailItem.scss';
import {Mail} from "../configs/types";

interface IProps {
    className?: string | undefined;
    content: Mail;
}

const MailItem: FC<IProps> = memo(props => {

    const {senderId, _id, content, checked, createdAt} = props.content;

    const handleClick = () => {}        // TODO;

    return (
        <div id='comp-mail-item' className={props.className}>
            <div className='container'>
                <MailOutlined className='icon' onClick={handleClick}/>
                <div className='text-field'>
                    <div className='content'>{content}</div>
                    <div className='infomation'>{`发件人：${senderId} · ${createdAt} · #${_id}`}</div>
                </div>
            </div>
        </div>
    )
});

export default MailItem;
