import React from 'react';
import {connect} from 'react-redux';
import type {StoreType} from '../../redux/store.types';

const Counter = ({
  counterId,
  playerId,
}) => {
  const handleClick = (counterId) => {
    return () => console.log(counterId);
  };
  return (
    <div
      onClick={
        handleClick(counterId)
      }
    >
      {counterId}
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
)(Counter);
