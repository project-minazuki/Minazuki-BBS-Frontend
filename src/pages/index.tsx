import React, {FC, lazy, memo} from 'react';
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {Suspense} from 'react';

import PageFrame from "../containers/PageFrame";
import Loading from "../components/Loading";

const Index: FC = memo(() => {

    const routerRender = (Component: JSX.Element) => (props: RouteComponentProps) => (
        <PageFrame>
            <Suspense fallback={<Loading />}>

            </Suspense>
        </PageFrame>
    );

    return (
        <>

        </>
    );
})
