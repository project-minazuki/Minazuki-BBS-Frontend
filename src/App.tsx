import React, {useEffect} from 'react';
import {Route} from 'react-router';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "./redux/reducers";

export const store = createStore(reducers);

function App() {

    useEffect(() => {
        import('./utils/statement').then(({statement}) => statement());
    }, [])

  return (
    <Provider store={store}>
      <HashRouter>

      </HashRouter>
    </Provider>
  );
}

export default App;
