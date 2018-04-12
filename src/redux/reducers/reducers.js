import {combineReducers} from 'redux';
import dice from './dice-reducer';
import board from './board-reducer';

export default combineReducers({
  dice,
  board,
});
