// @flow
import {ACTIONS_TYPES} from './actions-types';
import type {MovePiecesType} from '../reducers/reducers.types';

const updatePiece = ({pieceId, squareId, playerId}: MovePiecesType) => ({
  type: ACTIONS_TYPES.UPDATE_PIECE,
  pieceId,
  playerId,
});

export const clickedPiece = ({
  pieceId,
  squareId,
  playerId,
}) => ({
  type: ACTIONS_TYPES.CLICKED_PIECE,
  pieceId,
  playerId,
});

export {
  updatePiece,
};
