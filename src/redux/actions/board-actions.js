// @flow

import {ACTION_TYPES} from './';

export const updateBoard = ({squareId, occupied}) => ({
  type: ACTION_TYPES.UPDATE_BOARD,
  squareId,
  occupied,
});
