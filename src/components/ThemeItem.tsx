import React, {CSSProperties, FC, memo} from "react";
import {Theme} from "../configs/types";
import {Category} from "../configs/types";
import {User} from "../configs/types";
import pin from '../images/pin.png';
import HQuality from '../images/HQuality.png';
import '../styles/components/ThemeItem.scss';

import {Avatar, message} from 'antd';
import {defaultAvatar} from "../configs/consts";
import {useHistory} from "react-router";

interface IProps {
    className?: string | undefined;
    msg?: number | undefined;
    info_Theme: Theme;
    info_Cate: Category;
    info_User: User;
    style?: Partial<CSSProperties>;
}

const ThemeItem: FC<IProps> = memo(props => {
    const $class = props.className ?? '';
    const $Theme = props.info_Theme;
    const $Cate = props.info_Cate;
    const $User = props.info_User;

    const history = useHistory();

    const handleClick = () => {
        const ThemeId = $Theme._id ?? 0;
        // TODO: 修改成对应版块的路由
        message.info(`即将前往 ${ThemeId} 帖子`)
        setTimeout(() => history.push('/testApp'), 2000)
    }

    return (
        <div id='comp-theme-item' className={`container ${$class}`} onClick = {handleClick}>
            <div className='comp-theme-head'>
                <div className='comp-theme-head-left'onClick={handleClick}>
                {$Theme.pinned && <img src={pin} alt='いいね！' className='pinned-favicon'/>}
                {$Theme.highQuality && <img src={HQuality} alt='いいね！' className='high-Quality-favicon'/>}
                <div className='comp-theme-name'>{$Theme.title ?? '主题名称'}</div>
                </div>
                <div className='comp-theme-head-right'>
                <div className='latest-Reply-Time'>{$Theme.latestReplyTime ?? '最新回复时间'}</div>
                </div>
            </div>

            <div className='comp-theme-tail'>
                <div className='comp-theme-tail-left'>
                <div className='cate-avatar'>
                    <Avatar src={$Cate.avatar ?? defaultAvatar} size={30}/>
                </div>
                <div className='comp-cate-name'>{$Cate.name ?? '板块名称'+'|'}</div>
                <div className='author-avatar'>
                    <Avatar src={$User.avatar ?? defaultAvatar} size={30}/>
                </div>
                <div className='theme-author-name'>{$User.username ?? '主题作者名称'}</div>
                <div className='theme-created-Time'>{$Theme.createdTime ?? '建立时间'}</div>
                </div>
                <div className='comp-theme-tail-right'>
                <div className='replier-avatar'>
                    <Avatar src={$User.avatar ?? defaultAvatar} size={30}/>
                </div>
                <div className='latest-Reply-name'>{$User.username ?? '最新回复人名称'}</div>
                </div>
            </div>
        </div>

    )
});

export default ThemeItem;
