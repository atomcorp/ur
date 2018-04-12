// @flow
import {ACTION_TYPES} from '../actions';
// Dice
export type DiceStateFacesType = $ReadOnlyArray<0 | 1>

export type DiceStateType = {
  +faces: DiceStateFacesType,
  +total: 0 | 1 | 2 | 3 | 4,
  +throwing: boolean,
}

export type DiceActionType = {
  type: ACTION_TYPES.THROW_DICE_START,
  throwing: true,
} | {
  type: ACTION_TYPES.THROW_DICE_END,
  faces: DiceStateFacesType,
  throwing: false,
}

// Board
export type SquareOwnerType = 'playerA' | 'playerB' | 'battle'
export type OccupiedType = 'playerA' | 'playerB' | 'empty'

export type BoardActionType = {
  squareId: string,
  occupied: OccupiedType,
}

export type UpdateBoardType = {
  type: ACTION_TYPES.UPDATE_BOARD,
  squareId: string,
  occupied: OccupiedType,
}

export type BoardActionsType = UpdateBoardType

export type BoardStateItemsType = {
  squareOwner: SquareOwnerType,
  occupied: OccupiedType,
  isRosette: true | false,
  trackNumber: number,
}

export type BoardStateType = {
  [squareId: string]: BoardStateItemsType,
}

// Players

export type PlayerIdType = 'Player A' | 'Player B'

export type PlayerAaType = {
  name: 'Player A',
  tokensAtEnd: number,
  tokensAtStart: number,
  isTurn: boolean,
}

export type PlayerBbType = {
  name: 'Player B',
  tokensAtEnd: number,
  tokensAtStart: number,
  isTurn: boolean,
}

export type PlayersStateType = {
  'playerA': PlayerAaType,
  'playerB': PlayerBbType,
}

export type TogglePlayersTurnType = {
  type: ACTION_TYPES.TOGGLE_PLAYERS_TURN,
}

export type PlayerHasTokenResetType = {
  type: ACTION_TYPES.PLAYER_HAS_TOKEN_RESET,
  playerId: PlayerIdType,
}

export type PlayerGetsTokenHomeType = {
  type: ACTION_TYPES.PLAYER_GETS_TOKEN_HOME,
  playerId: PlayerIdType,
}

export type PlayersActionType = TogglePlayersTurnType
  | PlayerHasTokenResetType
  | PlayerGetsTokenHomeType
