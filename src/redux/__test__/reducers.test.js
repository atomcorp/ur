import dice from '../reducers/dice-reducer';
import {ACTION_TYPES} from '../actions';
const state = {
  faces: [0, 0, 0, 0],
  total: 0,
  throwing: false,
};
test('Dice reducer works OK', () => {
  let action1 = {
    type: ACTION_TYPES.THROW_DICE.START,
  };
  expect(dice(state, action1)).toEqual({
    faces: [0, 0, 0, 0],
    total: 0,
    throwing: true,
  });
  let action2 = {
    type: ACTION_TYPES.THROW_DICE.END,
    faces: [1, 1, 0, 1],
  };
  expect(dice(state, action2)).toEqual({
    faces: [1, 1, 0, 1],
    total: 3,
    throwing: false,
  });
  expect(dice(state, {})).toEqual(state);
});
