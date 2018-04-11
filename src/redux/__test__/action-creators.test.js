import {
  throwDiceStart,
  throwDiceEnd,
} from '../actions/action-creators';
import {ACTION_TYPES} from '../actions';

test('Can throw dice', () => {
  expect(throwDiceStart()).toEqual({
    type: ACTION_TYPES.THROW_DICE.START,
    throwing: true,
  });
  expect(throwDiceEnd([1, 0, 1, 1])).toEqual({
    type: ACTION_TYPES.THROW_DICE.END,
    faces: [1, 0, 1, 1],
    throwing: false,
  });
});
