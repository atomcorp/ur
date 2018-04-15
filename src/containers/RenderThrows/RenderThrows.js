// @flow
import React from 'react';
import {connect} from 'react-redux';
import type {
  StoreType,
} from '../../redux/store.types';


const RenderThrows = ({moves}: number) => (
  <div>
    Moves: {moves}
  </div>
);

const mapStateToProps = (store: StoreType) => ({
  moves: store.dice.total,
});

export default connect(
  mapStateToProps
)(RenderThrows);
