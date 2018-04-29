// @flow

import {ACTION_TYPES} from './';
import type {BoardActionType} from '../reducers/reducers.types';

export const addRemoveCounters = ({
  from,
  to,
  counter,
  playerId,
}: BoardActionType
) => ({
  type: ACTION_TYPES.ADD_REMOVE_COUNTERS,
  from,
  to,
  counter,
  playerId,
});

export const addAllCounters = (counters) => ({
  type: ACTION_TYPES.ADD_ALL_COUNTERS,
  counters,
});

type MovesType = [
  BoardActionType
];

export const moveArrayOfCountersFromTo = (moves: Array<MovesType>) => {
  return (dispatch, getState) => {
    const latestState = getState();
    moves.forEach((move) => {
      dispatch(addRemoveCounters(
        Object.assign(
          {},
          move,
          {
            counter: latestState.counters[move.counter.id],
          },
        )
      ));
    });
  };
};
