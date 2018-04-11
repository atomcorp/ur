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
}: DieType): React$Element<string> => {
  return (
    <div>
      <img
        width={'150'}
        src={face === 'heads' ? headsImg : tailsImg}
        alt=""/>
    </div>
  );
};

let x: $ReadOnlyArray<number> = [1, 2, 3];
x;

const testy = (s: string) => s;
let newTest = testy('1');
newTest === '1';

const Dice = () => (
  <div>
    <Die face={'heads'} key={1} />;
    <Die face={'tails'} key={2} />;
    <Die face={'heads'} key={3} />;
    <Die face={'tails'} key={4} />;
  </div>
);

export default Dice;
