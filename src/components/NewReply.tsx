import React, {CSSProperties, FC, HTMLProps, memo} from "react";
import '../styles/components/ThemeItem.scss';

import {message, Pagination, Radio} from 'antd';
import {useHistory} from "react-router";
import '../styles/components/NewReply.scss'
import returnIcon from "../images/returnIcon.png";
import tipOff from "../images/tip-off.png";
import ThemeItem from "./ThemeItem";
import {Category, Theme, User} from "../configs/types";

interface IProps {

}


const NewReply: FC<IProps> = memo((props) => {

    const history = useHistory();
    const backToHome = () => history.push('/')
    const handleClickTipOff = () => {
        message.info('你正在尝试举报')
    }


    //TODO:事件监听
    return <div id='comp-new-reply' className='container'>
        <div className='new-reply-post-word'>新建回复贴</div>
        <div className='new-will-reply-post-word'>您要回复的主题帖</div>
        <ThemeItem info_Theme={{} as Theme}info_Cate={{}as Category} info_User={{}as User}>
            <div className='new-will-reply-post'/>
        </ThemeItem>

    </div>;
})
export default NewReply;
