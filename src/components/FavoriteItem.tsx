import React, {FC, memo} from "react";
import {DeleteOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import '../styles/components/FavoriteItem.scss';
import {Favorite} from "../configs/types";
import ThemeItemSimply from "./ThemeItemSimply";

interface IProps {
    className?: string | undefined;
    content: Favorite;
}

const FavoriteItem: FC<IProps> = memo(props => {

    const {$theme, createdAt, lastViewedAt} = props.content;

    const handleClick = () => {}        // TODO;

    return (
        <div id='comp-favorite-item' className={props.className}>
            <div className='container'>
                <div className='text-field'>
                    {`收藏于 ${createdAt} · 最终浏览于 ${lastViewedAt}`}
                    <Button type='link' title={`删除该收藏`} className='button' onClick={handleClick}>
                        <DeleteOutlined />删除
                    </Button>
                </div>
                <div className='theme-detail'>
                    <ThemeItemSimply item={$theme} />
                </div>
            </div>
        </div>
    )
});

export default FavoriteItem;
