// @flow
import constructCounters from '../../methods/constructCounters';
import {ACTION_TYPES} from '../actions';
import type {
  CountersStateType,
  CountersActionType,
} from './reducers.types';
import {helpCalculateSquareId} from '../../methods/helpers';

const initalState = constructCounters();

const handleCountersPotentialMove = ({
  counters,
  playerId,
  moves
}) => {
  Object.keys(counters).reduce((acc, key) => {
    const counter = counters[key];
    if (counter.playerId === playerId) {
      return Object.assign(
        {},
        counter,
        {
          potentialSquareId: helpCalculateSquareId({
            playerId,
            trackNumber: counter.trackPosition + moves,
          })
        }
      )
    }
    return acc;
  }, {})
}

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
            trackPosition: action.trackPosition,
          }
        ),
      });
      case ACTION_TYPES.UPDATE_POTENTIAL_MOVES:
        return Object.assign(
          {},
          state,
          handleCountersPotentialMove({
            counters: state,
            playerId: action.playerId,
            moves: action.moves,
          })
        )
    default:
      return state;
  }
};

export default counters;
