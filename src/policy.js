import { Action } from './actions';
import { getUserAttributes } from './attributes';
import { emailVerificationFlow, performLogin } from './auth';

const enable = (store, f) => {
  store.subscribe(() => {
    const state = store.getState();
    const dispatch = store.dispatch;
    f(state, dispatch);
  });
};

const emailVerificationRequired = (state, dispatch) => {
  if (state.cognito.state === 'AUTHENTICATED') {
    const user = state.cognito.user;
    getUserAttributes(user).then((attributes) => {
      if (attributes.email_verified !== 'true') {
        emailVerificationFlow(user, attributes);
      }
      dispatch(Action.loggingIn(attributes));
    });
  }
};

const fetchAttributes = (state, dispatch) => {
  if (state.cognito.state === 'COGNITO_AUTHENTICATED') {
    const user = state.cognito.user;
    getUserAttributes(user).then((attributes) => {
      dispatch(Action.loggingIn(attributes));
    });
  }
};

const direct = (state, dispatch) => {
  if (state.cognito.state === 'AUTHENTICATED') {
    dispatch(Action.loggingIn());
  }
};

const identityPoolLogin = (state, dispatch) => {
  if (state.cognito.state === 'LOGGING_IN') {
    performLogin(state.cognito.user, state.cognito.config).then(dispatch);
  }
};

/**
 * sets up react-cognito with default policies
*/
const setupCognito = (store, config) => {
  store.dispatch(Action.configure(config));
  enable(store, emailVerificationRequired);
  enable(store, identityPoolLogin);
};

export {
  setupCognito,
  enable,
  direct,
  fetchAttributes,
  emailVerificationRequired,
  identityPoolLogin,
};
