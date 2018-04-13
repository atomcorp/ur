// @flow

import constructboard from '../../components/Board/constructBoard';
import {ACTION_TYPES} from '../actions/index';
import type {
  BoardStateType,
  BoardActionsType,
} from './reducers.types';

const initialboard = constructboard();

const board = (
  state: BoardStateType = initialboard,
  action: BoardActionsType
) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_BOARD:
      return Object.assign({}, state, {
        [action.squareId]: {
          occupied: action.occupied,
        },
      });
    default:
      return state;
  }
};

export default board;
