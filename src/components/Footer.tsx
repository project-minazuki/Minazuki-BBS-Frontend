import React, {FC, memo} from "react";
import {appName, appVersion} from "../configs/consts";

import '../styles/components/Footer.scss';

interface IProps {
    className?: string
}

const Footer: FC<IProps> = memo(props => {

    const $class = props.className;

    return (
        <div id='comp-footer' className={$class}>
            <div className='text-field'>{appName} {appVersion} @开发中版本</div>
            <div className='text-field'>Project Minazuki 所属</div>
        </div>
    )
})

export default Footer;
