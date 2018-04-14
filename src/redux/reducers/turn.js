// @flow
import { ACTION_TYPES } from '../actions';
import {
  TurnStateType,
  TurnActionType,
} from './reducers.types';

const initialState = {
  turnEnded: false,
  playersTurn: 'playerA',
  canRollDice: true,
};

const turn = (
  state: TurnStateType = initialState,
  action: TurnActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_PLAYERS_TURN:
      return Object.assign({}, state, {
        playersTurn: action.playerId,
      });
    case ACTION_TYPES.TURN_STARTED:
      return Object.assign({}, state, {
        turnEnded: false,
      });
    case ACTION_TYPES.TURN_ENDED:
      return Object.assign({}, state, {
        turnEnded: true,
      });
    case ACTION_TYPES.LANDED_ON_ROSETTE:
      return Object.assign({}, state, {
        canRollDice: true,
      });
    default:
      return state;
  }
};

export default turn;
