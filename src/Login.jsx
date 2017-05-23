import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from './auth';

const BaseLogin = props =>
  React.cloneElement(props.children, {
    username: props.username,
    email: props.email,
    onSubmit: props.onSubmit,
  });

const mapStateToProps = (state) => {
  let username = '';
  if (state.cognito.user) {
    username = state.cognito.user.getUsername();
  } else if (state.cognito.userName) {
    username = state.cognito.cache.userName;
  }
  return {
    username,
    email: state.cognito.cache.email,
    config: state.cognito.config,
    userPool: state.cognito.userPool,
  };
};

const mapDispatchToProps = dispatch => ({
  authenticator: (username, password, userPool, config) =>
    authenticate(username, password, userPool, config, dispatch)
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, {
    onSubmit: (username, password) =>
      dispatchProps.authenticator(username, password, stateProps.userPool, stateProps.config),
  });

/**
 * Container for login behaviour, wrapping a login form.
 *
 * Magically provides the following props to the wrapped form:
 *
 *  * username
 *  * onSubmit
 *
 * @example
 * <Login>
 *   <LoginForm />
 * </Login>
 */
const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(BaseLogin);

export { Login };
