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
      <img
        width={'150'}
        src={face === 1 ? headsImg : tailsImg}
        alt=""/>
    </div>
  );
};

const Dice = () => (
  <div>
    <Die face={0} key={1} />
    <Die face={0} key={2} />
    <Die face={0} key={3} />
    <Die face={0} key={4} />
  </div>
);

export default Dice;
