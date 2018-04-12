// @flow

import {ACTION_TYPES} from './';
import {BoardActionType} from '../reducers/reducers.types';

export const updateBoard = (
  {squareId, occupied}: BoardActionType
) => ({
  type: ACTION_TYPES.UPDATE_BOARD,
  squareId,
  occupied,
});
