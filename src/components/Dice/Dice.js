// @flow
import React from 'react';
import tailsImg from '../../assets/die-tails.png';
import headsImg from '../../assets/die-heads.png';
import type {
  DieType,
  DiceType,
} from './Dice.types.js';

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

const Dice = ({faces}: DiceType) => (
  <div>
    {
      faces.map((face: 0 | 1, index: number) => {
        return <Die face={face} key={index} />;
      })
    }
  </div>
);

export default Dice;
