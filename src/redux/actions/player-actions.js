// @flow
import {ACTION_TYPES} from './index';
import type {PlayerIdType} from '../reducers/reducers.types';

const togglePlayersTurn = () => ({
  type: ACTION_TYPES.TOGGLE_PLAYERS_TURN,
});

const playerGetsTokenHome = (playerId: PlayerIdType) => ({
  type: ACTION_TYPES.PLAYER_GETS_TOKEN_HOME,
  playerId,
});

const playerHasTokenReset = (playerId: PlayerIdType) => ({
  type: ACTION_TYPES.PLAYER_HAS_TOKEN_RESET,
  playerId,
});

export {
  togglePlayersTurn,
  playerGetsTokenHome,
  playerHasTokenReset,
};
