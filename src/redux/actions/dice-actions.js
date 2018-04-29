// @flow
import {
  ACTION_TYPES,
  ACTION_CREATORS,
} from './';
import type {FacesType} from './action-creators.types.js';

const throwDiceStart = () => ({
  type: ACTION_TYPES.THROW_DICE_START,
  throwing: true,
});

const throwDiceEnd = (faces: FacesType, moves) => ({
  type: ACTION_TYPES.THROW_DICE_END,
  throwing: false,
  faces,
  moves,
});

const handleOptionsAfterThrow = (faces) => {
  return (dispatch, getState) => {
    const store = getState();
    const moves = faces.reduce(
      (acc: number, val: number) => acc + val,
      0
    );
    dispatch(throwDiceEnd(faces, moves));
    dispatch(ACTION_CREATORS.updateCounterPotential({
      moves,
      playerId: store.turn.playersTurn,
    }));
    // if player throws a zero, swap sides
    if (moves < 1) {
      dispatch(ACTION_CREATORS.togglePlayersTurn());
    }
  };
};

export {
  throwDiceStart,
  throwDiceEnd,
  handleOptionsAfterThrow,
};
