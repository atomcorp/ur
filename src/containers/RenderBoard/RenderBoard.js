// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Board} from '../../components';
import type {
  BoardStateType,
} from '../../redux/reducers/reducers.types';
import type {
  StoreType,
} from '../../redux/store.types';

const RenderBoard = ({board, pieces}: BoardStateType) => (
  <Board boardData={board} />
);

const mapStateToProps = (store: StoreType) => ({
  board: store.board,
});

export default connect(mapStateToProps)(RenderBoard);
