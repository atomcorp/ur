import {
  ACTION_CREATORS,
} from '../redux/actions';
/**
 * This will contain all the game logic
 *
 * This will receive props and send the result to redux
 *
 * - Check if you can click counter
 * - Move a counter when clicked on
 * - Handle when a counter lands on another counter
 * - Handle when a counter when it reaches the last square
 * - handle a turn
 *   - handle who's turn it is
 *   - handle whether you can throw the dice
 */


const isProposedSquareOccupied = (store, proposedSquareId) => {
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

const isProposedSquareNotTheEnd = (store, proposedSquareId) => {
  return store.board[proposedSquareId].trackNumber !== 15 
}

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
  }

  const isOccupiedWithOwnCounter =
    !squareDoesntExist &&
    isProposedSquareOccupied(store, proposedSquareId) &&
    isProposedSquareOccupiedWithOwnCounter(
      store.board[proposedSquareId].contents,
      counter
    ) && 
    isProposedSquareNotTheEnd(store, proposedSquareId);
  if (isOccupiedWithOwnCounter) {
    dispatch(ACTION_CREATORS.showGameMessage({
      message: 'Square already has your counter in it',
    }));
  }
  const isOccupiedWithOtherPlayersCounterOnARosette =
    !squareDoesntExist &&
    isProposedSquareOccupied(store, proposedSquareId) &&
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


export const canCounterBeClicked = (
  counter,
  dispatch,
  store,
  proposedSquareId
) => {
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

export const canAttackOpponentCounter = (
  counter,
  dispatch,
  store,
  proposedSquareId,
) => {
  if (
    isProposedSquareOccupied(store, proposedSquareId) &&
    store.board[proposedSquareId].contents.some(
      (content) => content.playerId !== counter.playerId
    )
  ) {
    const opponentsCounter = store.board[proposedSquareId].contents[0];
    dispatch(ACTION_CREATORS.updateCounter({
      counterId: opponentsCounter.id,
      squareId: `${opponentsCounter.playerId}-0`,
      trackPosition: 0,
    }));
    dispatch(ACTION_CREATORS.updateCounter({
      counterId: counter.id,
      squareId: proposedSquareId,
      trackPosition: store.board[proposedSquareId].trackNumber,
    }));
    dispatch(ACTION_CREATORS.updateCounterPotential({
      moves: 0,
      playerId: counter.playerId,
    }));
    dispatch(ACTION_CREATORS.moveArrayOfCountersFromTo([
      {
        from: counter.squareId,
        to: proposedSquareId,
        playerId: counter.playerId,
        counter: counter,
      },
      {
        from: opponentsCounter.squareId,
        to: `${opponentsCounter.playerId}-0`,
        playerId: opponentsCounter.playerId,
        counter: opponentsCounter,
      },
    ]));
    dispatch(ACTION_CREATORS.togglePlayersTurn());
    return true;
  }
  return false;
};
