// @flow
import type {
  CountersStateType,
} from '../../redux/reducers/reducers.types';

const constructCounters = () => {
  return ['playerA', 'playerB'].map(
    (playerId: string) => constructPlayerCountersSet(playerId)
  ).reduce((acc: CountersStateType, val: CountersStateType) => {
    return Object.assign({}, acc, val);
  }, {});
};


const constructPlayerCountersSet = (playerId: string) => {
  return Array.from(Array(7)).fill(1).reduce(
    (acc: CountersStateType, val: 1, index: number) => {
    return Object.assign({}, acc, {
      [`${playerId}-counter--${index + 1}`]: {
        squareId: `${playerId}-0`,
        player: playerId,
        id: `${playerId}-counter--${index + 1}`,
      },
    });
  }, {});
};

export default constructCounters;
