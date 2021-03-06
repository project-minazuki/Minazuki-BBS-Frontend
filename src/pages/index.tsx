import React, {FC, lazy, memo, useEffect} from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {Suspense} from 'react';

import PageFrame from "../containers/PageFrame";
import Loading from "../components/Loading";

import * as url from '../configs/url';

import Login from "../containers/views/Login";
import Register from "../containers/views/Register";
import TestApp from "../test/container";

const Homepage = lazy(() => import("../containers/pages/homepage"));
const User = lazy(() => import("../containers/pages/user"));
const PostPage = lazy(() => import("../containers/pages/PostPage"));
const CategoryPage = lazy(() => import("../containers/pages/CategoryPage"));


const Index: FC = memo(() => {

    useEffect(() => window.scrollTo(0, 0));

    const routerRender = (Component: JSX.Element) => (props: RouteComponentProps) => (
        <PageFrame {...props}>
            <Suspense fallback={<Loading />}>
                {Component}
            </Suspense>
        </PageFrame>
    );

    return (
      <>
        <Switch>
          <Route path={url.login} exact component={Login} />
          <Route path={url.register} exact component={Register} />
          <Route path={url.root} exact render={routerRender(<Homepage />)} />
          <Route path={url.user} exact render={routerRender(<User />)} />
          <Route path={url.me} exact render={routerRender(<User />)} />
          <Route path={url.theme} exact render={routerRender(<PostPage />)} />
          <Route path={url.category} exact render={routerRender(<CategoryPage />)} />
          <Route path="/testApp" exact component={TestApp} />
          <Redirect to={url.$404}/>
        </Switch>
      </>
    );
})

export default withRouter(Index);
