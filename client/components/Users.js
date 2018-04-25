import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';
import UserPanel from './UserPanel';

const mapStateToProps = store => {
  return {
    users: store.users
  }
};

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <UserPanel users={this.props.users} />
    )
  }
}


export default connect(mapStateToProps)(Users);
