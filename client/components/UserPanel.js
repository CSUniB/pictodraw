import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';




class UserPanel extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const allusers = [];
    for (let i=0; i<this.props.users.length; i++) {
      const info = `${this.props.users[i].name}`;
      const userclass = (this.props.users[i].drawer) ? 'drawerBox userBox' : 'guesserBox userBox';
      const isDrawing = (this.props.users[i].drawer) ? ' is drawing' : ''
      const user = (
          <div className={userclass} key={`user${i}`}>
            {info} {isDrawing}
          </div>
        )
      allusers.push(user);
    }

    return(
      <div className='userPanel'>
        {allusers}
      </div>
    );
  }
}


module.exports = UserPanel;