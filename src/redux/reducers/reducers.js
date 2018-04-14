import {combineReducers} from 'redux';
import dice from './dice-reducer';
import board from './board-reducer';
import players from './players-reducer';
import game from './game';

export default combineReducers({
  dice,
  board,
  players,
  game,
});
