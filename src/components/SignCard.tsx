import React, {FC, HTMLProps, memo} from "react";

import '../styles/components/SignCard.scss';
import logo from '../images/favicon.svg';

interface IProps {
    title: string;
    children: JSX.Element | JSX.Element[];
    favicon: boolean;
};

const SignCard: FC<IProps & HTMLProps<any>> = memo(({
    title, children, favicon, className
}) => {
    return (
        <div id="comp-sign-card" className={className}><div className='bg-frame-container'>
            {favicon && <img src={logo} alt='いいね！' className='card-favicon'/>}
            <div className='card-title'>{title}</div>
            <div>{children}</div>
        </div></div>
    )
});

export default SignCard;
