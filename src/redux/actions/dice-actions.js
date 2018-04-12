// @flow
import {ACTION_TYPES} from './';
import type {FacesType} from './action-creators.types.js';

const throwDiceStart = () => ({
  type: ACTION_TYPES.THROW_DICE_START,
  throwing: true,
});

const throwDiceEnd = (faces: FacesType) => ({
  type: ACTION_TYPES.THROW_DICE_END,
  faces,
  throwing: false,
});

export {
  throwDiceStart,
  throwDiceEnd,
};
