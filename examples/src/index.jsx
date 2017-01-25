import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';
import {
  cognito,
  createGuard,
  PasswordReset,
  performLogin,
  setupCognito,
} from 'react-cognito';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import Dashboard from './Dashboard';
import ChangePasswordForm from './ChangePasswordForm';
import PasswordResetForm from './PasswordResetForm';
import UpdateEmailForm from './UpdateEmailForm';
import RegisterForm from './RegisterForm';
import config from '../config.json';

const reducers = combineReducers({
  cognito,
});

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

setupCognito(store, config);

// this attempts to retrieve the user from local storage and establish
// a new session for them
const state = store.getState();

const guard = createGuard(store, '/forbidden');

const changePassword = () => (
  <div>
    <ChangePasswordForm />
    <Link to="/">Home</Link>
  </div>
);

const updateEmail = () => (
  <div>
    <UpdateEmailForm />
    <Link to="/">Home</Link>
  </div>
);

const passwordReset = () => (
  <PasswordReset>
    <PasswordResetForm/>
  </PasswordReset>
);

const registerForm = () => (
  <div>
    <p>Complete this form</p>
    <RegisterForm />
    <Link to="/">Home</Link>
  </div>
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route
            path="/change_password"
            component={changePassword}
            onEnter={guard()}
          />
          <Route
            path="/reset"
            component={passwordReset}
            onEnter={guard({ loggedIn: false })}
          />
          <Route
            path="/change_email"
            component={updateEmail}
            onEnter={guard()}
          />
          <Route
            path="/register"
            component={registerForm}
            onEnter={guard({ loggedIn: false })}
          />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
};

// we defer rendering the application until we've fetched the user
// from local storage and potentially updated their local state
performLogin(state.cognito.user, state.cognito.config).then(
  store.dispatch, render).then(render);
