import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import store from '../store';
import { getMe } from '../reducers/userActionCreators';
import Login from './userLogin';
import UserPage from './userPage';

const UserAuthentication = withRouter(
  class extends Component {
    // componentDidMount() {                //<--------??????
    //   store.dispatch(getMe()).then(() => {
    //     this.props.history.push('/home');
    //   });
    // }

    render() {
      return (
        <Switch>
          {/* <Route path="/home" component={UserPage} /> */}
          <Route component={Login} />
        </Switch>
      );
    }
  }
);

export default UserAuthentication;
