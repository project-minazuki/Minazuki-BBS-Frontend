import React, {FC, memo} from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {RouteComponentProps} from "react-router";

import '../styles/components/UserCenterView.scss';

import Card from "./Card";

interface IProps {
    className?: string;
}

const UserCenterView: FC<IProps> = memo(props => {

    const {className} = props;

    const render = (props: RouteComponentProps) => (
        <Card><div className={`card-container`}>
            {JSON.stringify(props)}
        </div></Card>
    )

    return <div id='comp-user-center-view' className={className}>
        <HashRouter><Switch>
            <Route path='/' exact render={render}/>
            <Route path='/message' exact render={render}/>
            <Route path='/theme' exact render={render}/>
            <Route path='/reply' exact render={render}/>
            <Route path='/favorite' exact render={render}/>
            <Redirect from='/*' to='/' />
        </Switch></HashRouter>
    </div>
});

export default UserCenterView;
