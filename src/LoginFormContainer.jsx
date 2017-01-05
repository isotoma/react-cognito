import React from 'react';
import { CognitoIdentityServiceProvider } from 'amazon-cognito-identity-js';

/* global AWS */

export class LoginFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.authenticate();
  }

  onSuccess(result) {
    const { store } = this.context;
    const state = store.getState();
    const loginDomain = `cognito-idp.${state.cognito.config.region}.amazonaws.com`;
    const loginUrl = `${loginDomain}/${state.cognito.config.identityPool}`;
    const identityCredentials = {
      IdentityPoolId: state.cognito.config.identityPool,
      Logins: {},
    };
    identityCredentials.Logins[loginUrl] = result.getIdToken().getJwtToken();
    AWS.config.credentials = new AWS.CognitoIdentityCredentials(identityCredentials);
    AWS.config.credentials.refresh((error) => {
      if (error) {
        this.props.onFailure(error);
      } else {
        this.props.onSuccess(result);
      }
    });
  }

  onFailure(error) {
    this.props.onFailure(error);
  }

  authenticate() {
    const { store } = this.context;
    const state = store.getState();
    const creds = new CognitoIdentityServiceProvider.AuthenticationDetails({
      Username: this.state.username,
      Password: this.state.password,
    });
    state.cognito.user = new CognitoIdentityServiceProvider.CognitoUser({
      Username: this.state.username,
      Pool: state.cognito.userPool,
    });
    state.cognito.authenticateUser(creds, {
      onSuccess: this.onSuccess,
      onFailure: this.onFailure,
      mfaRequired: this.mfaRequired,
      newPasswordRequired: this.newPasswordRequired,
    });
  }

  mfaRequired(result) {
    this.props.mfaRequired(result);
  }

  newPasswordRequired(result) {
    this.props.newPasswordRequired(result);
  }

  changeUsername(event) {
    this.setState({ username: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return React.cloneElement(this.props.children, {
      changeUsername: this.changeUsername,
      changePassword: this.changePassword,
      onSubmit: this.onSubmit,
    });
  }

}
LoginFormContainer.contextTypes = {
  store: React.PropTypes.object,
};
LoginFormContainer.propTypes = {
  children: React.PropTypes.any,
  onSuccess: React.PropTypes.function,
  onFailure: React.PropTypes.function,
  mfaRequired: React.PropTypes.function,
  newPasswordRequired: React.PropTypes.function,
};
