import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Login, Logout, cognito, configure } from 'react-cognito';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import LoginForm from './LoginForm.jsx';
import LogoutButton from './LogoutButton.jsx';

const store = createStore(combineReducers({
  cognito,
}));

store.dispatch(configure({
  region: 'eu-west-1',
  userPool: 'eu-west-1_4bpnxxQKX',
  identityPool: 'eu-west-1:3e151c70-ad45-4e36-8b87-f0125da6c13e',
  clientId: '7oc1qboh1jldlrd929ksv7cgta',
}));

const onSuccess = (result) => {
  console.log('success');
  console.log(result);
};

const onFailure = (error) => {
  console.log(error);
};

const onMfaRequired = (result) => {
  console.log('MFA Required');
  console.log(result);
};

const onNewPasswordRequired = (result) => {
  console.log('New password required');
  console.log(result);
};

const postLogout = () => {
  browserHistory.push('/');
};

const loginForm = () => (
  <Login
    onSuccess={onSuccess}
    onFailure={onFailure}
    onMfaRequired={onMfaRequired}
    onNewPasswordRequired={onNewPasswordRequired}
  >
    <LoginForm />
  </Login>
);

const logoutButton = () => (
  <Logout onSuccess={postLogout}>
    <LogoutButton />
  </Logout>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="/auth/logout" component={logoutButton} />
        <Route path="/auth/login" component={loginForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
