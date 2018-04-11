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

const Dice = ({faces}) => (
  <div>
    {
      faces.map((face, index) => {
        return <Die face={face} key={index} />;
      })
    }
  </div>
);

export default Dice;
