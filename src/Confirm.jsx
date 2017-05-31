import React from 'react';
import { connect } from 'react-redux';
import { Action } from './actions';

const BaseConfirm = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
    onResend: props.onResend,
    onCancel: props.onCancel,
  });

const confirm = (verificationCode, user, dispatch) =>
  new Promise((resolve, reject) => {
    user.confirmRegistration(verificationCode, true, (error) => {
      if (error) {
        dispatch(Action.confirmFailed(user));
        reject(error.message);
      } else {
        dispatch(Action.partialLogout());
        resolve(user);
      }
    });
  });

const resend = (user, dispatch) =>
  new Promise((resolve, reject) => {
    user.resendConfirmationCode((err) => {
      if (err) {
        dispatch(Action.confirmationRequired(user));
        reject(err.message);
      } else {
        dispatch(Action.confirmationRequired(user));
        resolve(user);
      }
    });
  });

const mapStateToProps = state => ({
  error: state.cognito.error,
  user: state.cognito.user,
});

const mapDispatchToProps = dispatch => ({
  confirmPartial: (verificationCode, user) =>
    confirm(verificationCode, user, dispatch),
  onCancel: () => dispatch(Action.logout()),
  onResendPartial: user => resend(user, dispatch),
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, dispatchProps, {
    onSubmit: verificationCode =>
     dispatchProps.confirmPartial(verificationCode, stateProps.user),
    onResend: () =>
     dispatchProps.onResendPartial(stateProps.user),
  });

/**
 * Container for a confirmation form.  Magically adds the following props to the 
 * contained form:
 *
 *  * user - the Cognito User from the redux store
 *  * error - the persisted error from the redux store
 *  * onSubmit - a handler that calls the Cognito confirm API
 *  * onResend - a handler that calls the Cognito resend request API
 *  * onCancel - Logs the user out completely
 *
 * @example
 * <Confirm>
 *   <ConfirmForm />
 * </Confirm>
 *
 */
export const Confirm = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseConfirm);
