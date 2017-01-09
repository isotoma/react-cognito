import React from 'react';
import { connect } from 'react-redux';
import { Action } from './actions';

const BaseEmailVerification = props =>
  React.cloneElement(props.children, {
    error: props.error,
    onSubmit: props.onSubmit,
  });

const verifyEmail = (verificationCode, user, dispatch) =>
  user.verifyAttribute('email', verificationCode, {
    onSuccess: () => dispatch(Action.login(user)),
    inputVerificationCode: () => dispatch(Action.emailVerificationRequired(user)),
    onFailure: error => dispatch(Action.emailVerificationFailed(user, error.message)),
  });


const mapStateToProps = state => ({
  error: state.cognito.error,
  user: state.cognito.user,
});

const mapDispatchToProps = dispatch => ({
  verify: (verificationCode, user) =>
    verifyEmail(verificationCode, user, dispatch),
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    onSubmit: verificationCode =>
     dispatchProps.verify(verificationCode, stateProps.user),
  });

export const EmailVerification = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseEmailVerification);
