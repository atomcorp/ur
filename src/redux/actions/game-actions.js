import {ACTION_TYPES} from './index';

const showGameMessage = ({message}) => ({
  type: ACTION_TYPES.SHOW_GAME_MESSAGE,
  message,
});

const hideGameMessage = () => ({
  type: ACTION_TYPES.HIDE_GAME_MESSAGE,
});

export {
  showGameMessage,
  hideGameMessage,
};
