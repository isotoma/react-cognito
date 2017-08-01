import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { CognitoState } from './states';

/* global AWS */

const initial = {
  user: null,
  cache: { // cached for post register login
    userName: null,
    email: null,
  },
  state: CognitoState.LOGGED_OUT,
  error: '',
  userPool: null,
  attributes: {},
  creds: null,
  groups: [],
  config: {
    region: null,
    userPool: null,
    clientId: null,
    identityPool: null,
  },
};

const configure = (state, action) => {
  // surprise side-effect!
  AWS.config.region = action.config.region;
  const pool = new CognitoUserPool({
    UserPoolId: action.config.userPool,
    ClientId: action.config.clientId,
  });
  const user = pool.getCurrentUser();
  return Object.assign({}, state, {
    config: action.config,
    userPool: pool,
    user,
  });
};

// sometimes we don't get the attributes in later parts of the login flow
// but lets not clobber the ones we've got if we've not got them
const addAttributes = (s, attributes) => {
  const s2 = Object.assign({}, s);
  if (attributes) {
    s2.attributes = attributes;
  }
  return s2;
};

/**
 * reducer function to be passed to redux combineReducers
 * @param {object} state
 * @param {object} action
*/

export const cognito = (state = initial, action) => {
  switch (action.type) {

    case 'COGNITO_CONFIGURE':
      return configure(state, action);

    case 'COGNITO_AUTHENTICATED':
      return Object.assign({}, state, {
        user: action.user,
        cache: {
          userName: null,
          email: null,
        },
        error: '',
        state: CognitoState.AUTHENTICATED,
      });

    case 'COGNITO_CLEAR_CACHE':
      return Object.assign({}, state, {
        cache: {
          userName: null,
          email: null,
        },
      });

    case 'COGNITO_LOGGING_IN':
      return Object.assign({}, state, {
        state: CognitoState.LOGGING_IN,
        attributes: action.attributes,
      });

    case 'COGNITO_LOGIN':
      return Object.assign({}, state, addAttributes({
        error: '',
        creds: action.creds,
        groups: action.groups,
        state: CognitoState.LOGGED_IN,
      }, action.attributes));

    case 'COGNITO_LOGOUT':
      return Object.assign({}, state, {
        user: null,
        attributes: {},
        error: '',
        creds: null,
        groups: [],
        state: CognitoState.LOGGED_OUT,
      });

    case 'COGNITO_PARTIAL_LOGOUT':
      return Object.assign({}, state, {
        user: null,
        userName: state.user.username,
        error: '',
        creds: null,
        groups: [],
        state: CognitoState.LOGGED_OUT,
      });

    case 'COGNITO_LOGIN_FAILURE':
      return Object.assign({}, state, {
        user: action.user,
        state: CognitoState.LOGGED_OUT,
        error: action.error,
      });

    case 'COGNITO_LOGIN_MFA_REQUIRED':
      return Object.assign({}, state, {
        user: action.user,
        error: '',
        state: CognitoState.MFA_REQUIRED,
      });

    case 'COGNITO_LOGIN_NEW_PASSWORD_REQUIRED':
      return Object.assign({}, state, {
        user: action.user,
        error: '',
        state: CognitoState.NEW_PASSWORD_REQUIRED,
      });

    case 'COGNITO_USER_UNCONFIRMED':
      return Object.assign({}, state, {
        user: action.user,
        state: CognitoState.CONFIRMATION_REQUIRED,
        cache: {
          userName: action.user.username,
          email: action.email ? action.email : state.cache.email,
        },
      });

    case 'COGNITO_USER_CONFIRM_FAILED':
      return Object.assign({}, state, {
        user: action.user,
        state: CognitoState.CONFIRMATION_REQUIRED,
        error: action.error,
      });

    case 'COGNITO_NEW_PASSWORD_REQUIRED_FAILURE':
      return Object.assign({}, state, {
        error: action.error,
        state: CognitoState.NEW_PASSWORD_REQUIRED,
      });

    case 'COGNITO_EMAIL_VERIFICATION_REQUIRED':
      return Object.assign({}, state, addAttributes({
        error: '',
        state: CognitoState.EMAIL_VERIFICATION_REQUIRED,
      }, action.attributes));

    case 'COGNITO_EMAIL_VERIFICATION_FAILED':
      return Object.assign({}, state, addAttributes({
        error: action.error,
        state: CognitoState.EMAIL_VERIFICATION_REQUIRED,
      }, action.attributes));

    case 'COGNITO_BEGIN_PASSWORD_RESET_FLOW':
      return Object.assign({}, state, {
        error: action.error,
      });

    case 'COGNITO_CONTINUE_PASSWORD_RESET_FLOW':
      return state;

    case 'COGNITO_FINISH_PASSWORD_RESET_FLOW':
      return state;

    // this moves us into the AUTHENTICATED state, potentially causing
    // a number of side-effects. this is so we can re-verify the email
    // address if we have to
    case 'COGNITO_UPDATE_USER_ATTRIBUTES':
      return Object.assign({}, state, {
        attributes: Object.assign({}, state.attributes, action.attributes),
        state: CognitoState.AUTHENTICATED,
      });

    default:
      return state;
  }
};
