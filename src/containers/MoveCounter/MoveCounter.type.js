import type {
  DiceStateType,
  PlayersStateType,
  CountersStateType,
  TurnStateType,
  BoardStateType,
} from './reducers/reducers.types';


export type PropsType = {
  dice: DiceStateType,
  turn: TurnStateType,
  players: PlayersStateType,
  counters: CountersStateType,
  board: BoardStateType,
}
