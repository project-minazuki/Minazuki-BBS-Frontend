import React, {CSSProperties, FC, memo} from "react";
import {Category} from "../configs/types";
import '../styles/components/CateCard.scss';

import {Avatar, message} from 'antd';
import {defaultAvatar} from "../configs/consts";
import {useHistory} from "react-router";

interface IProps {
    className?: string | undefined;
    msg?: number | undefined;
    info: Category;
    style?: Partial<CSSProperties>;
}

const CateCard: FC<IProps> = memo(props => {
    const $class = props.className ?? '';
    const $cate = props.info;
    const $style = props.style ?? {};

    const history = useHistory();

    const handleClick = () => {
        const cateId = $cate._id ?? 0;
        // TODO: 修改成对应版块的路由
        message.info(`即将前往 ${cateId} 版块`)
        setTimeout(() => history.push('/testApp'), 2000)
    }

    return (
        <div id='comp-cate-Card' style={$style} onClick={handleClick}>
            <div className={`container ${$class}`}>
                <div className='title'>所属板块</div>
                <div className='content'>
                <div className='avatar'>
                    <Avatar src={$cate.avatar ?? defaultAvatar} size={64}/>
                </div>
                <div className='text-field'>
                    <div className='name'>{$cate.name ?? '图形学学习'}</div>
                    <div className='desc'>{$cate.desc ?? '56 主题 · 108 帖子'}</div>
                </div>
                </div>
            </div>
        </div>

    )
});

export default CateCard;
