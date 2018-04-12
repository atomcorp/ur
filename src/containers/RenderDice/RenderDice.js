// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dice} from '../../components';
import type {
  StateType,
  PropsType,
} from './RenderDice.types';
import type {
  StoreType,
} from '../../redux/store.types';


class RenderDice extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
  }
  render(): * {
    return (
      <Dice faces={this.props.faces} />
    );
  }
}

const mapStateToProps = (store: StoreType) => ({
  faces: store.dice.faces,
});

export default connect(
  mapStateToProps
)(RenderDice);
