import React, {FC, memo} from "react";

import '../styles/components/SignCard.scss';
import logo from '../images/favicon.svg';

interface IProps {
    title: string;
    children: JSX.Element;
    favicon: boolean;
};

const SignCard: FC<IProps> = memo(({
    title, children, favicon
}: IProps) => {
    return (
        <div id="comp-sign-card"><div className='bg-frame-container'>
            {favicon && <img src={logo} alt='いいね！' className='favicon'/>}
            <div className='card-title'>{title}</div>
            <div>{children}</div>
        </div></div>
    )
});

export default SignCard;
