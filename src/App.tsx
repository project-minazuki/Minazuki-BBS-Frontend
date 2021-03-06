import React, {FC, memo, useEffect} from 'react';
import {createBrowserHistory as createHistory} from 'history';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Router as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import Index from './pages/index';
import Sagas from "./sagas";
import {reducers} from "./redux/reducers";

type Object = null | undefined | object;
export const $history: any = {
    push: (to: string) => {
        _history.push(to);
        console.log(_history)
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
    },
    $push: (path: string, state?: Object) => _history.push(path, state),
};
const _history = createHistory();

const saga = createSagaMiddleware();
const middleWares = [saga];
const middlewareEnhancer = applyMiddleware(...middleWares);
const isDev = process.env.NODE_ENV === 'development';
const enhancer = isDev ? composeWithDevTools(middlewareEnhancer) : middlewareEnhancer;
export const store = createStore(reducers, enhancer);
saga.run(Sagas);

store.subscribe(() => !!store.getState().user.token &&
    axios.interceptors.request.use((config) => {
    config.headers.Authorization = store.getState().user.token ?? undefined;
    return config;
}, (error: any) => Promise.reject(error)));
axios.defaults.withCredentials = true;

const App: FC = memo(() => {

    useEffect(() => {
        import('./utils/statement').then(({statement}) => statement());
    }, []);

  return (
    <Provider store={store}>
      <Router history={_history}>
        <Index />
      </Router>
    </Provider>
  );
});

export default App;
