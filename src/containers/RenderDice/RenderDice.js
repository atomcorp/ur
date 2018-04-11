import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dice} from '../../components';

class RenderDice extends Component {
  constructor(props) {
    super(props);
  }
  render(): * {
    return (
      <Dice faces={this.props.faces} />
    );
  }
}

const mapStateToProps = (store) => ({
  faces: store.dice.faces,
});

export default connect(
  mapStateToProps
)(RenderDice);
