import React, {FC, lazy, memo, useEffect, useState} from 'react';
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

const Index: FC = memo(props => {

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
          <Route path="/testApp" component={TestApp} />

        </Switch>
      </>
    );
})

export default withRouter(Index);
