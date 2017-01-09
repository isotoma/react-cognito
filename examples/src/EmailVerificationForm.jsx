import React, { PropTypes } from 'react';

class EmailVerificationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: props.error,
      verificationCode: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.verificationCode);
  }

  changeVerificationCode = (event) => {
    this.setState({ verificationCode: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.props.error}</div>
      <label>
        Verification Code
        <input placeholder="code" onChange={this.changeVerificationCode} required />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={this.props.onCancel}>Cancel</button>
    </form>
  )
}
EmailVerificationForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  error: PropTypes.string,
};

export default EmailVerificationForm;
