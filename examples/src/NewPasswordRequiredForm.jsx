import React, { PropTypes } from 'react';

class NewPasswordRequiredForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: props.error,
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.password);
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.props.error}</div>
      <label>
        Password
        <input placeholder="new password" onChange={this.changePassword} required />
      </label>
      <button type="submit">Set new password</button>
    </form>
  )
}
NewPasswordRequiredForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.string,
};

export default NewPasswordRequiredForm;
