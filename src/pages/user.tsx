import React, {FC, memo, useContext} from "react";
import {UserProps} from '../containers/pages/user';
import '../styles/user.scss';
import * as url from '../configs/url';

import {message} from 'antd';
import ayane from '../images/bg-ayane.png';
import BgImg from "../components/BgImg";
import {RouteContext} from "../components/PageFrame";
import {HashRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";

const illegalUID = (uid: any) => {
    if (uid === undefined) {
        message.info('您还没有登录，将跳转登陆页面！');
        return <Redirect to='/' />;
    } else if (/[a-zA-Z_]/.test(uid)) {
        message.info('UID 格式不正确，将回到主页！');
        return <Redirect to='/' />;
    } else return undefined;
}

const User: FC<UserProps> = memo(({info, loggedIn}) => {

    const route = useContext(RouteContext);

    console.log(route);

    const history = useHistory();

    return (
      <div id='page-user' className='page'>
          {illegalUID(route.match.params.uid ?? info._id)}
          <BgImg src={ayane} />
          <HashRouter><Switch>
          <Route path='/' exact/>
          <Route path='/message' exact/>
          <Route path='/theme' exact/>
          <Route path='/reply' exact/>
          <Route path='/favorite' exact/>
          <Redirect from='/*' to='/' />
        </Switch></HashRouter>
      </div>
    )
});

export default User;
