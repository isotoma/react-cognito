import React from 'react';
import { CognitoIdentityServiceProvider, CognitoIdentityCredentials } from 'aws-cognito-sdk';

/* global AWSCognito */

export class LoginFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.authenticate();
  }

  onSuccess = (result) => {
    const { store } = this.context;
    const state = store.getState();
    const loginDomain = `cognito-idp.${state.cognito.config.region}.amazonaws.com`;
    const loginUrl = `${loginDomain}/${state.cognito.config.userPool}`;
    const identityCredentials = {
      IdentityPoolId: state.cognito.config.identityPool,
      Logins: {},
    };
    identityCredentials.Logins[loginUrl] = result.getIdToken().getJwtToken();
    AWSCognito.config.credentials = new CognitoIdentityCredentials(identityCredentials);
    AWSCognito.config.credentials.refresh((error) => {
      if (error) {
        this.props.onFailure(error);
      } else {
        this.props.onSuccess(result);
      }
    });
  }

  onFailure = (error) => {
    this.props.onFailure(error);
  }

  mfaRequired = (result) => {
    this.props.mfaRequired(result);
  }

  newPasswordRequired = (result) => {
    this.props.newPasswordRequired(result);
  }

  authenticate() {
    const { store } = this.context;
    const state = store.getState();
    const creds = new CognitoIdentityServiceProvider.AuthenticationDetails({
      Username: this.state.username,
      Password: this.state.password,
    });
    const user = new CognitoIdentityServiceProvider.CognitoUser({
      Username: this.state.username,
      Pool: state.cognito.userPool,
    });
    user.authenticateUser(creds, {
      onSuccess: this.onSuccess,
      onFailure: this.onFailure,
      mfaRequired: this.mfaRequired,
      newPasswordRequired: this.newPasswordRequired,
    });
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
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
  onSuccess: React.PropTypes.func,
  onFailure: React.PropTypes.func,
  mfaRequired: React.PropTypes.func,
  newPasswordRequired: React.PropTypes.func,
};
