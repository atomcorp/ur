import React from 'react';
import {
  PlayerStatus,
  RenderDice,
  ThrowDice,
  RenderBoard,
  RenderThrows,
  PiecePen,
} from '../../containers';

const Ur = () => (
  <div className="ur">
    <PlayerStatus />
    <RenderThrows />
    <RenderBoard />
    <PiecePen />
    <RenderDice />
    <ThrowDice />
  </div>
);

export default Ur;
