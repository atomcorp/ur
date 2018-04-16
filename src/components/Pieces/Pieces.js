import React from 'react';

const Piece = ({
  pieceId,
  playerId,
  key,
}) => (
  <div key={key}>
    {pieceId}
    <br />
    {playerId}
  </div>
);

export default Piece;
