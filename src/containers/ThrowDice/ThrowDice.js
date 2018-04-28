// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ACTION_CREATORS,
} from '../../redux/actions';
import type {
  StateType,
  PropsType,
} from './ThrowDice.types';
import type {
  StoreType,
  DispatchType,
} from '../../redux/store.types';
import type {
  DiceStateFacesType,
} from '../../redux/reducers/reducers.types';

class ThrowDice extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.debug = false;
    this.state = {
      diceCheat: 0,
      faceCheat: [0, 0, 0, 0],
    };
  }
  handleThrow = () => {
    if (!this.props.dice.throwing && this.props.turn.canRollDice) {
      this.props.startRoll();
      setTimeout(() => {
        this.props.endRoll(this.debug ? this.state.faceCheat : this.rollDice());
      }, 0);
    }
  }
  handleEndTurn = () => {
    this.props.togglePlayers();
  }
  handleDiceDebug = (event) => {
    this.setState({
      diceCheat: event.currentTarget.value,
      faceCheat: Array(4).fill(0).map((v, i) =>
        i < event.currentTarget.value ? 1 : 0),
    });
  }
  rollDie(): * {
    return Math.round(Math.random());
  }
  rollDice(): DiceStateFacesType {
    return Array.from(Array(4)).fill(0).map(
      (val: 0) => this.rollDie()
    );
  }
  render(): * {
    return (
      <div>
        <button onClick={
          this.handleThrow
        }>
          {
            this.props.dice.throwing
              ? 'Throwing...'
              : 'Throw dice'
          }
        </button>
        {
          this.debug && (
            <input
              type="number"
              value={this.state.diceCheat}
              onChange={this.handleDiceDebug}
            />
          )
        }
        <button onClick={
          this.handleEndTurn
        }>
          End turn
        </ button>
      </div>
    );
  }
}

const mapStateToProps = (store: StoreType) => ({
  dice: store.dice,
  turn: store.turn,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
  startRoll: () => {
    dispatch(ACTION_CREATORS.throwDiceStart());
  },
  endRoll: (faces: DiceStateFacesType) => {
    dispatch(ACTION_CREATORS.handleOptionsAfterThrow(faces));
  },
  togglePlayers: () => {
    dispatch(ACTION_CREATORS.togglePlayersTurn());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThrowDice);
