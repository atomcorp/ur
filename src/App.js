import React from 'react';
import {hot} from 'react-hot-loader';
import styles from './index.module.scss';
import {Dice} from './components';

const App = () => {
  return (
    <div>
      <h1 className={styles.red}>React!!!</h1>
      <Dice />
    </div>
  );
};

export default hot(module)(App);
