// @flow
import {MOVE_PIECE} from './actions-types';
import {MovePiecesType} from '../reducers/reducers.types';

const movePiece = ({pieceId, squareId, playerId}: MovePiecesType) => ({
  type: MOVE_PIECE,
  pieceId,
  squareId,
  playerId,
});

export {
  movePiece,
};
