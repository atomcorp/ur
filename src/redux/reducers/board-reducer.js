// @flow

import constructboard from '../../methods/constructBoard';
import {ACTION_TYPES} from '../actions/index';
import type {
  BoardStateType,
  BoardActionsType,
} from './reducers.types';

const initialboard = constructboard;

const addOrRemoveCounter = (
  isFromOrTo,
  counter,
  state,
  addOrRemove
) => ({
    [isFromOrTo]: Object.assign(
    {},
    state[isFromOrTo],
    {
      contents: addOrRemove === 'add'
        ? [...state[isFromOrTo].contents, counter]
        : state[isFromOrTo].contents.filter(
          (contentsCounter) => {
            if (contentsCounter.id !== counter.id) {
              return contentsCounter;
            }
          }
        ),
    }
  ),
});

const addAllCounters = (state, counters) => {
  return Object.keys(counters).reduce(
    (acc, counterKey) => {
      const counter = counters[counterKey];
      return Object.assign(
        {},
        acc,
        {
          [counter.squareId]: Object.assign(
            {},
            acc[counter.squareId],
            {
              contents: [...acc[counter.squareId].contents, counter],
            }
          ),
        }
      );
    }, state);
};


const board = (
  state: BoardStateType = initialboard,
  action: BoardActionsType
) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_REMOVE_PIECES:
      return Object.assign(
        {},
        state,
        addOrRemoveCounter(action.from, action.counter, state, 'remove'),
        addOrRemoveCounter(action.to, action.counter, state, 'add'),
    );
    case ACTION_TYPES.ADD_ALL_PIECES:
      return Object.assign(
        {},
        state,
        addAllCounters(state, action.counters)
      );
    default:
      return state;
  }
};

export default board;
