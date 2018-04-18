import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ACTION_CREATORS} from '../../redux/actions';
import type {StoreType} from '../../redux/store.types';
import type {PropsType} from './MoveCounters.type';

class MoveCounter extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);
    this.props.addAllCounters(this.props.counters);
  }
  handleClick = () => {
    // need proper
    // move counter from a1 -> a3
    // to update the board properly
    // Would it make more sense if the counters said
    // where they were, rather than the board
    if (this.props.dice.moves > 0) {
      const square = this.calculateMove();
      this.props.updateCounter({
        counterId: `${this.props.turn.playersTurn}-counter--1`,
        squareId: square,
      });
      this.props.moveCounters([{
        counter: this.props.counters[
          `${this.props.turn.playersTurn}-counter--1`
        ],
        from: this.props.counters[
          `${this.props.turn.playersTurn}-counter--1`
        ].squareId,
        to: square,
        playerId: this.props.turn.playersTurn,
      }]);
    }
  }
  calculateMove = () => {
    const counterCurrentLocation =
      this.props.counters[`${this.props.turn.playersTurn}-counter--1`].squareId;
    if (counterCurrentLocation === 'start') {
      return helpCalculateSquareId(
        this.props.turn.playersTurn,
        this.props.dice.moves
      );
    } else {
      const newTrackCount = this.props.board[counterCurrentLocation].trackNumber
        + this.props.dice.moves;
      return helpCalculateSquareId(
        this.props.turn.playersTurn,
        newTrackCount
      );
    }
  }
  render() {
    return (
      <div>
        {this.props.players[this.props.turn.playersTurn].name}
        &nbsp;has {this.props.dice.moves} moves
        <br />
        <button onClick={this.handleClick}>
          Move counter
        </button>
      </div>
    );
  }
}

const helpCalculateSquareId = (playerId, number) => {
  if (number < 5 || number > 12) {
    return `${playerId}-${number}`;
  }
  return `battle-${number}`;
};

const mapStateToProps = (state: StoreType) => ({
  dice: state.dice,
  turn: state.turn,
  players: state.players,
  counters: state.counters,
  board: state.board,
});

const mapDispatchToProps = (dispatch) => ({
  moveCounters: (params) => {
    dispatch(ACTION_CREATORS.moveArrayOfCountersFromTo(params));
  },
  updateCounter: (params) => {
    dispatch(ACTION_CREATORS.updateCounter(params));
  },
  addAllCounters: (counters) => {
    dispatch(ACTION_CREATORS.addAllCounters(counters));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveCounter);
