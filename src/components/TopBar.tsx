import React, {FC, HTMLProps, memo} from "react";

import '../styles/components/TopBar.scss';
import logo from '../images/favicon.svg';

import {Input, message, Tooltip} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import IconFont from "./IconFont";
import {User} from "../configs/types";
import {useHistory} from "react-router";

interface IProps {
    userInfo: User;
    loggedIn: boolean;
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

const TopBar: FC<IProps> = memo((props) => {

    const {loggedIn, userInfo} = props;
    const text = loggedIn ? `当前登录：${userInfo.nickname}` : `未登录`;
    const history = useHistory();

    const backToHome = () => history.push('/')

    return <div id='comp-top-bar'>
      <div className='container'>
        <span className='logo-title' onClick={backToHome}>
          <img src={logo} alt='いいね！' className='favicon'/>
          <div className='title'>Minazuki BBS</div>
        </span>
        <SearchBar className='search-bar'/>
        <div className='entry-groups'>
          <Tooltip placement="bottomRight" title={text}>
            <IconFont type='if-user' className='user-entry' />
          </Tooltip>
        </div>
      </div>
    </div>;
})

export default TopBar;
