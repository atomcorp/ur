// @flow
import type {
  DiceStateType,
  DiceActionType,
} from './reducers.types.js';
import {ACTION_TYPES} from '../actions';

const defaultDiceState = {
  faces: [0, 0, 0, 0],
  moves: 0,
  throwing: false,
};

const dice = (
  state: DiceStateType = defaultDiceState,
  action: DiceActionType,
) => {
  switch (action.type) {
    case ACTION_TYPES.THROW_DICE_END:
      return Object.assign({}, state, {
        faces: [...action.faces],
        moves: action.moves,
        throwing: false,
      });
    case ACTION_TYPES.THROW_DICE_START:
      return Object.assign({}, state, {
        throwing: true,
      });
    case ACTION_TYPES.RESET_DICE:
    case ACTION_TYPES.TOGGLE_PLAYERS_TURN:
    case ACTION_TYPES.LANDED_ON_ROSETTE:
      return Object.assign({}, state, {
        faces: [0, 0, 0, 0],
        throwing: false,
      });
    default:
      return state;
  }
};

export default dice;
