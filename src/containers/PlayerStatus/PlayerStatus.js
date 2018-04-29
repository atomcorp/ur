// @flow
import React from 'react';
import {connect} from 'react-redux';
import type {
  StoreType,
} from '../../redux/store.types';

const PlayerStatus = ({playersTurn}: string) => (
  <div>
    Player turn: {playersTurn}
  </div>
);

const mapStateToProps = (store: StoreType) => ({
  playersTurn: store.turn.playersTurn,
});

export default connect(mapStateToProps)(PlayerStatus);
