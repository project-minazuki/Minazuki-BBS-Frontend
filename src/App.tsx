import React, {FC, memo, useEffect} from 'react';
import {createBrowserHistory as createHistory} from 'history';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter as MainRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducers} from "./redux/reducers";
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import Index from './pages/index';
import Sagas from "./sagas";
import TestApp from './test/container';

createHistory();

const saga = createSagaMiddleware();
const middleWares = [saga];
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleWares)));
saga.run(Sagas);

axios.interceptors.request.use((config) => {
    const token = store.getState().user.token ?? '';
    config.headers.Authorization = "Bearer " + token;
    return config;
}, (error: any) => Promise.reject(error));
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
