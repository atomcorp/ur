// @flow
import { ACTION_TYPES } from './';
import type { FacesType } from './action-creators.types.js';

const throwDiceStart = () => ({
  type: ACTION_TYPES.THROW_DICE.START,
  throwing: true,
});

const throwDiceEnd = (faces: FacesType) => ({
  type: ACTION_TYPES.THROW_DICE.END,
  faces,
  throwing: false,
});

export {
  throwDiceStart,
  throwDiceEnd,
};
