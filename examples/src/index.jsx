import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route, IndexRoute, browserHistory } from 'react-router';
import {
  cognito,
  configure,
  createGuard,
  ForgottenPassword,
  performLogin,
} from 'react-cognito';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import Dashboard from './Dashboard';
import ChangePasswordForm from './ChangePasswordForm';
import ForgottenPasswordForm from './ForgottenPasswordForm';

const reducers = combineReducers({
  cognito,
});

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(configure({
  region: 'eu-west-1',
  userPool: 'eu-west-1_4bpnxxQKX',
  identityPool: 'eu-west-1:3e151c70-ad45-4e36-8b87-f0125da6c13e',
  clientId: '7oc1qboh1jldlrd929ksv7cgta',
}));

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

const forgottenPassword = () => (
  <ForgottenPassword>
    <ForgottenPasswordForm />
  </ForgottenPassword>
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
            onEnter={guard({ loggedIn: true })}
          />
          <Route
            path="/forgotten_password"
            component={forgottenPassword}
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
  store.dispatch, render).then(
  render);
