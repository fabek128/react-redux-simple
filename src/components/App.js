import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import history from './history';

import store from '../store';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);