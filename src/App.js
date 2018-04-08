import React from 'react';
import {hot} from 'react-hot-loader';
import styles from './index.module.scss';

export const add = (a, b) => a + b;
const zee = () => 'z';

const App = () => {
  return (
    <div>
      <h1 className={styles.red}>React!!!</h1>
    </div>
  );
};

export default hot(module)(App);


