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
  }
  handleClick = () => {
    this.props.dice.throwing
      ? this.props.startRoll()
      : this.props.endRoll(this.rollDice());
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
          this.handleClick
        }>
          {
            this.props.dice.throwing ? 'Throwing...' : 'Throw dice'
          }
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store: StoreType) => ({
  dice: store.dice,
});

const mapDispatchToProps = (dispatch: DispatchType) => ({
  startRoll: () => {
    dispatch(ACTION_CREATORS.throwDiceStart());
  },
  endRoll: (faces: DiceStateFacesType) => {
    dispatch(ACTION_CREATORS.throwDiceEnd(faces));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThrowDice);
