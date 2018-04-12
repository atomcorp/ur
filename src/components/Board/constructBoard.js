// @flow
import {BoardStateType} from '../../redux/reducers/reducers.types';

const constructBoard = () => {
  return Array.from(Array(20)).fill(1).reduce(
    (acc: BoardStateType, val: 1, index: number) => {
      return Object.assign({}, acc, determineAndReturnSquare(index));
    }, {}
  );
};

const determineAndReturnSquare = (index: number) => {
  let squareOwner = 'playerA';
  let isRosette = false;
  let trackNumber = index + 1;
  let key = 'a' + (index + 1);
  // first player private
  if (index < 6) {
    if (index === 3 || index === 5) {
      isRosette = true;
    }
    if (index > 3) {
      key = 'a' + (index + 9);
      trackNumber = index + 9;
    }
  }
  // second player private
  if (index > 5 && index < 12) {
    key = 'b' + (index - 5);
    squareOwner = 'playerB';
    trackNumber = index - 5;
    if (index === 9 || index === 11) {
      isRosette = true;
    }
    if (index > 9) {
      key = 'b' + (index + 3);
      trackNumber = index + 3;
    }
  }
  if (index > 11) {
    key = 's' + (index - 7);
    squareOwner = 'battle';
    trackNumber = index - 7;
    if (index === 15) {
      isRosette = true;
    }
  }
  return {
    [key]: {
      squareOwner,
      isRosette,
      occupied: 'empty',
      trackNumber,
    },
  };
};

export default constructBoard;
