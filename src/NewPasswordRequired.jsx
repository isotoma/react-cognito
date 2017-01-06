import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CognitoState } from './states';
import {
  newPasswordRequired,
  newPasswordRequiredFailure,
  mfaRequired,
  login,
} from './actions';

const BaseNewPasswordRequired = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
  });

const setNewPassword = (password, user, userAttributes, dispatch) =>
  user.completeNewPasswordChallenge(password, userAttributes, {
    onSuccess: () => dispatch(login(user)),
    onFailure: error => dispatch(newPasswordRequiredFailure(user, error)),
    mfaRequired: () => dispatch(mfaRequired(user)),
    newPasswordRequired: () => dispatch(newPasswordRequired(user)),
  });

const mapStateToProps = (state) => {
  let error = '';
  if (state.cognito.state === CognitoState.NEW_PASSWORD_REQUIRED_FAILURE) {
    error = state.cognito.error;
  }
  return {
    error,
    user: state.cognito.user,
  };
};

const mapDispatchToProps = dispatch => ({
  func: (password, user, userAttributes) =>
    setNewPassword(password, user, userAttributes, dispatch),
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    onSubmit: (password, userAttributes) =>
     dispatchProps.func(password, stateProps.user, userAttributes),
  });

export const NewPasswordRequired = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseNewPasswordRequired);
