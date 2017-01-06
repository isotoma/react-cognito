import React, { PropTypes } from 'react';
import { changePassword } from 'react-cognito';

class ChangePasswordForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      oldPassword: '',
      newPassword: '',
    };
  }

  onSubmit = (event) => {
    const { store } = this.context;
    const state = store.getState();
    const user = state.cognito.user;
    event.preventDefault();
    changePassword(user, this.state.oldPassword, this.state.newPassword).then(
      () => this.setState({ error: 'Password changed' }),
      error => this.setState({ error }));
  }

  changeOldPassword = (event) => {
    this.setState({ oldPassword: event.target.value });
  }

  changeNewPassword = (event) => {
    this.setState({ newPassword: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.state.error}</div>
      <label>
        Old Password
        <input placeholder="old password" onChange={this.changeOldPassword} required />
      </label>
      <label>
        New Password
        <input placeholder="new password" onChange={this.changeNewPassword} required />
      </label>
      <button type="submit">Set new password</button>
    </form>
  )
}
ChangePasswordForm.contextTypes = {
  store: PropTypes.object,
};

export default ChangePasswordForm;
