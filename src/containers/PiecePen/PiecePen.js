// @flow
import React from 'react';
import {connect} from 'react-redux';
import {StoreType} from '../../redux/store.types';
import type {PiecePenType} from './PiecePen.type';

const PiecePen = ({
  pieces,
  players,
}: PiecePenType) => (
  <div>
    <Pen playerData={players} player={'playerA'} pen={'tokensAtStart'} />
    <Pen playerData={players} player={'playerA'} pen={'tokensAtEnd'} />
    <Pen playerData={players} player={'playerB'} pen={'tokensAtStart'} />
    <Pen playerData={players} player={'playerB'} pen={'tokensAtEnd'} />
  </div>
);

const Pen = ({
  player,
  pen,
  playerData,
}) => (
  <div>
    {playerData[player].name}
    <br />
    {pen}: {playerData[player][pen]}
  </div>
);

const mapStateToProps = (store: StoreType) => ({
  pieces: store.pieces,
  players: store.players,
});

export default connect(mapStateToProps)(PiecePen);
