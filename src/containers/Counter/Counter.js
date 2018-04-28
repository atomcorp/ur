import React from 'react';
import {connect} from 'react-redux';
import counterA from '../../assets/counter-a.png';
import counterB from '../../assets/counter-b.png';
import {ACTION_CREATORS} from '../../redux/actions/';
import type {StoreType} from '../../redux/store.types';
import type {CountersStateType} from '../../redux/reducers/reducers.types';

const Counter = ({
  counter,
  moveCounter,
  counters,
}: CountersStateType) => {
  const handleClick = (counter) => {
    moveCounter(counters[counter.id]);
  };
  return (
    <img
      width="50"
      height="50"
      src={
        counter.playerId === 'playerA'
          ? counterA
          : counterB
      }
      onClick={
        () => handleClick(counter)
      }
    />
  );
};

const mapStateToProps = (store: StoreType) => ({
  counters: store.counters,
});

const mapDispatchToProps = (dispatch) => ({
  moveCounter: (counter) => {
    dispatch(ACTION_CREATORS.clickedOnCounter(counter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
