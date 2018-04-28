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

const isProposedSquareOccupied = (counter, store, proposedSquareId) => {
  if (store.board[proposedSquareId].contents.length > 0) {
    return true;
  }
  return false;
};

const isProposedSquareOccupiedWithOwnCounter = (squareContents, counter) => {
  return squareContents.some(
    (content) => content.playerId === counter.playerId
  );
};

const isProposedSquareOccupiedWithOpponentOnRosette = (square, counter) => {
  const doesOpponentOccupy = square.contents.some(
    (content) => content.playerId !== counter.playerId
  );
  if (doesOpponentOccupy && square.isRosette) {
    return true;
  }
  return false;
};

const doesProposedSquareExist = (moves, trackNumber) => {
  return moves + trackNumber > 15 ? true : false;
};

const isProposedSquareAnIllegalMove = (
  counter,
  store,
  dispatch,
  proposedSquareId,
) => {
  // is square already occupied with own players counter
  // is square occupied with another players counter on a rosette
  // is counter players?
  // does proposed square exist? ---
  const squareDoesntExist = doesProposedSquareExist(
    store.dice.moves,
    store.board[counter.squareId].trackNumber
  );
  if (squareDoesntExist) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'That square doesn\'t exist! You need an exact roll.',
    }));
    return true;
  }

  const isOccupiedWithOwnCounter =
    isProposedSquareOccupied(counter, store, proposedSquareId) &&
    isProposedSquareOccupiedWithOwnCounter(
      store.board[proposedSquareId].contents,
      counter
    );
  if (isOccupiedWithOwnCounter) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'Square already has your counter in it',
    }));
  }
  const isOccupiedWithOtherPlayersCounterOnARosette =
    isProposedSquareOccupied(counter, store, proposedSquareId) &&
    isProposedSquareOccupiedWithOpponentOnRosette(
      store.board[proposedSquareId],
      counter
    );
  if (isOccupiedWithOtherPlayersCounterOnARosette) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'You can\'t take an opponents counter on a rosette',
    }));
  }
  if (
    squareDoesntExist ||
    isOccupiedWithOwnCounter ||
    isOccupiedWithOtherPlayersCounterOnARosette
  ) {
    return true;
  }
  return false;
};


const canCounterBeClicked = (counter, dispatch, store, proposedSquareId) => {
  const hasPlayerClickedOpponentCounter
    = counter.playerId !== store.turn.playersTurn;
  const playerHasntRolledDice = store.turn.canRollDice;
  const playersTurnHasEnded = store.turn.turnEnded;
  const proposedSquareCantBeUsed = isProposedSquareAnIllegalMove(
    counter, store, dispatch, proposedSquareId
  );
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
  if (playersTurnHasEnded) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'Your turn has ended',
    }));
  }
  if (proposedSquareCantBeUsed) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'You can\'t move to that square!',
    }));
  }
  if (
    hasPlayerClickedOpponentCounter
    || playerHasntRolledDice
    || playersTurnHasEnded
    || proposedSquareCantBeUsed
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
