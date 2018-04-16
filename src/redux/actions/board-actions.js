// @flow

import {ACTION_TYPES} from './';
import type {BoardActionType} from '../reducers/reducers.types';

export const updateBoard = ({ 
  from,
  to,
  pieceId,
  playerId,
}: BoardActionType
) => ({
  type: ACTION_TYPES.UPDATE_BOARD,
  from,
  to,
  pieceId,
  playerId,
});

type MovesType = [
  BoardActionType
];

export const movePiecesFromTo = (moves: Array<MovesType>) => {
  return (dispatch) => {
    moves.forEach((move) => {
      dispatch(updateBoard(move));
    });
  };
};
