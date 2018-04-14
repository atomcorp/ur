import React from 'react';
import {
  PlayerStatus,
  RenderDice,
  ThrowDice,
  RenderBoard,
} from '../../containers';

const Ur = () => (
  <div className="ur">
    <PlayerStatus />
    <RenderBoard />
    <RenderDice />
    <ThrowDice />
  </div>
);

export default Ur;
