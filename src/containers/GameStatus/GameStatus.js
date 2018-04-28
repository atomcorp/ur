import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const GameStatus = ({game}) => (
  <div>
    Game status: {game.inProgress ? 'Started' : 'Not started'}
    <br />
    Messages: {
      game.message.map((message) => message).join(', ')
    }
  </div>
);

const mapStateToProps = (store) => ({
  game: store.game,
});

GameStatus.propTypes = {
  game: PropTypes.object,
};

export default connect(
  mapStateToProps
)(GameStatus);
