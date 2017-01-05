import React, { PropTypes } from 'react';

export const LogoutButton = ({ onClick }) => (
  <button onClick={onClick}>Log out</button>
);
LogoutButton.propTypes = {
  onClick: PropTypes.func,
};
