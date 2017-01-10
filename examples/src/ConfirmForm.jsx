import React, { PropTypes } from 'react';

class ConfirmForm extends React.Component {

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
      <button type="button" onClick={this.props.onResend}>Resend code</button>
      <button type="button" onClick={this.props.onCancel}>Cancel</button>

    </form>
  )
}
ConfirmForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onResend: PropTypes.func,
  error: PropTypes.string,
};

export default ConfirmForm;
