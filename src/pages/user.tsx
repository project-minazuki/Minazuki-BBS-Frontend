import React, {FC, memo, useContext} from "react";
import {UserProps} from '../containers/pages/user';
import '../styles/user.scss';

import {message} from 'antd';
import ayane from '../images/bg-ayane.png';
import BgImg from "../components/BgImg";
import {RouteContext} from "../components/PageFrame";

const User: FC<UserProps> = memo(() => {

    const route = useContext(RouteContext);

    message.info(route.match.params.uid);

    return (
      <div id='page-user'>
        <BgImg src={ayane} />
      </div>
    )
});

export default User;
