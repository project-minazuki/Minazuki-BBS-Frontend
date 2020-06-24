import React, {FC, memo, useEffect} from 'react';
import {createBrowserHistory as createHistory} from 'history';
import {Route} from 'react-router';
import thunk, {ThunkAction} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {HashRouter as MainRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducers} from "./redux/reducers";

createHistory();

const middleWares = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleWares)));

const App: FC = memo(() => {

    useEffect(() => {
        import('./utils/statement').then(({statement}) => statement());
    }, [])

  return (
    <Provider store={store}>
      <MainRouter>

      </MainRouter>
    </Provider>
  );
});

export default App;
