import React from 'react';
import { connect } from 'react-redux';
import { Action } from './actions';

const BaseNewPasswordRequired = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
  });

const setNewPassword = (password, user, config, userAttributes, dispatch) =>
  new Promise((resolve, reject) => {
    user.completeNewPasswordChallenge(password, userAttributes, {
      onSuccess: () => {
        dispatch(Action.authenticated(user));
        resolve();
      },
      onFailure: error => {
        dispatch(Action.newPasswordRequiredFailure(user, error.message));
        reject(error);
      },
      mfaRequired: () => {
        dispatch(Action.mfaRequired(user));
        resolve();
      },
      newPasswordRequired: () => {
        dispatch(Action.newPasswordRequired(user));
        resolve();
      },
    });
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

/**
 * Wrapper for a New Password Required form
 *
 * Magically provides the following props to the wrapped element:
 *
 * * user - the Cognito user
 * * error - the persistent react-cognito error message
 * * onSubmit - a handler that calls the Set New Password API
 *
 * @example
 *
 * <NewPasswordRequired>
 *   <NewPasswordRequiredForm />
 * </NewPasswordRequired>
 */
export const NewPasswordRequired = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseNewPasswordRequired);
