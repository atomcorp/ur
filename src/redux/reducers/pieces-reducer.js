// @flow
import constructPieces from '../../components/Piece/constructPieces';
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
      return Object.assign({}, state, {
        [action.playerId]: Object.assign(
          {},
          state[action.playerId],
          {
            [action.pieceId]: action.squareId,
          }
        ),
      });
    default:
      return state;
  }
};

export default pieces;
