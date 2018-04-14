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
  playersTurn: store.players[store.turn.playersTurn].name,
});

export default connect(mapStateToProps)(PlayerStatus);
