import {
  ACTION_TYPES,
  ACTION_CREATORS,
} from '../actions';

test('Can throw dice', () => {
  expect(ACTION_CREATORS.throwDiceStart()).toEqual({
    type: ACTION_TYPES.THROW_DICE_START,
    throwing: true,
  });
  expect(ACTION_CREATORS.throwDiceEnd([1, 0, 1, 1])).toEqual({
    type: ACTION_TYPES.THROW_DICE_END,
    faces: [1, 0, 1, 1],
    throwing: false,
  });
});

test('Can send updates to the board', () => {
  expect(
    ACTION_CREATORS.updateBoard({squareId: 'a1', contents: 'player1'})
  ).toEqual({
    type: ACTION_TYPES.UPDATE_BOARD,
    squareId: 'a1',
    occupied: 'player1',
  });
});

test('Can send player updates', () => {
  expect(ACTION_CREATORS.togglePlayersTurn()).toEqual({
    type: ACTION_TYPES.TOGGLE_PLAYERS_TURN,
  });
  expect(ACTION_CREATORS.playerHasTokenReset('playerA')).toEqual({
    type: ACTION_TYPES.PLAYER_HAS_TOKEN_RESET,
    playerId: 'playerA',
  });
  expect(ACTION_CREATORS.playerGetsTokenHome('playerB')).toEqual({
    type: ACTION_TYPES.PLAYER_GETS_TOKEN_HOME,
    playerId: 'playerB',
  });
});

test('Can send move counter updates', () => {
  expect(ACTION_CREATORS.moveCounter({
    counterId: 'counter2',
    squareId: 's9',
    playerId: 'playerA',
  })).toEqual({
    type: ACTION_TYPES.MOVE_COUNTER,
    counterId: 'counter2',
    squareId: 's9',
    playerId: 'playerA',
  });
});
