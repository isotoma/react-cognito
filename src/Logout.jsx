import React, { PropTypes } from 'react';
import { logout } from './actions';

export class Logout extends React.Component {

  onClick = (event) => {
    const { store } = this.context;
    const state = store.getState();
    state.cognito.user.signOut();
    event.preventDefault();
    store.dispatch(logout());
  }

  render() {
    return React.cloneElement(this.props.children, {
      onClick: this.onClick,
    });
  }
}
Logout.contextTypes = {
  store: PropTypes.object,
};
Logout.propTypes = {
  children: React.PropTypes.any,
};
