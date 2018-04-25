import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.sendOnEnter = this.sendOnEnter.bind(this);
  }

  sendGuess() {
        this.props.sendGuess()
    }

  sendOnEnter(e) {
    if (e.keyCode === 13) { 
      this.props.sendGuess();
    }
  }

  render() {
    const allmessages = [];
    for (let i=0; i<this.props.messages.length; i++) {
      const user = this.props.messages[i].user;
      const word = this.props.messages[i].message;
      const message = (
          <li key={`message${i}`}>
            {user} : <span>{word}</span>
          </li>
        )
      allmessages.push(message);
    }

    let messageBox = (
      <div> 
        <h4>Guesses</h4>
        <div id='displayChat'>
          <ul>{allmessages}</ul>
        </div>
      </div>
    )

    if(!this.props.drawer) {
      messageBox = (
        <div>
          {/* <h4>Enter Guess Below</h4> */}
          <div id='inputGuess'>
            <h4>Guesses</h4>
            <input id="input" type="text" placeholder="Enter Your Guess Here" onKeyDown={this.sendOnEnter}></input>
            <button onClick={this.props.sendGuess}>Send</button>
          </div>
          <div id='displayChat'>
            <ul>{allmessages}</ul>
          </div>
        </div>
      )
    }

    return(
      <div className='messageBox'>
        {messageBox}
      </div>
    );
  }
}

module.exports = Messages;
