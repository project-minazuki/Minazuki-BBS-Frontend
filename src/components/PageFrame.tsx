import React, {createContext, FC, memo, useEffect} from "react";

import {PageFrameProps} from "../containers/PageFrame";
import '../styles/components/PageFrame.scss';
import TopBar from "./TopBar";
import {RouteComponentProps} from "react-router";

import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

export const RouteContext = createContext({} as RouteComponentProps<any>);

const PageFrame: FC<PageFrameProps> = memo((props) => {

    const toTopBar = {
        loggedIn: props.loggedIn,
        store: props.userInfo,
        logout: props.logout,
    }

    const route = {
        history: props.history,
        match: props.match,
        location: props.location,
    }

    const $style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
    }

    const unload = props.loggedIn && !props.userInfo.info._id;
    const path = props.location.pathname + props.location.hash;

    const icon = <LoadingOutlined style={{ fontSize: '72px'}} spin />;
    const loading = <div style={$style}><Spin indicator={icon}/></div>;

    useEffect(() => {
        console.log(route);
        if (unload) {
            props.reloadInfo(path, false, '久 等 了');
        }
    }, [props.loggedIn]);

    return (
        <div id='comp-page-frame'>
            <TopBar {...toTopBar}/>
            <RouteContext.Provider value={route}>
                {unload ? loading : props.children}
            </RouteContext.Provider>
        </div>
    );
});

export default PageFrame;
