import React, {FC, HTMLProps, memo} from "react";

import '../styles/components/TopBar.scss';
import logo from '../images/favicon.svg';

import {Input, message} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import IconFont from "./IconFont";

interface IProps {

}

const SearchBar: FC<{} & HTMLProps<any>> = memo((props) => {

    const trySearch = (value: string) => {
        // TODO: 搜索逻辑
        if (value !== '') message.info(`将要搜索 "${value}"`)
    }

    return <div className={`comp-search-bar ${props.className}`}>
        <Input.Search placeholder='全局搜索……' className='input-search' onSearch={trySearch}/>
    </div>
})

const TopBar: FC<IProps> = memo(({}) => {

    return <div id='comp-top-bar'>
      <div className='container'>
        <div className='logo-title'>
          <img src={logo} alt='いいね！' className='favicon'/>
          <div className='title'>Minazuki BBS</div>
        </div>
        <SearchBar className='search-bar'/>
        <div className='entry-groups'>
          <IconFont type='if-user' className='user-entry' />
        </div>
      </div>
    </div>;
})

export default TopBar;
