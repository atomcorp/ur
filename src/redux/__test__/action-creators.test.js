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
    ACTION_CREATORS.updateBoard({squareId: 'a1', occupied: 'player1'})
  ).toEqual({
    type: ACTION_TYPES.UPDATE_BOARD,
    squareId: 'a1',
    occupied: 'player1',
  });
});
