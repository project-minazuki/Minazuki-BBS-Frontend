import React, {FC, HTMLProps, memo} from "react";
import {useHistory} from "react-router";

import '../styles/components/TopBar.scss';
import logo from '../images/favicon.svg';
import * as url from '../configs/url';

import {Input, message, Tooltip, Popover, notification} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import IconFont from "./IconFont";
import UserInfoCard from "./UserInfoCard";
import {appName} from "../configs/consts";
import {UserStore} from "../redux/reducers/user";

interface IProps {
    store: UserStore;
    loggedIn: boolean;
    logout: any;
}

const SearchBar: FC<{} & HTMLProps<any>> = memo((props) => {

    const trySearch = (value: string) => {
        // TODO: 搜索逻辑
        if (value !== '') message.info(`将要搜索 "${value}"`)
    }

    return (
        <div className={`comp-search-bar ${props.className}`}>
            <Input.Search placeholder='全局搜索……' className='input-search' onSearch={trySearch}/>
        </div>
    )
})

const TopBar: FC<IProps> = memo((props) => {

    const {loggedIn, store} = props;
    const history = useHistory();

    const backToHome = () => history.push('/')

    const infoCardCB = {
        logout: () => {
            notification.info({
                message: '已退出登录',
                description: `${store.info.nickname} 已经成功退出登录，返回登陆页面`,
            });
            props.logout();
            history.push(url.login);
        },
    }

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
                   content={<UserInfoCard store={store} cb={infoCardCB} />}>
            <IconFont type='if-user' className='user-entry' />
          </Popover>
          <div className='loading'>{store.isLoading && <LoadingOutlined />}</div>
        </div>
      </div>
    </div>;
})

export default TopBar;
