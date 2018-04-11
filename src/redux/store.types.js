// @flow
import type {
  DiceStateType,
} from './reducers/reducers.types';
import type {AllActionsType} from './actions/action-creators.types';

export type StoreType = {
  +dice: DiceStateType,
}

export type DispatchType = (action: AllActionsType) =>
  void
