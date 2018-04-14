import React from 'react';
import {connect} from 'react-redux';
const PlayerStatus = ({playersTurn}) => (
  <div>
    Player turn: {playersTurn}
  </div>
);

const mapStateToProps = (state) => ({
  playersTurn: state.players[state.turn.playersTurn].name,
});

export default connect(mapStateToProps)(PlayerStatus);
