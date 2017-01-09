import React from 'react';
import { connect } from 'react-redux';
import { Action } from './actions';
import { loginOrVerifyEmail } from './utils';

const BaseNewPasswordRequired = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
  });

const setNewPassword = (password, user, config, userAttributes, dispatch) =>
  user.completeNewPasswordChallenge(password, userAttributes, {
    onSuccess: () => loginOrVerifyEmail(user, config).then(dispatch),
    onFailure: error => dispatch(Action.newPasswordRequiredFailure(user, error)),
    mfaRequired: () => dispatch(Action.mfaRequired(user)),
    newPasswordRequired: () => dispatch(Action.newPasswordRequired(user)),
  });

const mapStateToProps = state => ({
  error: state.cognito.error,
  user: state.cognito.user,
  config: state.cognito.config,
});

const mapDispatchToProps = dispatch => ({
  setNewPasswordPartial: (password, user, config, userAttributes) =>
    setNewPassword(password, user, config, userAttributes, dispatch),
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    onSubmit: (password, userAttributes) =>
     dispatchProps.setNewPasswordPartial(
      password,
      stateProps.user,
      stateProps.config,
      userAttributes),
  });

export const NewPasswordRequired = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseNewPasswordRequired);
