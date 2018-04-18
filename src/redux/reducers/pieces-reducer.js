// @flow
import constructCounters from '../../methods/constructCounters';
import {ACTION_TYPES} from '../actions';
import type {
  CountersStateType,
  CountersActionType,
} from './reducers.types';

const initalState = constructCounters();

const counters = (
  state: CountersStateType = initalState,
  action: CountersActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_COUNTER:
      return Object.assign(
        {},
        state,
        {
        [action.counterId]: Object.assign(
          {},
          state[action.counterId],
          {
            squareId: action.squareId,
          }
        ),
      });
    default:
      return state;
  }
};

export default counters;
