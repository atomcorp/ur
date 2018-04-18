
export const helpReturnSquareIdTrackNumber = (squareId, board) => {
  return board[squareId].tracknumber;
};

export const helpCalculateSquareId = ({
  playerId,
  trackNumber = 0,
}) => {
  if (trackNumber < 5 || trackNumber > 12) {
    return `${playerId}-${trackNumber}`;
  }
  return `battle-${trackNumber}`;
};
