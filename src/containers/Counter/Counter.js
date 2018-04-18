import React from 'react';
import {connect} from 'react-redux';
import type {StoreType} from '../../redux/store.types';
import type {CountersStateType} from '../../redux/reducers/reducers.types';

const Counter = ({
  piece,
}: CountersStateType) => {
  const handleClick = (counterId) => {
    
  };
  return (
    <div
      onClick={
        handleClick(piece.id)
      }
    >
      {piece.id}
      <br />
      {piece.player}
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
