import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { App } from './components/App';

import {
  GlobalStateProvider,
  globalInitialState,
  globalReducer,
} from './state-management';


export default function AppContainer() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <GlobalStateProvider initialState={globalInitialState} reducer={globalReducer}>
          <App />
        </GlobalStateProvider>
      </QueryParamProvider>
    </Router>
  );
}

AppContainer.displayName = 'AppContainer';
