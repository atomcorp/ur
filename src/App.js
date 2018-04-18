import React from 'react';
import {hot} from 'react-hot-loader';
// import styles from './index.module.scss';
import {Ur} from './components';
import {Provider} from 'react-redux';
import store from './redux/store';
// start: this is temporary
import {ACTION_CREATORS} from './redux/actions';
const state = store.getState();
const counters = state.counters;
store.dispatch(ACTION_CREATORS.addAllCounters(counters));
// end: this is temp
const App = () => {
  return (
    <Provider store={store}>
      <Ur />
    </Provider>
  );
};

export default hot(module)(App);
