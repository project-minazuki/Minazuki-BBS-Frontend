import React, {CSSProperties, FC, memo} from "react";
import {Category} from "../configs/types";
import '../styles/components/CateItem.scss';
import * as url from '../configs/url';

import {Avatar, message} from 'antd';
import {defaultAvatar} from "../configs/consts";
import {useHistory} from "react-router";

interface IProps {
    className?: string | undefined;
    msg?: number | undefined;
    info: Category;
    style?: Partial<CSSProperties>;
}

const CateItem: FC<IProps> = memo(props => {
    const $class = props.className ?? '';
    const $cate = props.info;
    const $style = props.style ?? {};

    const history = useHistory();

    const handleClick = () => {
        const cateId = $cate._id ?? 0;
        // TODO: 修改成对应版块的路由
        message.info(`前往 ${cateId} 版块`)
        history.push(url.$category(cateId));
    }

    return (
        <div id='comp-cate-item' style={$style} onClick={handleClick}>
          <div className={`container ${$class}`}>
            <div className='avatar'>
              <Avatar src={$cate.avatar ?? defaultAvatar} size={42}/>
            </div>
            <div className='text-field'>
              <div className='name'>{$cate.name ?? '板块名称'}</div>
              <div className='desc'>{$cate.desc ?? '板块描述'}</div>
            </div>
          </div>
        </div>
    )
});

export default CateItem;
