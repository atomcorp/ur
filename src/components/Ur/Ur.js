import React from 'react';
import {
  PlayerStatus,
  RenderDice,
  ThrowDice,
} from '../../containers';

const Ur = () => (
  <div className="ur">
    <PlayerStatus />
    <RenderDice />
    <ThrowDice />
  </div>
);

export default Ur;
