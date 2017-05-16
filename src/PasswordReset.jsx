import React from 'react';
import { connect } from 'react-redux';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Action } from './actions';

const BasePasswordReset = props =>
  React.cloneElement(props.children, {
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

const setPassword = (username, userPool, code, password, dispatch) =>
  new Promise((resolve, reject) => {
    const user = getUser(username, userPool);
    user.confirmPassword(code, password, {
      onSuccess: () => {
        dispatch(Action.finishPasswordResetFlow()),
        resolve();
      },
      onFailure: err => {
        dispatch(Action.beginPasswordResetFlow(user, err.message)),
        reject(err);
      }
    });
  });


const sendVerificationCode = (username, userPool, dispatch) =>
  new Promise((resolve, reject) => {
    const user = getUser(username, userPool);
    user.forgotPassword({
      onSuccess: () => {
        dispatch(Action.continuePasswordResetFlow(user));
        resolve();
      },
      onFailure: err => {
        dispatch(Action.beginPasswordResetFlow(user, err.message));
        reject(err);
      }
    });
  });


const mapStateToProps = (state) => {
  const props = {
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
  sendVerificationCodePartial: (username, userPool) =>
    sendVerificationCode(username, userPool, dispatch),
  setPasswordPartial: (user, userPool, code, password) =>
    setPassword(user, userPool, code, password, dispatch),
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
