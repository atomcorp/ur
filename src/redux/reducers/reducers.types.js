// @flow

export type DiceStateFacesType = $ReadOnlyArray<0 | 1>

export type DiceStateType = {
  +faces: DiceStateFacesType,
  +total: 0 | 1 | 2 | 3 | 4,
  +throwing: boolean,
}

export type DiceActionType = {
  type: 'THROW_DICE_START',
  throwing: true,
} | {
  type: 'THROW_DICE_END',
  faces: DiceStateFacesType,
  throwing: false,
}

export type SquareOwnerType = 'playerA' | 'playerB' | 'battle'
export type OccupiedType = 'playerA' | 'playerB' | 'empty'

export type BoardActionType = {
  squareId: string,
  occupied: OccupiedType,
}

export type UpdateBoardType = {
  type: 'ACTION_TYPES',
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
