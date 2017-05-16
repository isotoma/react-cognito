import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class PasswordResetForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      code: '',
      password: '',
      message: '',
      error: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.setPassword(this.state.username, this.state.code, this.state.password)
      .then(() => this.setState({
        message: 'Password reset',
        error: '',
      }))
      .catch((err) => this.setState({
        message: '',
        error: err.message,
      }));
  }

  sendVerificationCode = (event) => {
    event.preventDefault();
    this.props.sendVerificationCode(this.state.username)
      .then(() => this.setState({
        message: 'Verification code sent',
        error: '',
      }))
      .catch((err) => {
        if (err.code === 'UserNotFoundException') {
          this.setState({ error: 'User not found' });
        } else {
          this.setState({ error: err.message })
        }
      });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  changeCode = (event) => {
    this.setState({ code: event.target.value });
  }

  changeUsername =(event) => {
    this.setState({ username: event.target.value });
  }

  render = () => (
    <div>
      <div>{this.state.error}</div>
      <div>{this.state.message}</div>
      <form onSubmit={this.sendVerificationCode}>
        <label>
          Username
          <input type="text" placeholder="username" value={this.state.username} onChange={this.changeUsername} required />
        </label>
        <button type="submit">Send verification code</button>
      </form>
      <form onSubmit={this.onSubmit}>
        <label>
          Verification code
          <input placeholder="code" onChange={this.changeCode} required />
        </label>
        <label>
          Password
          <input placeholder="new password" onChange={this.changePassword} required />
        </label>
        <button type="submit">Set new password</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  )
}
PasswordResetForm.propTypes = {
  error: PropTypes.string,
  username: PropTypes.string,
  sendVerificationCode: PropTypes.func,
  setPassword: PropTypes.func,
};
export default PasswordResetForm;
