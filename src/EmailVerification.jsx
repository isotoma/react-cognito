import React from 'react';
import { connect } from 'react-redux';
import { Action } from './actions';

const BaseEmailVerification = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
    onCancel: props.onCancel,
  });

export const verifyEmail = (verificationCode, user, dispatch) =>
  new Promise((resolve, reject) => {
    user.verifyAttribute('email', verificationCode, {
      onSuccess: () => {
        dispatch(Action.login(user));
        resolve();
      },
      inputVerificationCode: () => {
        dispatch(Action.emailVerificationRequired(user));
        reject();
      },
      onFailure: (error) => {
        dispatch(Action.emailVerificationFailed(user, error.message));
        reject();
      },
    });
  });

const mapStateToProps = state => ({
  error: state.cognito.error,
  user: state.cognito.user,
});

const mapDispatchToProps = dispatch => ({
  verifyPartial: (verificationCode, user) =>
    verifyEmail(verificationCode, user, dispatch),
  onCancel: () => dispatch(Action.logout()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, dispatchProps, {
    onSubmit: verificationCode =>
     dispatchProps.verifyPartial(verificationCode, stateProps.user),
  });

/**
 * Wrapper for an Email Verification Form.
 * Magically adds the following props to the contained form:
 *
 *  * user - the Cognito user from the Redux store
 *  * error - the persisted error from the Redux store
 *  * onSubmit - a handler that calls the Cognito verification API
 *
 * @example
 * <EmailVerification>
 *   <EmailVerificationForm />
 * </EmailVerification>
 *
 */
export const EmailVerification = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseEmailVerification);
