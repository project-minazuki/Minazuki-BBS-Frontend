import React, {FC, HTMLProps, memo} from "react";
import {User} from "../configs/types";
import {useHistory} from "react-router";

import '../styles/components/TopBar.scss';
import logo from '../images/favicon.svg';

import {Input, message, Tooltip, Popover} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import IconFont from "./IconFont";
import UserInfoCard from "./UserInfoCard";
import {appName} from "../configs/consts";

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
    const history = useHistory();

    const backToHome = () => history.push('/')

    return <div id='comp-top-bar'>
      <div className='container'>
        <span className='logo-title' onClick={backToHome}>
          <Tooltip placement='bottomLeft' title={appName}>
            <img src={logo} alt='いいね！' className='favicon'/>
          </Tooltip>
          <Tooltip placement='bottom' title='回到首页'>
            <div className='title'>{appName}</div>
          </Tooltip>
        </span>
        <SearchBar className='search-bar'/>
        <div className='entry-groups'>
          <Popover trigger='click' placement="bottomRight" className='user-card'
                   content={<UserInfoCard info={userInfo} />}>
            <IconFont type='if-user' className='user-entry' />
          </Popover>
        </div>
      </div>
    </div>;
})

export default TopBar;
