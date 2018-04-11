// @flow
import type {
  DiceStateType,
  DiceStateFacesType,
} from '../../redux/reducers/reducers.types';

export type StateType = {

}

export type PropsType = {
  dice: DiceStateType,
  startRoll: () => void,
  endRoll: (DiceStateFacesType) => void,
}
