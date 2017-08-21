import { Action } from './actions';
import { getUserAttributes } from './attributes';
import { emailVerificationFlow, performLogin } from './auth';
import { CognitoState } from './states';

/**
 * subscribes a "policy" function to the store, and calls it
 * with the state and the dispatch function
 * @param {object} store - the redux store
 * @param {function} f - f(state, dispatch)
*/
const enable = (store, f, params) => {
  store.subscribe(() => {
    const state = store.getState();
    const dispatch = store.dispatch;
    f(state, dispatch, params);
  });
};

/**
 * requires email verification before transitioning from AUTHENTICATED
 * @param {object} state - the redux store state
 * @param {function} dispatch - the dispatch function
*/
const emailVerificationRequired = (state, dispatch) => {
  if (state.cognito.state === CognitoState.AUTHENTICATED) {
    const user = state.cognito.user;
    getUserAttributes(user).then((attributes) => {
      if (attributes.email_verified !== 'true') {
        emailVerificationFlow(user, attributes).then(dispatch);
      } else {
        dispatch(Action.loggingIn(attributes));
      }
    });
  }
};

/**
 * fetches and stores attributes before transitioning from AUTHENTICATED
 * @param {object} state - the redux store state
 * @param {function} dispatch - the dispatch function
*/
const fetchAttributes = (state, dispatch) => {
  if (state.cognito.state === CognitoState.AUTHENTICATED) {
    const user = state.cognito.user;
    getUserAttributes(user).then((attributes) => {
      dispatch(Action.loggingIn(attributes));
    });
  }
};

/**
 * transitions directly from AUTHENTICATED to LOGGING_IN
 * @param {object} state - the redux store state
 * @param {function} dispatch - the dispatch function
*/
const direct = (state, dispatch) => {
  if (state.cognito.state === CognitoState.AUTHENTICATED) {
    dispatch(Action.loggingIn());
  }
};

/**
 * logs into the single federated identity pool to transition from LOGGING_IN
 * to LOGGED_IN
 * @param {object} state - the redux store state
 * @param {function} dispatch - the dispatch function
*/
const identityPoolLogin = (state, dispatch, group) => {
  if (state.cognito.state === CognitoState.LOGGING_IN) {
    performLogin(state.cognito.user, state.cognito.config, group).then(dispatch);
  }
};

/**
 * sets up react-cognito with default policies.
*/
const setupCognito = (store, config, listeners =
  [emailVerificationRequired, identityPoolLogin]) => {
  store.dispatch(Action.configure(config));
  listeners.forEach((f) => {
    enable(store, f, config.group);
  });
  store.dispatch(Action.loggingIn({}));
};

export {
  setupCognito,
  enable,
  direct,
  fetchAttributes,
  emailVerificationRequired,
  identityPoolLogin,
};
