// @flow

import constructboard from '../../methods/constructBoard';
import {ACTION_TYPES} from '../actions/index';
import type {
  BoardStateType,
  BoardActionsType,
} from './reducers.types';

const initialboard = constructboard;

const addOrRemovePiece = (
  isFromOrTo,
  piece,
  state,
  addOrRemove
) => ({
    [isFromOrTo]: Object.assign(
    {},
    state[isFromOrTo],
    {
      contents: addOrRemove === 'add'
        ? [...state[isFromOrTo].contents, piece]
        : state[isFromOrTo].contents.filter(
          (contentsPiece) => {
            if (contentsPiece.id !== piece.id) {
              return contentsPiece;
            }
          }
        ),
    }
  ),
});

const addAllPieces = (state, pieces) => {
  return Object.keys(pieces).reduce(
    (acc, pieceKey) => {
      const piece = pieces[pieceKey];
      return Object.assign(
        {},
        acc,
        {
          [piece.squareId]: Object.assign(
            {},
            acc[piece.squareId],
            {
              contents: [...acc[piece.squareId].contents, piece],
            }
          ),
        }
      );
    }, state);
};


const board = (
  state: BoardStateType = initialboard,
  action: BoardActionsType
) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_REMOVE_PIECES:
      return Object.assign(
        {},
        state,
        addOrRemovePiece(action.from, action.piece, state, 'remove'),
        addOrRemovePiece(action.to, action.piece, state, 'add'),
    );
    case ACTION_TYPES.ADD_ALL_PIECES:
      return Object.assign(
        {},
        state,
        addAllPieces(state, action.pieces)
      );
    default:
      return state;
  }
};

export default board;
