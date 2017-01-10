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

const confirm = (verificationCode, user, dispatch) => {
  user.confirmRegistration(verificationCode, true, (error) => {
    if (error) {
      dispatch(Action.confirmFailed(user, error.message));
    } else {
      dispatch(Action.logout());
    }
  });
};

const resend = (user, dispatch) =>
  user.resendConfirmationCode((err) => {
    if (err) {
      dispatch(Action.confirmationRequired(user, err.message));
    } else {
      dispatch(Action.confirmationRequired(user, 'Confirmation code resent'));
    }
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

export const Confirm = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseConfirm);
