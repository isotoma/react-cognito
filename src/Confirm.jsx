import React from 'react';
import { connect } from 'react-redux';
import { Action } from './actions';

const BaseConfirm = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
    onCancel: props.onCancel,
  });

const confirm = (verificationCode, user, dispatch) => {
  user.confirmRegistration(verificationCode, true, (error, result) => {
    if (error) {
      dispatch(Action.confirmFailed(user, error.message));
    } else {
      dispatch(Action.logout());
    }
  });
};

const mapStateToProps = state => ({
  error: state.cognito.error,
  user: state.cognito.user,
});

const mapDispatchToProps = dispatch => ({
  confirmPartial: (verificationCode, user) =>
    confirm(verificationCode, user, dispatch),
  onCancel: () => dispatch(Action.logout()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, dispatchProps, {
    onSubmit: verificationCode =>
     dispatchProps.confirmPartial(verificationCode, stateProps.user),
  });

export const Confirm = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseConfirm);
