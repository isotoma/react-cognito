import React, { PropTypes } from 'react';
import { registerUser } from 'react-cognito';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      username: '',
      password: '',
      email: '',
    };
  }

  onSubmit = (event) => {
    const { store, router } = this.context;
    const state = store.getState();
    const userPool = state.cognito.userPool;
    const config = state.cognito.config;
    event.preventDefault();
    registerUser(userPool, config, this.state.username, this.state.password, {
      email: this.state.email,
    }).then(
      (action) => {
        store.dispatch(action);
        router.push('/');
      },
      error => this.setState({ error }));
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.state.error}</div>
      <label>
        Username
        <input placeholder="username" onChange={this.changeUsername} required />
      </label>
      <label>
        Password
        <input placeholder="password" onChange={this.changePassword} required />
      </label>
      <label>
        Email Address
        <input placeholder="email" type="email" onChange={this.changeEmail} required />
      </label>
      <button type="submit">Register</button>
    </form>
  )
}
RegisterForm.contextTypes = {
  store: PropTypes.object,
  router: PropTypes.object,
};

export default RegisterForm;

