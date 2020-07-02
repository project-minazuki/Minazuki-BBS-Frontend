import React, {createContext, FC, memo, useEffect} from "react";

import {PageFrameProps} from "../containers/PageFrame";
import '../styles/components/PageFrame.scss';
import TopBar from "./TopBar";
import {RouteComponentProps} from "react-router";

export const RouteContext = createContext({} as RouteComponentProps<any>);

const PageFrame: FC<PageFrameProps> = memo((props) => {

    const toTopBar = {
        userInfo: props.userInfo,
        loggedIn: props.loggedIn,
    }

    const route = {
        history: props.history,
        match: props.match,
        location: props.location,
    }

    useEffect(() => {
        if (props.loggedIn && !props.userInfo._id) {
            props.reloadInfo(false);
        }
    }, [props.loggedIn]);

    return (
        <div id='comp-page-frame'>
            <TopBar {...toTopBar}/>
            <RouteContext.Provider value={route}>
                {props.children}
            </RouteContext.Provider>
        </div>
    );
});

export default PageFrame;
