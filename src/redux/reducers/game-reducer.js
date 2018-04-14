// @flow
import {ACTION_TYPES} from '../actions';
import type {
  GameStateType,
  GameActionType,
} from './reducers.types';

const initialState = {
  inProgress: false,
};

const game = (
  state: GameStateType = initialState,
  action: GameActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.GAME_START:
      return Object.assign({}, state, {
        inProgress: true,
      });
    case ACTION_TYPES.GAME_END:
      return Object.assign({}, state, {
        inProgress: false,
      });
    default:
      return state;
  }
};

export default game;
