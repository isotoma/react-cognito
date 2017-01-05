import React from 'react';
import { CognitoIdentityServiceProvider } from 'aws-sdk';

export class LoginFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      password: '',
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  authenticate() {
    const { store } = this.context;
    const state = store.getState();
  }

  changeUsername(event) {
    this.setState({ username: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit(event) {
    this.authenticate();
    event.preventDefault();
  }

  render() {
    return React.cloneElement(this.props.children, {
      changeUsername: this.changeUsername,
      changePassword: this.changePassword,
      onSubmit: this.onSubmit
    });
  }

}
LoginFormContainer.contextTypes = {
  store: React.PropTypes.object
};