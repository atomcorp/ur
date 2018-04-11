// @flow
import type {
  DiceStateType,
  DiceActionType,
} from './reducers.types.js';
import {ACTION_TYPES} from '../actions';

const defaultDiceState = {
  faces: [0, 0, 0, 0],
  total: 0,
  throwing: false,
};

const dice = (
  state: DiceStateType = defaultDiceState,
  action: DiceActionType,
) => {
  switch (action.type) {
    case ACTION_TYPES.THROW_DICE.END:
      return Object.assign({}, state, {
        faces: [action.faces],
        total: action.faces.reduce(
          (acc: number, val: number) => acc + val,
          0
        ),
        throwing: false,
      });
    case ACTION_TYPES.THROW_DICE.START:
      return Object.assign({}, state, {
        throwing: true,
      });
    default:
      return state;
  }
};

export default dice;
