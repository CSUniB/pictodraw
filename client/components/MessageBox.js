import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import Messages from './Messages';

const mapStateToProps = store => ({
  messages: store.messages,
  drawer: store.drawer, 
});

const mapDispatchToProps = dispatch => {
  return {
    sendGuess: () => dispatch(actions.sendGuess()),
  }
};

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.sendOnEnter = this.sendOnEnter.bind(this);
  }
  sendOnEnter(e) {
    if (e.keyCode === 13) { 
      this.props.sendGuess();
    }
  }
  render() {
    return(
      <Messages messages={this.props.messages} drawer={this.props.drawer} sendGuess={this.props.sendGuess} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
