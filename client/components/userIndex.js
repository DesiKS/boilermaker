import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import store from '../store';
import { getMe } from '../reducers/userActionCreators';
import Login from './userLogin';

const UserAuthentication = withRouter(
  //<--------?????? with Router?
  class extends Component {
    componentDidMount() {
      //<--------??????
      store.dispatch(getMe()).then(() => {
        if (store.getState().user.id) {
          return this.props.history.push('/home');
        }
      });
    }

    render() {
      //<--------??????
      return <Route component={Login} />;
    }
  }
);

export default UserAuthentication;
