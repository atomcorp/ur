import {combineReducers} from 'redux';
import dice from './dice-reducer';
import board from './board-reducer';
import players from './players-reducer';

export default combineReducers({
  dice,
  board,
  players,
});
