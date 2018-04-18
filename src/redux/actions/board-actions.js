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
  type: ACTION_TYPES.ADD_REMOVE_PIECES,
  from,
  to,
  counter,
  playerId,
});

export const addAllCounters = (counters) => ({
  type: ACTION_TYPES.ADD_ALL_PIECES,
  counters,
});

type MovesType = [
  BoardActionType
];

export const moveCountersFromTo = (moves: Array<MovesType>) => {
  return (dispatch) => {
    moves.forEach((move) => {
      dispatch(addRemoveCounters(move));
    });
  };
};
