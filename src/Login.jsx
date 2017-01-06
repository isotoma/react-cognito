import React from 'react';
import { connect } from 'react-redux';
import { CognitoIdentityServiceProvider, CognitoIdentityCredentials } from 'aws-cognito-sdk';
import { login, loginFailure, mfaRequired, newPasswordRequired } from './actions';
import { CognitoState } from './states';
/* global AWSCognito */

const BaseLogin = props =>
  React.cloneElement(props.children, {
    username: props.username,
    error: props.error,
    onSubmit: props.onSubmit,
  });

const authenticate = (username, password, userPool, config, dispatch) => {
  const creds = new CognitoIdentityServiceProvider.AuthenticationDetails({
    Username: username,
    Password: password,
  });
  const user = new CognitoIdentityServiceProvider.CognitoUser({
    Username: username,
    Pool: userPool,
  });

  const onSuccess = (result) => {
    const loginDomain = `cognito-idp.${config.region}.amazonaws.com`;
    const loginUrl = `${loginDomain}/${config.userPool}`;
    const identityCredentials = {
      IdentityPoolId: config.identityPool,
      Logins: {},
    };
    identityCredentials.Logins[loginUrl] = result.getIdToken().getJwtToken();
    AWSCognito.config.credentials = new CognitoIdentityCredentials(identityCredentials);
    AWSCognito.config.credentials.refresh((error) => {
      if (error) {
        dispatch(loginFailure(user, error.message));
      } else {
        dispatch(login(user));
      }
    });
  };

  user.authenticateUser(creds, {
    onSuccess,
    onFailure: error => dispatch(loginFailure(user, error.message)),
    mfaRequired: () => dispatch(mfaRequired(user)),
    newPasswordRequired: () => dispatch(newPasswordRequired(user)),
  });
};

const mapStateToProps = (state) => {
  let username = '';
  let error = '';
  if (state.cognito.user) {
    username = state.cognito.user.getUsername();
  }
  if (state.cognito.state === CognitoState.LOGIN_FAILURE) {
    error = state.cognito.error;
  }
  return {
    username,
    error,
    config: state.cognito.config,
    userPool: state.cognito.userPool,
  };
};

const mapDispatchToProps = dispatch => ({
  authenticator: (username, password, userPool, config) => {
    authenticate(username, password, userPool, config, dispatch);
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    onSubmit: (username, password) =>
      dispatchProps.authenticator(username, password, stateProps.userPool, stateProps.config),
  });

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseLogin);
