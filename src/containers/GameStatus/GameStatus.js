import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const GameStatus = ({game}) => (
  <div>
    Game status: {game.inProgress ? 'Started' : 'Not started'}
    <br />
    Messages: {game.messages}
  </div>
);

const mapStateToProps = (store) => ({
  game: store.game,
});

GameStatus.propTypes = {
  game: {
    inProgress: PropTypes.bool,
    messages: PropTypes.string,
  },
};

export default connect(
  mapStateToProps
)(GameStatus);
