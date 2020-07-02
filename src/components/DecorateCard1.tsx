import React, {CSSProperties, FC, memo} from "react";
import {Avatar, message} from "antd";
import {defaultAvatar} from "../configs/consts";
import '../styles/components/DecorateCard1'

interface IProps {
    className?: string|undefined;
}

const DecorateCard1: FC<IProps> = memo((props) => {
    const $class = props.className ?? '';

    return(
        <div id='comp-decorate-card'>
            <div className={`container ${$class}`}>
                <div className='icon'>
                    <Avatar src={defaultAvatar} size={64}
                        className='avatar'/>
                </div>
                <div className='para1' >
                    <p>并不是恋上了，只是，</p>
                    <p>不可抗拒地，被吸引了。</p>

                </div>
                <div className='para2'>
                    「恋 × シンアイ彼女」
                </div>
            </div>
        </div>
    )
})

export default DecorateCard1;