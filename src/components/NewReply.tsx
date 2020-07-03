import React, {CSSProperties, FC, HTMLProps, memo} from "react";
import '../styles/components/ThemeItem.scss';
import moment from 'moment';
import {message,  Comment, Avatar, Form, Button, List, Input } from 'antd';
import {useHistory} from "react-router";
import '../styles/components/NewReply.scss'
import returnIcon from "../images/returnIcon.png";
import tipOff from "../images/tip-off.png";
import ThemeItem from "./ThemeItem";
import {Category, Theme, User} from "../configs/types";
import {PostPageProps} from "../containers/pages/PostPage";

interface IProps {

}

const NewReply: FC<IProps> = memo((props) => {

    const history = useHistory();

//todo:差回复框和确定
    return <div id='comp-new-reply' className='container'>
        <div className='new-reply-post-word'>新建回复贴</div>
        <div className='new-will-reply-post-word'>您要回复的主题帖</div>
        <div className='new-reply-post'>
        <ThemeItem
            info_Theme={{} as Theme}info_Cate={{}as Category} info_User={{}as User}
            className='new-will-reply-post'>
        </ThemeItem>
        </div>
        <div className='new-will-reply-post-word'>您要回复的内容</div>

    </div>;
})
export default NewReply;