import React, {FC, memo} from "react";

import '../styles/components/TopBar.scss';
import logo from '../images/favicon.svg';

import {Input} from 'antd';

interface IProps {

}

const TopBar: FC<IProps> = memo(({}) => {

    return <div id='comp-top-bar'>
      <div className='container'>
        <img src={logo} alt='いいね！' className='favicon'/>
        <div className='title'>Minazuki BBS</div>
      </div>
    </div>;
})

export default TopBar;
