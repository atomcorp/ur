import {combineReducers} from 'redux';
import dice from './dice-reducer';
import board from './board-reducer';
import players from './players-reducer';
import game from './game-reducer';
import turn from './turn-reducer';
import counters from './counters-reducer';

export default combineReducers({
  dice,
  board,
  players,
  game,
  turn,
  counters,
});
