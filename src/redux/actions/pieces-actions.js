// @flow
import {UPDATE_PIECE} from './actions-types';
import type {MovePiecesType} from '../reducers/reducers.types';

const updatePiece = ({pieceId, squareId, playerId}: MovePiecesType) => ({
  type: UPDATE_PIECE,
  pieceId,
  squareId,
  playerId,
});

export {
  updatePiece,
};
