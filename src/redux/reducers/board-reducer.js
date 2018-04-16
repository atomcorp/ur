// @flow

import constructboard from '../../components/Board/constructBoard';
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
        ? [...pieceId]
        : state[isFromOrTo].filter(
          (currentContent) => currentContent !== pieceId
        ),
    }
  ),
});

const board = (
  state: BoardStateType = initialboard,
  action: BoardActionsType
) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_BOARD:
      return Object.assign(
        {},
        state,
        addOrRemovePiece(action.from, action.pieceId, state, 'remove'),
        addOrRemovePiece(action.to, action.pieceId, state, 'add'),
    );
    default:
      return state;
  }
};

export default board;
