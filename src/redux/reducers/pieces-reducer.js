// @flow
import constructPieces from '../../methods/constructPieces';
import {ACTION_TYPES} from '../actions';
import type {
  PiecesStateType,
  PiecesActionType,
} from './reducers.types';

const initalState = constructPieces();

const pieces = (
  state: PiecesStateType = initalState,
  action: PiecesActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_PIECE:
      return Object.assign(
        {},
        state,
        {
        [action.pieceId]: Object.assign(
          {},
          state[action.pieceId],
          {
            squareId: action.squareId,
          }
        ),
      });
    default:
      return state;
  }
};

export default pieces;
