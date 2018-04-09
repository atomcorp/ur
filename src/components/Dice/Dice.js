// @flow
import React from 'react';
import tailsImg from '../../assets/die-tails.png';
import headsImg from '../../assets/die-heads.png';
import type {DieType} from './Dice.types.js';

/*
  Returns one Die, either positive or negative, default positive
*/
const Die = ({
  face,
}: DieType) => {
  return (
    <div>
      <img src={face === 'heads' ? headsImg : tailsImg} alt=""/>
    </div>
  );
};

const Dice = () => (
  <div>
    <Die face={'heads'} key={1} />;
    <Die face={'tails'} key={2} />;
    <Die face={'heads'} key={3} />;
    <Die face={'tails'} key={4} />;
  </div>
);

export default Dice;
