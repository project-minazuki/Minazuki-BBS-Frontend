import React, {FC, memo, useEffect} from 'react';
import {createBrowserHistory as createHistory} from 'history';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as MainRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import Index from './pages/index';
import Sagas from "./sagas";
import TestApp from './test/container';
import {reducers} from "./redux/reducers";

createHistory();

const saga = createSagaMiddleware();
const middleWares = [saga];
const middlewareEnhancer = applyMiddleware(...middleWares);
const isDev = process.env.NODE_ENV === 'development';
const enhancer = isDev ? composeWithDevTools(middlewareEnhancer) : middlewareEnhancer;
export const store = createStore(reducers, enhancer);
saga.run(Sagas);

store.subscribe(() => axios.interceptors.request.use((config) => {
    const token = store.getState().user.token ?? '';
    config.headers.Authorization = "Bearer " + token;
    return config;
}, (error: any) => Promise.reject(error)))
axios.defaults.withCredentials = true;

const App: FC = memo(() => {

    useEffect(() => {
        import('./utils/statement').then(({statement}) => statement());
    }, [])

  return (
    <Provider store={store}>
      <MainRouter>
        <Route path="/" component={Index} />
        <Route path="/testApp" component={TestApp} />
      </MainRouter>
    </Provider>
  );
});

export default App;
