import React from 'react';
import { connect } from 'react-redux';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Action } from './actions';

const BasePasswordReset = props =>
  React.cloneElement(props.children, {
    error: props.error,
    username: props.username,
    sendVerificationCode: props.sendVerificationCode,
    setPassword: props.setPassword,
  });

const getUser = (username, userPool) => {
  const user = new CognitoUser({
    Username: username,
    Pool: userPool,
  });
  return user;
};

const setPassword = (username, userPool, code, password) =>
  new Promise((resolve) => {
    const user = getUser(username, userPool);
    user.confirmPassword(code, password, {
      onSuccess: () => resolve(Action.finishPasswordResetFlow('Password reset')),
      onFailure: err => resolve(Action.beginPasswordResetFlow(user, err.message)),
    });
  });


const sendVerificationCode = (username, userPool) =>
  new Promise((resolve) => {
    const user = getUser(username, userPool);
    user.forgotPassword({
      onSuccess: () => resolve(Action.beginPasswordResetFlow(user, 'Verification code sent')),
      onFailure: err => resolve(Action.beginPasswordResetFlow(user, err.message)),
    });
  });


const mapStateToProps = (state) => {
  const props = {
    error: state.cognito.error || '',
    user: state.cognito.user,
    username: '',
    userPool: state.cognito.userPool,
  };
  if (state.cognito.user != null) {
    props.username = state.cognito.user.getUsername();
  }
  return props;
};

const mapDispatchToProps = dispatch => ({
  sendVerificationCodePartial: (username, userPool) => {
    sendVerificationCode(username, userPool).then(dispatch);
  },
  setPasswordPartial: (user, userPool, code, password) => {
    setPassword(user, userPool, code, password).then(dispatch);
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    sendVerificationCode: username =>
      dispatchProps.sendVerificationCodePartial(username, stateProps.userPool),
    setPassword: (username, code, password) =>
      dispatchProps.setPasswordPartial(username, stateProps.userPool, code, password),
  });

/**
 * Container for a Password Reset form
 *
 * Magically provides the following props to the wrapped element:
 *
 *  * user
 *  * username
 *  * error
 *  * sendVerificationCode
 *  * setPassword
 *
 * @example
 * <PasswordReset>
 *   <PasswordResetForm />
 * </PasswordReset>
 */
export const PasswordReset = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BasePasswordReset);
