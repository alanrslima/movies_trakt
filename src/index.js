import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import reducers from './store';

import AppContainer from './screens/Main';


export default function App() {

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(promise))}>
      <AppContainer />
    </Provider>
  )
}

