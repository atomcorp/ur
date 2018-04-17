// @flow
import React from 'react';
import styles from './Board.module.scss';
import type {
  BoardStateType,
} from '../../redux/reducers/reducers.types';

const Board = ({boardData}: BoardStateType) => (
  <div className={styles.board}>
    {
      Object.keys(boardData).map((boardId: string) => (
        <Square
          key={boardId}
          {...boardData[boardId]}
        />
      ))
    }
  </div>
);

const Square = ({
  id,
  contents,
}: string) => (
  <div className={`${styles.square} ${styles['square--' + id]}`}>
    ({id})
    <br />
    {contents.map((content, i) => (
      <div key={i}>
        {content}
      </div>
    ))}
  </div>
);

export default Board;
