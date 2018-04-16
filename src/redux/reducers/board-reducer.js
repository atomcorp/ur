// @flow

import constructboard from '../../components/Board/constructBoard';
import {ACTION_TYPES} from '../actions/index';
import type {
  BoardStateType,
  BoardActionsType,
} from './reducers.types';

const initialboard = constructboard();

const applyPieceHelper = (
  isFromOrTo,
  pieceOrNothing,
  state,
) => ({
    [isFromOrTo]: Object.assign(
    {},
    state[isFromOrTo],
    {
      contents: pieceOrNothing,
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
        applyPieceHelper(action.from, 'nothing', state),
        applyPieceHelper(action.to, action.pieceId, state),
    );
    default:
      return state;
  }
};

export default board;
