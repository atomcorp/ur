// @flow
import {ACTION_TYPES} from './index';
import {ACTION_CREATORS} from './';
import type {MoveCountersType} from '../reducers/reducers.types';
import {helpCalculateSquareId} from '../../methods/helpers';

const updateCounter = ({counterId, squareId}: MoveCountersType) => ({
  type: ACTION_TYPES.UPDATE_COUNTER,
  counterId,
  squareId,
});

const clickedCounter = ({
  counter,
}) => ({
  type: ACTION_TYPES.CLICKED_ON_COUNTER,
  counter,
});

// const canCounterMove = ({
//   piece,
// }) => {
//   return (dispatch, getState) => {

//   };
// };

// const isProposedSquareOccupied = (board, proposedSquareId) => {
//   if (board[proposedSquareId].contents > 0) {
//     return true;
//   }
//   return false;
// };

export const clickedOnCounter = (counter) => {
  return (dispatch, getState) => {
    const store = getState();
    const proposedSquareId = helpCalculateSquareId({
      playerId: counter.playerId,
      trackNumber: store.dice.moves + store.board[counter.squareId].trackNumber,
    });
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
  };
};

export {
  updateCounter,
  clickedCounter,
};
