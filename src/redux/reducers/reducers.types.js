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

