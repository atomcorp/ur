import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ACTION_CREATORS} from '../../redux/actions';
import type {StoreType} from '../../redux/store.types';
import type {PropsType} from './MovePieces.type';

class MovePiece extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);
  }
  handleClick = () => {
    if (this.props.dice.total > 0) {
      this.props.movePiece({
        pieceId: 'piece1',
        squareId: this.calculateMove(),
        playerId: this.props.turn.playersTurn,
      });
    }
  }
  calculateMove = () => {
    const pieceCurrentLocation =
      this.props.pieces[this.props.turn.playersTurn].piece1;
    if (pieceCurrentLocation === 'start') {
      return helpCalculateSquareId(
        this.props.turn.playersTurn,
        this.props.dice.total
      );
    } else {
      const newTrackCount = this.props.board[pieceCurrentLocation].trackNumber
        + this.props.dice.total;
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
        &nbsp;has {this.props.dice.total} moves
        <br />
        <button onClick={this.handleClick}>
          Move piece
        </button>
      </div>
    );
  }
}

const helpCalculateSquareId = (playerId, number) => {
  if (number < 5 || number > 12) {
    return playerId === 'playerA' ? `a${number}` : `b${number}`;
  }
  return `s${number}`;
};

const mapStateToProps = (state: StoreType) => ({
  dice: state.dice,
  turn: state.turn,
  players: state.players,
  pieces: state.pieces,
  board: state.board,
});

const mapDispatchToProps = (dispatch) => ({
  movePiece: (params) => {
    dispatch(ACTION_CREATORS.movePiece(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovePiece);
