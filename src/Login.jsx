import React from 'react';
import { CognitoIdentityServiceProvider, CognitoIdentityCredentials } from 'aws-cognito-sdk';
import { login } from './actions';

/* global AWSCognito */

/* expects to wrap a component that resembles the following.

  <form onSubmit={onSubmit}>
    <input onChange={changeUsername} />
    <input onChange={changePassword} />
    <button type="submit">Sign in</button>
  </form>

*/

export class Login extends React.Component {

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

    const onSuccess = (result) => {
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
          store.dispatch(login(user));
          this.props.onSuccess(result);
        }
      });
    };

    const onFailure = error => this.props.onFailure(error);
    const mfaRequired = result => this.props.mfaRequired(result);
    const newPasswordRequired = result => this.props.newPasswordRequired(result);

    user.authenticateUser(creds, {
      onSuccess,
      onFailure,
      mfaRequired,
      newPasswordRequired,
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
Login.contextTypes = {
  store: React.PropTypes.object,
};
Login.propTypes = {
  children: React.PropTypes.any,
  onSuccess: React.PropTypes.func,
  onFailure: React.PropTypes.func,
  mfaRequired: React.PropTypes.func,
  newPasswordRequired: React.PropTypes.func,
};
