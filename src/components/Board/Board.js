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
        <Square key={boardId} id={boardId} />
      ))
    }
  </div>
);

const Square = ({
  id,
}: string) => (
  <div className={`${styles.square} ${styles['square--' + id]}`}>
    {id}
  </div>
);

export default Board;
