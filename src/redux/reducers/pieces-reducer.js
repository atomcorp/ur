// @flow
import constructPieces from '../../components/Pieces/constructPieces';
import {MOVE_PIECE} from '../actions/actions-types';
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
    case MOVE_PIECE:
      return Object.assign({}, state, {
        [action.playerId]: {
          [action.pieceId]: action.squareId,
        },
      });
    default:
      return state;
  }
};

export default pieces;
