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
        moves: action.faces.reduce(
          (acc: number, val: number) => acc + val,
          0
        ),
        throwing: false,
      });
    case ACTION_TYPES.THROW_DICE_START:
      return Object.assign({}, state, {
        throwing: true,
      });
    case ACTION_TYPES.RESET_DICE:
      return Object.assign({}, state, {
        faces: [0, 0, 0, 0],
        throwing: false,
      });
    default:
      return state;
  }
};

export default dice;
