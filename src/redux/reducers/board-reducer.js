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
  occupier,
  state,
) => ({
    [isFromOrTo]: Object.assign(
    {},
    state[isFromOrTo],
    {
      occupied: occupier,
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
        applyPieceHelper(action.from, 'empty', state),
        applyPieceHelper(action.to, action.playerId, state),
    );
    default:
      return state;
  }
};

export default board;
