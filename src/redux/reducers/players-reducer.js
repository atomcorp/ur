// @flow
import {
  ACTION_TYPES,
} from '../actions';
import type {
  PlayersStateType,
  PlayersActionType,
} from './reducers.types';

const initialPlayerState = {
  playerA: {
    name: 'Player A',
    tokensAtEnd: 0,
    tokensAtStart: 7,
    isTurn: true,
  },
  playerB: {
    name: 'Player B',
    tokensAtEnd: 0,
    tokensAtStart: 7,
    isTurn: false,
  },
};

const players = (
  state: PlayersStateType = initialPlayerState,
  action: PlayersActionType
) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_PLAYERS_TURN:
      return Object.assign({}, state, {
        playerA: {
          isTurn: !state.playerA.isturn,
        },
        playerB: {
          isTurn: !state.playerB.isturn,
        },
      });
    case ACTION_TYPES.PLAYER_HAS_TOKEN_RESET:
      return Object.assign({}, state, {
        [action.playerId]: {
          tokensAtStart: ++state[action.playerId].tokensAtStart,
        },
      });
    case ACTION_TYPES.PLAYER_GETS_TOKEN_HOME:
      return Object.assign({}, state, {
        [action.playerId]: {
          tokensAtStart: ++state[action.playerId].tokensAtEnd,
        },
      });
    default:
      return state;
  }
};

export default players;
