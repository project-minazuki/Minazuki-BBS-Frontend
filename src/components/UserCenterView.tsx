import React, {CSSProperties, FC, memo, useEffect} from "react";
import {HashRouter, Redirect, Route, Switch, Link} from "react-router-dom";
import {RouteComponentProps} from "react-router";

import '../styles/components/UserCenterView.scss';

import Card from "./Card";
import {UserStore} from "../redux/reducers/user";
import {Badge, Empty} from 'antd';
import {Favorite, Mail} from "../configs/types";
import {inbox} from "../configs/api";
import MailItem from "./MailItem";
import FavoriteItem from "./FavoriteItem";

interface IProps {
    className?: string;
    user: UserStore;
    callbacks: {
        inbox: () => void;
        favorite: () => void;
        delFav: (id: number) => void;
    };
    inProcess: boolean;
}

const hash = ['/', '/message', '/theme', '/reply', '/favorite',];
const label = ['首页', '消息', '主题', '回复', '收藏',];

const TabMessage: FC<{
    refresh: () => void;
    inProcess: boolean;
    inbox: Mail[];
    style?: Partial<CSSProperties>;
}> = memo(props => {

    useEffect(() => {
        props.refresh(); return;
    }, []);

    let el: any = [], $i = 0;

    if (props.inbox.length === 0) el.push(<Empty />);
    else for (const ii of props.inbox) {
        el.push(<MailItem content={ii} key={$i ++} />);
    }

    return (
        <div className='tab-message' style={props.style ?? {}}>
            {el}
        </div>
    )
});


const TabFavorite: FC<{
    refresh: () => void;
    $delete: (id: number) => void;
    inProcess: boolean;
    fav: Favorite[];
    style?: Partial<CSSProperties>;
}> = memo(props => {

    useEffect(() => {
        props.refresh(); return;
    }, []);

    let el: any = [], $i = 0;

    if (props.fav.length === 0) el.push(<Empty />);
    else for (const ii of props.fav) {
        el.push(<FavoriteItem content={ii} key={$i ++} />);
    }

    return (
        <div className='tab-favorite'>
            {el}
        </div>
    )
})


const UserCenterView: FC<IProps> = memo(props => {

    const {className, user, callbacks, inProcess} = props;

    const $el = [<></>,
        <TabMessage refresh={callbacks.inbox} inbox={user.mails} inProcess={inProcess}/>,
        <></>,
        <></>,
        <TabFavorite refresh={callbacks.favorite} fav={user.favorites} inProcess={inProcess} $delete={callbacks.delFav}/>
    ]

    const render = (props: RouteComponentProps) => {

        const href = props.match.path;
        const $id = hash.indexOf(href);
        let links = [];
        const badgeOffset = [-28, 0] as any;

        for (let i = 0; i < 5; ++ i) {
            if (i === 1) links.push(<Badge count={user.inbox} offset={badgeOffset}
                key={i}><Link to={hash[i]}
                      className={`nav-item` + (i === $id ? ' selected' : '')}>
                {label[i]}
            </Link></Badge>)
            else links.push(<Badge count={0} offset={badgeOffset}
            key={i}><Link to={hash[i]}
                className={`nav-item` + (i === $id ? ' selected' : '')}>
                {label[i]}
            </Link></Badge>);
        }

        return (
            <Card><div className={`card-container`}>
                <div className='nav-bar'>
                    {links}
                </div>
                {$el[$id]}
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
