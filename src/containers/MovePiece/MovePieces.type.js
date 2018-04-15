import type {
  DiceStateType,
  PlayersStateType,
  PiecesStateType,
  TurnStateType,
  BoardStateType,
} from './reducers/reducers.types';


export type PropsType = {
  dice: DiceStateType,
  turn: TurnStateType,
  players: PlayersStateType,
  pieces: PiecesStateType,
  board: BoardStateType,
}
