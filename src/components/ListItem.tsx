import React, {CSSProperties, FC, memo} from "react";

import '../styles/components/ListItem.scss';
import IconFont from "./IconFont";

interface IProps {
    className?: string | undefined;
    size?: 'S' | 'M' | 'L' | undefined;
    type?: string;
    label: string;
    onClick?: () => void;
    selected?: boolean;
    href?: string;
    key?: string;
    style?: Partial<CSSProperties>;
}

const ListItem: FC<IProps> = memo(props => {

    const $class = props.className ?? '';
    const $size = `size-${props.size ?? 'M'}`;
    const $span = props.onClick ?? (() => {});
    const $href = (props.key === props.href ?? '') || (props.selected ?? false);
    const $style = props.style ?? {};

    return (
      <div id='comp-list-item' className={$class} onClick={$span} style={$style}>
        <div className={`container ${$size} ${($href ? ' selected' : '')}`}>
          {props.type && <IconFont type={props.type} className='icon'/>}
          <div className='label'>{props.label}</div>
        </div>
      </div>
    )
});

export default ListItem;
