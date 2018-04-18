/**
 * This should contain all the UI
 */
import React from 'react';
import {
  PlayerStatus,
  RenderDice,
  ThrowDice,
  RenderBoard,
  RenderThrows,
} from '../../containers';

const Ur = () => (
  <div className="ur">
    <PlayerStatus />
    <RenderThrows />
    <RenderBoard />
    <RenderDice />
    <ThrowDice />
  </div>
);

export default Ur;
