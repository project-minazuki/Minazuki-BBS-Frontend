import React, {FC, memo} from "react";
import {HashRouter, Redirect, Route, Switch, Link} from "react-router-dom";
import {RouteComponentProps} from "react-router";

import '../styles/components/UserCenterView.scss';

import Card from "./Card";

interface IProps {
    className?: string;
}

const hash = ['/', '/message', '/theme', '/reply', '/favorite',];
const label = ['首页', '消息', '主题', '回复', '收藏',];

const UserCenterView: FC<IProps> = memo(props => {

    const {className} = props;

    const render = (props: RouteComponentProps) => {

        const href = props.match.path;
        const $id = hash.indexOf(href);
        let links = [];

        for (let i = 0; i < 5; ++ i) {
            links.push(<Link to={hash[i]} key={i}
                className={`nav-item` + (i === $id ? ' selected' : '')}>
                {label[i]}
            </Link>);
        }

        return (
            <Card><div className={`card-container`}>
                <div className='nav-bar'>
                    {links}
                </div>
            </div></Card>
        )
    }

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
