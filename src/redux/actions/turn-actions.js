import {ACTION_TYPES} from '../actions';

const haslandedOnRosette = () => ({
  type: ACTION_TYPES.LANDED_ON_ROSETTE,
});

const togglePlayersTurn = () => ({
  type: ACTION_TYPES.TOGGLE_PLAYERS_TURN,
});

export {
  haslandedOnRosette,
  togglePlayersTurn,
};
