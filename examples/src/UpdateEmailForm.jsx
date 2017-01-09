import React, { PropTypes } from 'react';
import { updateAttributes } from 'react-cognito';

class UpdateEmailForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
    };
  }

  componentWillMount = () => {
    const { store } = this.context;
    const state = store.getState();
    this.setState({ email: state.cognito.attributes.email });
  }

  onSubmit = (event) => {
    const { store } = this.context;
    const state = store.getState();
    const user = state.cognito.user;
    const config = state.cognito.config;
    event.preventDefault();
    updateAttributes(user, {
      email: this.state.email,
    }, config).then(
      (action) => {
        store.dispatch(action);
        this.setState({ error: 'email changed' });
      },
      error => this.setState({ error }),
    );
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  render = () => (
    <form onSubmit={this.onSubmit}>
      <div>{this.state.error}</div>
      <label>
        Email address
        <input value={this.state.email} onChange={this.changeEmail} required />
      </label>
      <button type="submit">Update</button>
    </form>
  )
}
UpdateEmailForm.contextTypes = {
  store: PropTypes.object,
};

export default UpdateEmailForm;
