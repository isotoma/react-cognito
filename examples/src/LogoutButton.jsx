import React, { PropTypes } from 'react';

const LogoutButton = ({ onClick }) => (
  <button onClick={onClick}>Log out</button>
);
LogoutButton.propTypes = {
  onClick: PropTypes.func,
};

export default LogoutButton;
