import React, {FC, memo} from "react";
import {DeleteOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import '../styles/components/FavoriteItem.scss';
import {Favorite} from "../configs/types";
import ThemeItemSimply from "./ThemeItemSimply";
import {stringConvert} from "../utils/DateTimes";
import {themeToTheme} from "../utils/tools";

interface IProps {
    className?: string | undefined;
    content: Favorite;
    del: any;
}

const FavoriteItem: FC<IProps> = memo(props => {

    const {$theme, createdAt, lastViewedAt, id} = props.content;
    const $$theme = themeToTheme($theme);

    const handleClick = () => props.del(id);

    return (
        <div id='comp-favorite-item' className={props.className}>
            <div className='container'>
                <div className='text-field'>
                    <div className='desc'>
                        {`收藏于 ${stringConvert(createdAt)} · 最终浏览于 ${stringConvert(lastViewedAt)}`}
                    </div>
                    <Button type='link' title={`删除该收藏`} className='button' onClick={handleClick}>
                        <DeleteOutlined />删除
                    </Button>
                </div>
                <div className='theme-detail'>
                    <ThemeItemSimply item={$$theme} />
                </div>
            </div>
        </div>
    )
});

export default FavoriteItem;
