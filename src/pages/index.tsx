import React, {FC, lazy, memo, useState} from 'react';
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {Suspense} from 'react';

import PageFrame from "../containers/PageFrame";
import Loading from "../components/Loading";

import * as url from '../configs/url';

import Login from "../containers/views/Login";
import Register from "../containers/views/Register";
import TestApp from "../test/container";

const Homepage = lazy(() => import("../containers/pages/homepage"));

const Index: FC = memo(() => {

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
          <Route path={url.login} component={Login} />
          <Route path={url.register} component={Register} />
          <Route path={url.root} exact render={routerRender(<Homepage />)} />
          <Route path="/testApp" component={TestApp} />
        </Switch>
      </>
    );
})

export default withRouter(Index);
