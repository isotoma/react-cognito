import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials } from 'aws-cognito-sdk';
import { Action } from './actions';
import { mkAttrList, sendAttributeVerificationCode } from './attributes';
import { buildLogins } from './utils';

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

const refreshIdentityCredentials = (username, jwtToken, config) =>
  new Promise((resolve, reject) => {
    const logins = buildLogins(username, jwtToken, config);
    const creds = new CognitoIdentityCredentials(logins);
    creds.refresh((error) => {
      if (error) {
        reject(error.message);
      } else {
        resolve(creds);
      }
    });
  });

const performLogin = (user, config) =>
  new Promise((resolve, reject) => {
    if (user != null) {
      user.getSession((err, session) => {
        if (err) {
          resolve(Action.loginFailure(user, err.message));
        } else {
          const jwtToken = session.getIdToken().getJwtToken();
          const username = user.getUsername();
          refreshIdentityCredentials(username, jwtToken, config).then(
            creds => resolve(Action.login(creds)),
            message => resolve(Action.loginFailure(user, message)));
        }
      });
    } else {
      reject('user is null');
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
 * @param {object} config - the react-cognito config
 * @return {Promise<object>} - a promise that resolves an action to be dispatched
 *
*/
const authenticate = (username, password, userPool) =>
  new Promise((resolve) => {
    const creds = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const user = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    user.authenticateUser(creds, {
      onSuccess: () => resolve(Action.authenticated(user)),
      onFailure: (error) => {
        if (error.code === 'UserNotConfirmedException') {
          resolve(Action.confirmationRequired(user));
        } else {
          resolve(Action.loginFailure(user, error.message));
        }
      },
      mfaRequired: () => resolve(Action.mfaRequired(user)),
      newPasswordRequired: () => resolve(Action.newPasswordRequired(user)),
    });
  });

const registerUser = (userPool, config, username, password, attributes) =>
  new Promise((resolve, reject) =>
    userPool.signUp(username, password, mkAttrList(attributes), null, (err, result) => {
      if (err) {
        reject(err.message);
      } else if (result.userConfirmed === false) {
        resolve(Action.confirmationRequired(result.user));
      } else {
        resolve(authenticate(username, password, userPool, config));
      }
    }));


export {
  authenticate,
  performLogin,
  registerUser,
  emailVerificationFlow,
};
