/* eslint-disable react/prop-types */
import React from 'react';
import { Action } from './actions';

type Props = {
  children: any,
  onLogout: () => void,
};

type State = {
  cognito: { user: { signOut: () => void } },
};

/**
 * Container for logout behaviour.
 * @example
 * <Logout onLogout={handler}>
 *   <LogoutForm />
 * </Logout>
 */
export class Logout extends React.Component<Props, State> {
  /**
   * Passed to child element as onClick prop.
   * Signs the user out, and then dispatches the logout action
   * If you want to take further actions (like reloading UI) then add an
   * onLogout property to the Logout element
   */
  onClick = (event) => {
    const { store } = this.context;
    const state = store.getState();
    state.cognito.user.signOut();
    event.preventDefault();
    store.dispatch(Action.logout());
    this.props.onLogout();
  };

  /**
   * renders the child element, adding an onClick property
   */
  render() {
    return React.cloneElement(this.props.children, {
      onClick: this.onClick,
    });
  }
}
Logout.defaultProps = {
  onLogout: () => {},
};
