// @flow
import {ACTION_TYPES} from './index';
import type {MovePiecesType} from '../reducers/reducers.types';

const updatePiece = ({pieceId, squareId, playerId}: MovePiecesType) => ({
  type: ACTION_TYPES.UPDATE_PIECE,
  pieceId,
  squareId,
});

const clickedPiece = ({
  pieceId,
  squareId,
  playerId,
}) => ({
  type: ACTION_TYPES.CLICKED_PIECE,
  pieceId,
  playerId,
});

export {
  updatePiece,
  clickedPiece,
};
