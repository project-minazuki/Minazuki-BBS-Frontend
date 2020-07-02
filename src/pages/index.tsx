import React, {FC, lazy, memo, useState} from 'react';
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {Suspense} from 'react';

import PageFrame from "../containers/PageFrame";
import Loading from "../components/Loading";

import * as url from '../configs/url';

import Login from "../containers/views/Login";
import Register from "../containers/views/Register";


const Homepage = lazy(() => import("../containers/pages/homepage"));
const CategoryPage = lazy(() => import("../containers/pages/CategoryPage"));

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
          <Route path="/CategoryPage" exact render={routerRender(<CategoryPage />)}/>
        </Switch>
      </>
    );
})

export default withRouter(Index);
