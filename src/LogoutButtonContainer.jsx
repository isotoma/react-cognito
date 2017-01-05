import React, { PropTypes } from 'react';
import { logout } from './actions';

export class LogoutButtonContainer extends React.Component {

  onClick = (event) => {
    const { store } = this.context;
    const state = store.getState();
    state.cognito.user.signOut();
    event.preventDefault();
    store.dispatch(logout());
    this.props.onSuccess();
  }

  render() {
    return React.cloneElement(this.props.children, {
      onClick: this.onClick,
    });
  }
}
LogoutButtonContainer.contextTypes = {
  store: PropTypes.object,
};
LogoutButtonContainer.propTypes = {
  children: React.PropTypes.any,
  onSuccess: React.PropTypes.func,
};
