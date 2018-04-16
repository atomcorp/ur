import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combineReducers from './reducers';

const store = createStore(
  combineReducers,
  applyMiddleware(
    thunk,
    logger
  )
);

export default store;
