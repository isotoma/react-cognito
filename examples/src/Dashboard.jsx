import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { CognitoState, Logout, Login, NewPasswordRequired } from 'react-cognito';
import LogoutButton from './LogoutButton.jsx';
import LoginForm from './LoginForm.jsx';
import NewPasswordRequiredForm from './NewPasswordRequiredForm.jsx';

const loggedInPage = user => (
  <div>
    <p>logged in as {user.getUsername()}</p>
    <Logout>
      <LogoutButton />
    </Logout>
  </div>
);

const loggedOutPage = () => (
  <div>
    <p>not logged in</p>
    <Login>
      <LoginForm />
    </Login>
  </div>
);

const newPasswordPage = () => (
  <div>
    <p>New password required, since this is your first login</p>
    <NewPasswordRequired>
      <NewPasswordRequiredForm />
    </NewPasswordRequired>
  </div>
);

const BaseDashboard = ({ state, user }) => {
  switch (state) {
    case CognitoState.LOGGED_IN:
      return loggedInPage(user);
    case CognitoState.LOGGED_OUT:
    case CognitoState.LOGIN_FAILURE:
      return loggedOutPage();
    case CognitoState.NEW_PASSWORD_REQUIRED:
      return newPasswordPage();
    default:
      return (
        <div>
          <p>errol</p>
        </div>
      );
  }
};
BaseDashboard.propTypes = {
  user: PropTypes.object,
  state: PropTypes.string,
};

const mapStateToProps = state => ({
  state: state.cognito.state,
  user: state.cognito.user,
});


const Dashboard = connect(mapStateToProps, null)(BaseDashboard);

export default Dashboard;
