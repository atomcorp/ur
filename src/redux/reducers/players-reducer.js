// @flow
import type {
  PlayersStateType,
  PlayersActionType,
} from './reducers.types';

export const initialPlayerState = {
  playerA: {
    name: 'Player A',
    tokensAtEnd: 0,
    tokensAtStart: 7,
    isTurn: true,
    playerId: 'playerA',
  },
  playerB: {
    name: 'Player B',
    tokensAtEnd: 0,
    tokensAtStart: 7,
    isTurn: false,
    playerId: 'playerB',
  },
};

const players = (
  state: PlayersStateType = initialPlayerState,
  action: PlayersActionType
) => {
  switch (action.type) {
    case 'TOGGLE_PLAYERS_TURN':
      return Object.assign(
        {},
        state,
        ['playerA', 'playerB'].reduce((
          acc: PlayersStateType,
          playerId: string
        ) => {
          return Object.assign({}, acc, {
            [playerId]: Object.assign({}, state[playerId], {
              isTurn: !state[playerId].isTurn,
            }),
          });
        }, state),
      );
    case 'PLAYER_HAS_TOKEN_RESET':
      return Object.assign({}, state, {
        [action.playerId]: {
          tokensAtStart: ++state[action.playerId].tokensAtStart,
        },
      });
    case 'PLAYER_GETS_TOKEN_HOME':
      return Object.assign({}, state, {
        [action.playerId]: {
          tokensAtEnd: ++state[action.playerId].tokensAtEnd,
        },
      });
    default:
      return state;
  }
};

export default players;
