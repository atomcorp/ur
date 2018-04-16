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
    // need proper
    // move piece from a1 -> a3
    // to update the board properly
    // Would it make more sense if the pieces said
    // where they were, rather than the board
    if (this.props.dice.total > 0) {
      const square = this.calculateMove();
      this.props.updatePiece({
        pieceId: 'piece1',
        squareId: square,
        playerId: this.props.turn.playersTurn,
      });
      this.props.movePieces([{
        pieceId: 'piece1',
        from: this.props.pieces[this.props.turn.playersTurn].piece1,
        to: square,
        playerId: this.props.turn.playersTurn,
      }]);
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
  movePieces: (params) => {
    dispatch(ACTION_CREATORS.movePiecesFromTo(params));
  },
  updatePiece: (params) => {
    dispatch(ACTION_CREATORS.updatePiece(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovePiece);