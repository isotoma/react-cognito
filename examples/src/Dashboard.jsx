import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CognitoState, Logout, Login } from 'react-cognito';
import LogoutButton from './LogoutButton.jsx';
import LoginForm from './LoginForm.jsx';

const BaseDashboard = ({ cognito }) => {
  switch (cognito.state) {
    case CognitoState.LOGGED_IN:
      return (
        <div>
          <p>logged in as {cognito.user.getUsername()}</p>
          <Logout>
            <LogoutButton />
          </Logout>
        </div>
      );
    case CognitoState.LOGGED_OUT:
      return (
        <div>
          <p>not logged in</p>
          <Login>
            <LoginForm />
          </Login>
        </div>
      );
    default:
      return (
        <div>
          <p>errol</p>
        </div>
      );
  }
};
BaseDashboard.propTypes = {
  cognito: PropTypes.object,
};

const mapStateToProps = state => ({
  cognito: state.cognito,
});


const Dashboard = connect(mapStateToProps, null)(BaseDashboard);

export default Dashboard;
