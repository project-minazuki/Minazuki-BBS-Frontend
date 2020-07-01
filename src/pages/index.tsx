import React, {FC, lazy, memo, useState} from 'react';
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {Suspense} from 'react';

import PageFrame from "../containers/PageFrame";
import Loading from "../components/Loading";

import * as xhr from '../utils/xhr';
import * as api from '../configs/api';
import * as url from '../configs/url';

import Login from "../containers/views/Login";
import Register from "../containers/views/Register";
import Homepage from "../containers/pages/homepage";

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
          <Route path={url.root} render={routerRender(<Homepage />)} />
        </Switch>
      </>
    );
})

export default withRouter(Index);
