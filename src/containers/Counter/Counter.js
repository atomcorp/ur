import React from 'react';
import {connect} from 'react-redux';
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
    <div
      onClick={
        () => handleClick(counter)
      }
    >
      {counter.id}
      <br />
      {counter.playerId}
    </div>
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
