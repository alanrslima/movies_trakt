import React from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './store';
import AppContainer from './screens/Main';

export default function App() {

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <AppContainer />
    </Provider>
  )
}

