import React, { PropTypes } from 'react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      error: '',
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password)
      .catch((error) => this.setState({ error: error.message }));
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.state.error}</div>
      <label>
        Username
        <input placeholder="Username" value={this.state.username} onChange={this.changeUsername} required />
      </label>
      <label>
        Password
        <input placeholder="Password" onChange={this.changePassword} type="password" required />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
};

export default LoginForm;
