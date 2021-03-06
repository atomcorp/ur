// @flow
import type {
  DiceStateFacesType,
} from '../../redux/reducers/reducers.types';

export type DieType = {
  face: number,
}

export type DiceType = {
  faces: DiceStateFacesType,
}
