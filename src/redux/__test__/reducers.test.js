import dice from '../reducers/dice-reducer';
import board from '../reducers/board-reducer';
import players, {
  initialPlayerState,
} from '../reducers/players-reducer';
import pieces from '../reducers/pieces-reducer';

import {ACTION_TYPES} from '../actions';
import constructBoard from '../../components/Board/constructBoard';
import constructPieces from '../../components/Pieces/constructPieces';


test('Dice reducer works OK', () => {
  const state = {
    faces: [0, 0, 0, 0],
    total: 0,
    throwing: false,
  };
  let action1 = {
    type: ACTION_TYPES.THROW_DICE_START,
  };
  expect(dice(state, action1)).toEqual({
    faces: [0, 0, 0, 0],
    total: 0,
    throwing: true,
  });
  let action2 = {
    type: ACTION_TYPES.THROW_DICE_END,
    faces: [1, 1, 0, 1],
  };
  expect(dice(state, action2)).toEqual({
    faces: [1, 1, 0, 1],
    total: 3,
    throwing: false,
  });
  expect(dice(state, {})).toEqual(state);
});

test('Board reducer works', () => {
  expect(board(undefined, {})).toEqual(constructBoard());
  const state = constructBoard();
  expect(board(state, {
    type: ACTION_TYPES.UPDATE_BOARD,
    squareId: 'a1',
    contents: 'player2',
  })).toEqual(Object.assign({}, state, {
    ['a1']: {
      contents: 'player2',
    },
  }));
});

test('Players reducer works', () => {
  expect(players(undefined, {})).toEqual(initialPlayerState);
  const state = initialPlayerState;
  expect(players(state, {
    type: ACTION_TYPES.PLAYER_GETS_TOKEN_HOME,
    playerId: 'playerA',
  })).toEqual(Object.assign({}, state, {
    ['playerA']: {
      tokensAtEnd: 1,
    },
  }));
  const state2 = Object.assign({}, initialPlayerState, {
    ['playerB']: {
      tokensAtStart: 4,
    },
  });
  expect(players(state2, {
    type: ACTION_TYPES.PLAYER_HAS_TOKEN_RESET,
    playerId: 'playerB',
  })).toEqual(Object.assign({}, state2, {
    ['playerB']: {
      tokensAtStart: 5,
    },
  }));
});

test('Pieces reducer works OK', () => {
  const state = constructPieces();
  expect(pieces(undefined, {})).toEqual(state);
  expect(pieces(state, {
    type: ACTION_TYPES.MOVE_PIECE,
    pieceId: 'piece2',
    squareId: 's9',
    playerId: 'playerA',
  })).toEqual(Object.assign({}, state, {
    ['playerA']: {
      ['piece2']: 's9',
    },
  }));
});
