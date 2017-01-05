import React, { PropTypes } from 'react';

export class NewPasswordRequired extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  render() {
    return React.cloneElement(this.props.children, {
      changePassword: this.changePassword,
      onSubmit: this.onSubmit,
    });
  }

}
NewPasswordRequired.contextTypes = {
  store: PropTypes.object,
};
NewPasswordRequired.propTypes = {
  children: PropTypes.any,
};
