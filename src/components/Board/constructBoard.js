// @flow
import type {BoardStateType} from '../../redux/reducers/reducers.types';

const buildAllPlayersBoards = (playerId) => {
  return Array.from(Array(8)).fill(1).reduce(
    (acc: BoardStateType, val: 1, index: number) => {
      return Object.assign({}, acc, returnPlayerSquare(index, playerId));
    }, {}
  );
};

const returnPlayerSquare = (index, squareOwner) => {
  const isRosette = index === 4 || index === 6 ? true : false;
  const trackNumber = index < 5 ? index : index + 8;
  const key = `${squareOwner}-${trackNumber}`;
  return {
    [key]: {
      squareOwner,
      isRosette,
      contents: [],
      trackNumber,
      id: key,
    },
  };
};

const buildBattleBoard = () => {
  return Array.from(Array(8)).fill(1).reduce(
    (acc: BoardStateType, val: 1, index: number) => {
      return Object.assign({}, acc, returnBattleSquare(index, 'battle'));
    }, {}
  );
};

const returnBattleSquare = (index, squareOwner) => {
  const isRosette = index === 3 ? true : false;
  const trackNumber = index + 5;
  const key = `${squareOwner}-${trackNumber}`;
  return {
    [key]: {
      squareOwner,
      isRosette,
      contents: [],
      trackNumber,
      id: key,
    },
  };
};

const buildPlayerAsBoard = buildAllPlayersBoards('playerA');
const buildPlayerBsBoard = buildAllPlayersBoards('playerB');
const buildSharedBattleBoard = buildBattleBoard();

const constructBoard = Object.assign(
  {},
  buildPlayerAsBoard,
  buildPlayerBsBoard,
  buildSharedBattleBoard,
);

export default constructBoard;
