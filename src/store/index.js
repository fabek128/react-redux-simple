import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from '../reducers';

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

export default store;