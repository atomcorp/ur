import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const GameStatus = ({
  game,
  playerAStart,
  playerAEnd,
  playerBStart,
  playerBEnd,
}) => (
  <div>
    Game status: {game.inProgress ? 'Started' : 'Not started'}
    <br />
    Messages: {
      game.message.map((message) => message).join(', ')
    }
      playerA Start: {playerAStart}<br />
      playerA End: {playerAEnd}<br />
      ---<br />
      playerB Start: {playerBStart}<br />
      playerB End: {playerBEnd}<br />
  </div>
);

const mapStateToProps = (store) => ({
  game: store.game,
  playerAStart: store.board['playerA-0'].contents.length,
  playerAEnd: store.board['playerA-15'].contents.length,
  playerBStart: store.board['playerB-0'].contents.length,
  playerBEnd: store.board['playerB-15'].contents.length,
});

GameStatus.propTypes = {
  game: PropTypes.object,
  playerAStart: PropTypes.string,
  playerAEnd: PropTypes.string,
  playerBStart: PropTypes.string,
  playerBEnd: PropTypes.string,
};

export default connect(
  mapStateToProps
)(GameStatus);
