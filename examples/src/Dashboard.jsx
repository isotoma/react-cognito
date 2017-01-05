import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const BaseDashboard = ({ user }) => {
  if (user) {
    return (
      <div>
        <p>logged in as {user.getUsername()}</p>
        <Link to="/auth/logout">Log out</Link>
      </div>
    );
  } else {
    return (
      <div>
        <p>not logged in</p>
        <Link to="/auth/login">Log in</Link>
      </div>
    );
  }
};
BaseDashboard.propTypes = {
  user: PropTypes.any,
};

const mapStateToProps = state => ({
  user: state.cognito.user,
});


const Dashboard = connect(mapStateToProps, null)(BaseDashboard);

export default Dashboard;
