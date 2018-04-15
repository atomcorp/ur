// @flow
import type {
  DiceStateType,
  BoardStateType,
  GameStateType,
  PiecesStateType,
  PlayersStateType,
  TurnStateType,
} from './reducers/reducers.types';
import type {AllActionsType} from './actions/action-creators.types';

export type StoreType = {
  +board: BoardStateType,
  +dice: DiceStateType,
  +game: GameStateType,
  +pieces: PiecesStateType,
  +players: PlayersStateType,
  +turn: TurnStateType,
}

export type DispatchType = (action: AllActionsType) =>
  void
