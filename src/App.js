import React from 'react';
import {hot} from 'react-hot-loader';
import styles from './index.module.scss';
import {RenderDice} from './containers';
import ThrowDice from './containers/ThrowDice/ThrowDice';
import {Provider} from 'react-redux';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 className={styles.red}>React!!!</h1>
        <RenderDice />
        <ThrowDice />
      </div>
    </Provider>
  );
};

export default hot(module)(App);
