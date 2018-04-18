// @flow
import {ACTION_TYPES} from './index';
import type {MoveCountersType} from '../reducers/reducers.types';

const updateCounter = ({counterId, squareId, playerId}: MoveCountersType) => ({
  type: ACTION_TYPES.UPDATE_PIECE,
  counterId,
  squareId,
});

const clickedCounter = ({
  counterId,
  squareId,
  playerId,
}) => ({
  type: ACTION_TYPES.CLICKED_PIECE,
  counterId,
  playerId,
});

export {
  updateCounter,
  clickedCounter,
};
