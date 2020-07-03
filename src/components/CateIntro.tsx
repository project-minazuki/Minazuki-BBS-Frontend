import React, {CSSProperties, FC, memo} from "react";
import {Avatar, message} from "antd";
import {defaultAvatar} from "../configs/consts";
import '../styles/components/CateIntro.scss'
import {Category,User} from "../configs/types";

interface IProps {
    className?: string | undefined;
    info_Cate: Category;
    info_User:User;
}

const CateIntro: FC<IProps> = memo((props) => {
    const $class = props.className ?? '';
    const $Cate = props.info_Cate;
    const $User = props.info_User;
    return (
        <div id='comp-topic-intro' className={`container ${$class}`}>
            <div className='cate-intro-head'>
            <div className='cate-intro-avatar'>
                <Avatar src={$Cate.avatar ?? defaultAvatar} size={128}/>
            </div>
            <div className='comp-cate-name'>{$Cate.name ?? '图形学学习'}</div>
            <div className='comp-cate-controller-name'>{$User.username ?? '版主：tmc'}</div>
            <div className='comp-cate-desc'>{$Cate.desc ?? '这是一个讨论 Unity 开发，OpenGL 图形学学习以及带佬互膜的板块'}</div>
            </div>
            <div className='cate-intro-tail'>
                <div className='theme'>
                <div className='theme-number'>{'56'}</div>
                    <div className='theme-word'>{'主题'}</div>
                </div>
                <div className='post'>
                    <div className='post-number'>{'108'}</div>
                    <div className='post-word'>{'帖子'}</div>
                </div>
                <div className='visits'>
                    <div className='visits-number'>{$Cate.visits ?? '2.3K'}</div>
                    <div className='visits-word'>{'访问'}</div>
                </div>
            </div>
        </div>

    )
})

export default CateIntro;