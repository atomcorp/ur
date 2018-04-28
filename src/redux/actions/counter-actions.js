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
  type: ACTION_TYPES.CLICKED_ON_COUNTER_ATTEMPT,
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

const canCounterBeClicked = (counter, dispatch, store) => {
  const hasPlayerClickedOpponentCounter
    = counter.playerId !== store.turn.playersTurn;
  const playerHasntRolledDice = store.turn.canRollDice;
  const playersTurnhasEnded = store.turn.turnEnded;
  // is counter players?
  if (hasPlayerClickedOpponentCounter) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'That\'s not your counter!',
    }));
  }
  if (playerHasntRolledDice) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'You need to roll the dice!',
    }));
  }
  if (playersTurnhasEnded) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'Your turn has ended',
    }));
  }
  if (
    hasPlayerClickedOpponentCounter
    || playerHasntRolledDice
    || playersTurnhasEnded
  ) {
    return false;
  }
  return true;
};

// need to simplify the logic going in here
export const clickedOnCounter = (counter) => {
  return (dispatch, getState) => {
    const store = getState();
    // clicked should either leave one of two ways
    // depending on player can player click on counter
    // first check player owns counter
    // CAN USER
    if (!canCounterBeClicked(counter, dispatch, store)) {
      return;
    }
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
    dispatch(ACTION_CREATORS.togglePlayersTurn());
  };
};

export {
  updateCounter,
  clickedCounter,
};
