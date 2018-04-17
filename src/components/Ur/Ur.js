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
  MovePiece,
} from '../../containers';

const Ur = () => (
  <div className="ur">
    <PlayerStatus />
    <RenderThrows />
    <RenderBoard />
    <RenderDice />
    <ThrowDice />
    <MovePiece />
  </div>
);

export default Ur;
