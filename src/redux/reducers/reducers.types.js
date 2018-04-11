// @flow
import {
  ACTION_TYPES,
} from '../actions';

export type DiceStateFacesType = $ReadOnlyArray<0 | 1>

export type DiceStateType = {
  faces: DiceStateFacesType,
  total: 0 | 1 | 2 | 3 | 4,
  throwing: boolean,
}

export type DiceActionType = {
  type: ACTION_TYPES.THROW_DICE.START | ACTION_TYPES.THROW_DICE.END,
  faces: DiceStateFacesType,
  throwing: boolean,
}

