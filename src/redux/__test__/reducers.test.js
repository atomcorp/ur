import dice from '../reducers/dice-reducer';
import board from '../reducers/board-reducer';

import {ACTION_TYPES} from '../actions';
import constructBoard from '../../components/Board/constructBoard';


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
    occupied: 'player2',
  })).toEqual(Object.assign({}, state, {
    ['a1']: {
      occupied: 'player2',
    },
  }));
});
