// @flow
import {ACTION_TYPES} from './index';
import {ACTION_CREATORS} from './';
import type {MoveCountersType} from '../reducers/reducers.types';
import {canCounterBeClicked} from '../../methods/game';
import {helpCalculateSquareId} from '../../methods/helpers';

const updateCounter = ({counterId, squareId}: MoveCountersType) => ({
  type: ACTION_TYPES.UPDATE_COUNTER,
  counterId,
  squareId,
});

const clickedCounter = ({
  counter,
}) => ({
  type: ACTION_TYPES.CLICKED_ON_COUNTER_ATTEMPT,
  counter,
});

// need to simplify the logic going in here
export const clickedOnCounter = (counter) => {
  return (dispatch, getState) => {
    const store = getState();
    // clicked should either leave one of two ways
    // depending on player can player click on counter
    // first check player owns counter
    // CAN USER
    const proposedSquareId = helpCalculateSquareId({
      playerId: counter.playerId,
      trackNumber: store.dice.moves + store.board[counter.squareId].trackNumber,
    });
    if (!canCounterBeClicked(counter, dispatch, store, proposedSquareId)) {
      return;
    }
    dispatch(ACTION_CREATORS.updateCounter({
      counterId: counter.id,
      squareId: proposedSquareId,
    }));
    dispatch(ACTION_CREATORS.moveArrayOfCountersFromTo([
      {
        from: counter.squareId,
        to: proposedSquareId,
        playerId: counter.playerId,
        counter,
      },
    ]));
    dispatch(ACTION_CREATORS.togglePlayersTurn());
  };
};

export {
  updateCounter,
  clickedCounter,
};
