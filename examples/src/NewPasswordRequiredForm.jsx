import React from 'react';

const NewPasswordRequiredForm = ({ onSubmit, changePassword }) => (
  <form onSubmit={onSubmit}>
    <label>
      Password
      <input placeholder="Password" onChange={changePassword} required />
    </label>
    <button type="submit">Sign in</button>
  </form>
);
NewPasswordRequiredForm.propTypes = {
  onSubmit: React.PropTypes.func,
  changePassword: React.PropTypes.func,
};

export default NewPasswordRequiredForm;
