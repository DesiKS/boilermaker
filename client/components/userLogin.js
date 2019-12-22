import React from 'react';
import { connect } from 'react-redux';
import { login } from '../reducers/userActionCreators';
import LocalLoginForm from './userLocalLoginForm';
import OauthLoginForm from './userOathLoginForm';

const Login = props => {
  const { handleSubmit } = props;

  return (
    <div className="h100 w100 flex column align-items-center justify-center">
      <h1>Let's Loggin'!</h1>
      <div className="flex w50">
        <img src="/loggin.png" />
        <div className="grow1">
          <LocalLoginForm handleSubmit={handleSubmit} />
          <OauthLoginForm />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login({ email, password })).then(() => {
        ownProps.history.push('/home');
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
