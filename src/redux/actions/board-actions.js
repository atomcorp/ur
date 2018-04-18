// @flow

import {ACTION_TYPES} from './';
import type {BoardActionType} from '../reducers/reducers.types';

export const addRemovePieces = ({
  from,
  to,
  piece,
  playerId,
}: BoardActionType
) => ({
  type: ACTION_TYPES.ADD_REMOVE_PIECES,
  from,
  to,
  piece,
  playerId,
});

export const addAllPieces = (pieces) => ({
  type: ACTION_TYPES.ADD_ALL_PIECES,
  pieces,
});

type MovesType = [
  BoardActionType
];

export const movePiecesFromTo = (moves: Array<MovesType>) => {
  return (dispatch) => {
    moves.forEach((move) => {
      dispatch(addRemovePieces(move));
    });
  };
};
