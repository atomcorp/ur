// @flow
import {ACTION_TYPES} from '../actions';
// Dice
export type DiceStateFacesType = Array<0 | 1>

export type DiceStateType = {
  +faces: DiceStateFacesType,
  +total: 0 | 1 | 2 | 3 | 4,
  +throwing: boolean,
}

export type DiceActionType = {
  type: ACTION_TYPES.THROW_DICE_START,
  throwing: true,
  faces: DiceStateFacesType,
} | {
  type: ACTION_TYPES.THROW_DICE_END,
  faces: DiceStateFacesType,
  throwing: false,
}

// Board
export type SquareOwnerType = 'playerA' | 'playerB' | 'battle'
export type ContentsType = 'playerA' | 'playerB' | 'empty'

export type BoardActionType = {
  from: string,
  to: string,
  counter: string,
  playerId: string,
}

export type UpdateBoardType = {
  type: ACTION_TYPES.UPDATE_BOARD,
  squareId: string,
  contents: ContentsType,
}

export type BoardActionsType = UpdateBoardType

export type BoardStateItemsType = {
  squareOwner: SquareOwnerType,
  contents: ContentsType,
  isRosette: true | false,
  trackNumber: number,
  id: string,
}

export type BoardStateType = {
  [squareId: string]: BoardStateItemsType,
}

// Players

export type PlayerIdType = 'playerA' | 'playerB'

export type PlayerAaType = {
  name: 'Player A',
  tokensAtEnd: number,
  tokensAtStart: number,
  isTurn: boolean,
  playerId: 'playerA',
}

export type PlayerBbType = {
  name: 'Player B',
  tokensAtEnd: number,
  tokensAtStart: number,
  isTurn: boolean,
  playerId: 'playerB',
}

export type PlayersStateType = {
  'playerA': PlayerAaType,
  'playerB': PlayerBbType,
}

export type TogglePlayersTurnType = {
  type: 'TOGGLE_PLAYERS_TURN',
}

export type PlayerHasTokenResetType = {
  type: 'PLAYER_HAS_TOKEN_RESET',
  playerId: PlayerIdType,
}

export type PlayerGetsTokenHomeType = {
  type: 'PLAYER_GETS_TOKEN_HOME',
  playerId: PlayerIdType,
}

export type PlayersActionType = TogglePlayersTurnType
  | PlayerHasTokenResetType
  | PlayerGetsTokenHomeType

// Counters
export type CountersType = {
  counterId: string,
  playerId: string,
  squareId: string,
}

export type CountersStateType = {
  [counterId: string]: CountersType,
}

export type MoveCountersType = {
  counterId: string,
  squareId: string,
  playerId: string,
  type: 'MOVE_COUNTER',
}

export type CountersActionType = MoveCountersType

export type GameStateType = {
  inProgress: boolean,
}

export type GameActionType = {
  type: 'GAME_START' | 'GAME_END',
}

export type TurnStateType = {
  turnEnded: boolean,
  playersTurn: PlayerIdType,
  canRollDice: boolean,
}

export type TurnActionType = {
  type: 'TOGGLE_PLAYERS_TURN'
  | 'TURN_STARTED'
  | 'TURN_ENDED'
  | 'LANDED_ON_ROSETTE',
}

