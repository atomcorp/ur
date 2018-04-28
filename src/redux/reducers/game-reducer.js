// @flow
import {ACTION_TYPES} from '../actions';
import type {
  GameStateType,
  GameActionType,
} from './reducers.types';

const initialState = {
  inProgress: false,
  showMessage: false,
  message: [],
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
    case ACTION_TYPES.SHOW_GAME_MESSAGE:
      return Object.assign({}, state, {
        showMessage: true,
        message: [...state.message, action.message],
      });
    case ACTION_TYPES.TOGGLE_PLAYERS_TURN:
    case ACTION_TYPES.HIDE_GAME_MESSAGE:
      return Object.assign({}, state, {
        showMessage: false,
        message: [],
      });
    default:
      return state;
  }
};

export default game;
