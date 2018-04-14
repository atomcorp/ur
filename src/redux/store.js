import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import combineReducers from './reducers';

const store = createStore(
  combineReducers,
  applyMiddleware(logger)
);

export default store;
