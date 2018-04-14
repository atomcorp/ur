import React from 'react';
import {hot} from 'react-hot-loader';
import styles from './index.module.scss';
import {Ur} from './components';
import {Provider} from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Ur />
    </Provider>
  );
};

export default hot(module)(App);
