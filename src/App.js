import React from 'react';
import {hot} from 'react-hot-loader';
import styles from './index.module.scss';
import {Dice} from './components';
import store from './redux/store';
import {
  throwDiceStart,
  throwDiceEnd,
} from './redux/actions/action-creators';

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(throwDiceStart());
store.dispatch(throwDiceEnd([1, 1, 1, 1]));
store.dispatch(throwDiceStart());
store.dispatch(throwDiceEnd([0, 1, 0, 1]));

unsubscribe();

const App = () => {
  return (
    <div>
      <h1 className={styles.red}>React!!!</h1>
      <Dice />
    </div>
  );
};

export default hot(module)(App);
