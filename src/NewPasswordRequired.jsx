import React from 'react';
import { connect } from 'react-redux';
import {
  newPasswordRequired,
  newPasswordRequiredFailure,
  mfaRequired,
} from './actions';
import { postLoginDispatch } from './utils';

const BaseNewPasswordRequired = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
  });

const setNewPassword = (password, user, userAttributes, dispatch) =>
  user.completeNewPasswordChallenge(password, userAttributes, {
    onSuccess: () => postLoginDispatch(user, dispatch),
    onFailure: error => dispatch(newPasswordRequiredFailure(user, error)),
    mfaRequired: () => dispatch(mfaRequired(user)),
    newPasswordRequired: () => dispatch(newPasswordRequired(user)),
  });

const mapStateToProps = state => ({
  error: state.cognito.error,
  user: state.cognito.user,
});

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
