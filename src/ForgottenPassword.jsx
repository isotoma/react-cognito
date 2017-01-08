import React from 'react';
import { connect } from 'react-redux';
import { CognitoIdentityServiceProvider } from 'aws-cognito-sdk';
import { beginForgottenPasswordFlow, finishForgottenPasswordFlow } from './actions';

const BaseForgottenPassword = props =>
  React.cloneElement(props.children, {
    error: props.error,
    username: props.username,
    sendVerificationCode: props.sendVerificationCode,
    setPassword: props.setPassword,
  });

const setPassword = (user, code, password) =>
  new Promise(resolve =>
    user.confirmPassword(code, password, {
      onSuccess: () => resolve(finishForgottenPasswordFlow('Password reset')),
      onFailure: err => resolve(beginForgottenPasswordFlow(user, err.message)),
    }));

const getUser = (username, userPool) => {
  const user = new CognitoIdentityServiceProvider.CognitoUser({
    Username: username,
    Pool: userPool,
  });
  return user;
};

const sendVerificationCode = (username, userPool) =>
  new Promise((resolve) => {
    const user = getUser(username, userPool);
    user.forgotPassword({
      onSuccess: () => resolve(beginForgottenPasswordFlow(user, 'Verification code sent')),
      onFailure: err => resolve(beginForgottenPasswordFlow(user, err.message)),
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
  setPasswordPartial: (user, code, password) => {
    setPassword(user, code, password).then(dispatch);
  },
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    sendVerificationCode: username =>
      dispatchProps.sendVerificationCodePartial(username, stateProps.userPool),
    setPassword: (code, password) =>
      dispatchProps.setPasswordPartial(stateProps.user, code, password),
  });

export const ForgottenPassword = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseForgottenPassword);
