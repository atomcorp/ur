import React from 'react';
import {connect} from 'react-redux';
import type {StoreType} from '../../redux/store.types';

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

const mapStateToProps = (store: StoreType) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);
