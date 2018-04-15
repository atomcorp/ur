import React from 'react';
import {
  PlayerStatus,
  RenderDice,
  ThrowDice,
  RenderBoard,
  RenderThrows,
  PiecePen,
  MovePiece,
} from '../../containers';

const Ur = () => (
  <div className="ur">
    <PlayerStatus />
    <RenderThrows />
    <RenderBoard />
    <PiecePen />
    <RenderDice />
    <ThrowDice />
    <MovePiece />
  </div>
);

export default Ur;
