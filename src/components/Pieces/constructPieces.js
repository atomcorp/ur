// @flow
import type {
  PiecesStateType,
} from '../../redux/reducers/reducers.types';

const constructPieces = () => {
  return ['playerA', 'playerB'].map(
    (playerId: string) => constructPlayerPiecesSet(playerId)
  ).reduce((acc: PiecesStateType, val: PiecesStateType) => {
    return Object.assign({}, acc, val);
  }, {});
};


const constructPlayerPiecesSet = (playerId: string) => {
  return Array.from(Array(7)).fill(1).reduce(
    (acc: PiecesStateType, val: 1, index: number) => {
    return Object.assign({}, acc, {
      [`${playerId}-piece--${index + 1}`]: {
        squareId: `${playerId}-0`,
        player: playerId,
        id: `${playerId}-piece--${index + 1}`,
      },
    });
  }, {});
};

export default constructPieces;
