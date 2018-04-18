import React from 'react';

const Piece = ({
  pieceId,
  playerId,
}) => {
  const handleClick = (pieceId) => {
    return () => console.log(pieceId);
  };
  return (
    <div
      onClick={
        handleClick(pieceId)
      }
    >
      {pieceId}
      <br />
      {playerId}
    </div>
  );
};

export default Piece;
