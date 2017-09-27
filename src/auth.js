import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials } from 'aws-sdk/global';
import { Action } from './actions';
import { getUserAttributes, mkAttrList, sendAttributeVerificationCode } from './attributes';
import { buildLogins, getGroups } from './utils';

/**
 * sends the email verification code and transitions to the correct state
 * @param {object} user - the CognitoUser object
 * @param {object} attributes - the attributes dictionary
 * @return {Promise<object>} a promise that resolves to a redux action
*/
const emailVerificationFlow = (user, attributes) =>
  new Promise(resolve =>
    sendAttributeVerificationCode(user, 'email').then((required) => {
      if (required) {
        resolve(Action.emailVerificationRequired(attributes));
      } else {
        // dead end?
        resolve(Action.loggingIn(attributes));
      }
    }, (error) => {
      // some odd classes of error here
      resolve(Action.emailVerificationFailed(error, attributes));
    }));

/**
 * logs in to the federated identity pool with a JWT
 * @param {string} username - the username
 * @param {string} jwtToken - a token from the session
 * @param {object} config - the react-cognito config
 * @return {Promise<object>} a promise that resolves to the federated identity credentials
*/
const refreshIdentityCredentials = (username, jwtToken, config) =>
  new Promise((resolve, reject) => {
    const logins = buildLogins(username, jwtToken, config);
    const creds = new CognitoIdentityCredentials(logins, { region: config.region });
    creds.refresh((error) => {
      if (error) {
        reject(error.message);
      } else {
        resolve(creds);
      }
    });
  });

/**
 * establishes a session with the user pool, and logs into the federated identity
 * pool using a token from the session
 * @param {object} user - the CognitoUser object
 * @param {object} config -the react-cognito config
 * @return {Promise<object>} an action to be dispatched
*/
const performLogin = (user, config, group) =>
  new Promise((resolve, reject) => {
    if (user === null) {
      resolve(Action.logout());
    } else {
      user.getSession((err, session) => {
        if (err) {
          resolve(Action.loginFailure(user, err.message));
        } else {
          const jwtToken = session.getIdToken().getJwtToken();
          const groups = getGroups(jwtToken);
          if (group && !groups.includes(group)) {
            return resolve(Action.loginFailure(user, 'Insufficient privilege'));
          }

          const username = user.getUsername();
          refreshIdentityCredentials(username, jwtToken, config).then(
            (creds) => {
              getUserAttributes(user).then((attributes) => {
                resolve(Action.login(creds, attributes, groups));
              });
            },
            message => resolve(Action.loginFailure(user, message)));
        }
      });
    }
  });

/**
 *
 * Authenticates with a user pool, and handles responses.
 * if the authentication is successful it then logs in to the
 * identity pool.
 *
 * returns an action depending on the outcome.  Possible actions returned
 * are:
 *
 * - login - valid user who is logged in
 * - loginFailure - failed to authenticate with user pool or identity pool
 * - mfaRequired - user now needs to enter MFA
 * - newPasswordRequired - user must change password on first login
 * - emailVerificationRequired - user must verify their email address
 * - emailVerificationFailed - email verification is required, but won't work
 *
 * Dispatch the resulting action, e.g.:
 *
 * ```
 * const { userPool, config } = state.cognito;
 * authenticate(username, password, userPool, config).then(dispatch);
 * ```
 *
 * @param {string} username - the username provided by the user
 * @param {string} password - the password provided by the user
 * @param {object} userPool - a Cognito User Pool object
 * @return {Promise<object>} - a promise that resolves an action to be dispatched
 *
*/
const authenticate = (username, password, userPool, config, dispatch) =>
  new Promise((resolve, reject) => {
    const creds = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const user = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    user.authenticateUser(creds, {
      onSuccess: () => {
        dispatch(Action.authenticated(user));
        resolve();
      },
      onFailure: (error) => {
        if (error.code === 'UserNotConfirmedException') {
          dispatch(Action.confirmationRequired(user));
          resolve();
        } else {
          dispatch(Action.loginFailure(user, error.message));
          reject(error);
        }
      },
      mfaRequired: () => {
        dispatch(Action.mfaRequired(user));
        resolve();
      },
      newPasswordRequired: () => {
        dispatch(Action.newPasswordRequired(user));
        resolve();
      },
    });
  });

/**
 * sign up this user with the user pool provided
 * @param {object} userPool - a Cognito userpool (e.g. state.cognito.userPool)
 * @param {object} config - the react-cognito config object
 * @param {string} username - the username
 * @param {string} password - the password
 * @param {object} attributes - an attributes dictionary
 * @return {Promise<object>} a promise that resolves a redux action
*/
const registerUser = (userPool, config, username, password, attributes) =>
  new Promise((resolve, reject) =>
    userPool.signUp(username, password, mkAttrList(attributes), null, (err, result) => {
      if (err) {
        reject(err.message);
      } else if (result.userConfirmed === false) {
        resolve(Action.confirmationRequired(result.user, attributes.email));
      } else {
        resolve(authenticate(username, password, userPool));
      }
    }));


export {
  authenticate,
  performLogin,
  registerUser,
  emailVerificationFlow,
};
