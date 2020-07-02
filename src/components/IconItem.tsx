import React, {FC, memo} from 'react';
import IconFont from "./IconFont";
import '../styles/components/IconItem.scss';

import {Badge} from 'antd';

interface IProps {
    className?: string | undefined;
    size?: 'S' | 'M' | 'L' | undefined;
    type: string;
    title: string;
    msg?: number | undefined;
    onClick?: () => void;
}

const IconItem: FC<IProps> = memo(props => {

    const $class = props.className ?? '';
    const $size = `size-${props.size ?? 'M'}`;
    const $msg = props.msg ?? 0;
    const $span = props.onClick ?? (() => {});

    return (
        <div id='comp-icon-item' className={$class} onClick={$span}>
          <div className={`container ${$size}`}>
            <Badge count={$msg}>
              <IconFont type={props.type} className='icon' />
            </Badge>
            <div className='title'>{props.title}</div>
          </div>
        </div>
    )
});

export default IconItem;
