// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Dice} from '../../components';
import type {
  PropsType,
} from './RenderDice.types';
import type {
  StoreType,
} from '../../redux/store.types';

const RenderDice = (props: PropsType) => (
  <Dice faces={props.faces} />
);

const mapStateToProps = (store: StoreType) => ({
  faces: store.dice.faces,
});

export default connect(
  mapStateToProps
)(RenderDice);
