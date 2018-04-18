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
  pieceId,
  state,
  addOrRemove
) => ({
    [isFromOrTo]: Object.assign(
    {},
    state[isFromOrTo],
    {
      contents: addOrRemove === 'add'
        ? [...state[isFromOrTo].contents, pieceId]
        : state[isFromOrTo].contents.filter(
          (currentContent) => {
            return currentContent !== pieceId;
          }
        ),
    }
  ),
});

const addAllPieces = (state, pieces) => {
  return Object.keys(pieces).reduce(
    (acc, pieceKey) => {
      const currentSquareId = pieces[pieceKey].squareId;
      const pieceId = pieces[pieceKey].id;
      return Object.assign(
        {},
        acc,
        {
          [currentSquareId]: Object.assign(
            {},
            acc[currentSquareId],
            {
              contents: [...acc[currentSquareId].contents, pieceId],
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
        addOrRemovePiece(action.from, action.pieceId, state, 'remove'),
        addOrRemovePiece(action.to, action.pieceId, state, 'add'),
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
