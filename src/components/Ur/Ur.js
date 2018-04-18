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
  MoveCounter,
} from '../../containers';

const Ur = () => (
  <div className="ur">
    <PlayerStatus />
    <RenderThrows />
    <RenderBoard />
    <RenderDice />
    <ThrowDice />
    <MoveCounter />
  </div>
);

export default Ur;
