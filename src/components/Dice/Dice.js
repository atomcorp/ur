// @flow
import React from 'react';
import tailsImg from '../../assets/die-tails.png';
import headsImg from '../../assets/die-heads.png';

/*
  Returns one Die, either positive or negative, default positive
*/
const Die = (
  face = 'tails'
) => {
  return (
    <div>
      <img src={face === 'heads' ? tailsImg : headsImg} alt=""/>
    </div>
  );
};

const Dice = 1;

export default Die;
