import React, {CSSProperties, FC, memo} from "react";
import {StarOutlined} from '@ant-design/icons';
import {Button} from 'antd';

import '../styles/components/ThemeItemSimply.scss';
import {Theme} from "../configs/types";
import {useHistory} from "react-router";
import {$theme} from "../configs/url";

interface IProps {
    className?: string | undefined;
    style?: Partial<CSSProperties> | undefined;
    item: Theme;
}

const ThemeItemSimply: FC<IProps> = memo(props => {

    const {title, pinned, highQuality, createdTime, _id} = props.item;
    const history = useHistory();
    console.log(props.item)

    const handleClick = () => history.push($theme(_id));

    return (
        <div id='comp-theme-item-simply' className={props.className}
             style={props.style} onClick={handleClick}>
            <div className='container'>
                <div className='icons'><StarOutlined /></div>
                <div className='title'>{title}</div>
                <div className='theme-info'>{createdTime}</div>
            </div>
        </div>
)
});

export default ThemeItemSimply;
