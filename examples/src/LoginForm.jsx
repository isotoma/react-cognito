import React from 'react';

const LoginForm = ({ onSubmit, changeUsername, changePassword }) => (
  <form onSubmit={onSubmit}>
    <label>
      Username
      <input placeholder="Username" onChange={changeUsername} required />
    </label>
    <label>
      Password
      <input placeholder="Password" onChange={changePassword} type="password" required />
    </label>
    <button type="submit">Sign in</button>
  </form>
);
LoginForm.propTypes = {
  onSubmit: React.PropTypes.func,
  changeUsername: React.PropTypes.func,
  changePassword: React.PropTypes.func,
};

export default LoginForm;
