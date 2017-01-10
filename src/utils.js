
import { CognitoIdentityServiceProvider, CognitoIdentityCredentials } from 'aws-cognito-sdk';
import { Action } from './actions';

// could perhaps be done with an import, but I am uncertain
/* global AWSCognito */
const changePassword = (user, oldPassword, newPassword) =>
  new Promise((resolve, reject) =>
    user.changePassword(oldPassword, newPassword, (err, result) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(result);
      }
    }));

const sendAttributeVerificationCode = (user, attribute) =>
  new Promise((resolve, reject) => {
    user.getAttributeVerificationCode(attribute, {
      onSuccess: () => resolve(false),
      inputVerificationCode: () => resolve(true),
      onFailure: error => reject(error.message),
    });
  });

const getUserAttributes = user =>
  new Promise((resolve, reject) => {
    user.getUserAttributes((error, result) => {
      if (error) {
        reject(error.message);
      } else {
        const attributes = {};
        for (let i = 0; i < result.length; i += 1) {
          const name = result[i].getName();
          const value = result[i].getValue();
          attributes[name] = value;
        }
        resolve(attributes);
      }
    });
  });

const emailVerificationFlow = (user, attributes) =>
  new Promise((resolve) => {
    sendAttributeVerificationCode(user, 'email').then((required) => {
      if (required) {
        resolve(Action.emailVerificationRequired(user, attributes));
      } else {
        // dead end?
        resolve(Action.login(user, attributes));
      }
    }, (error) => {
      // some odd classes of error here
      resolve(Action.emailVerificationFailed(user, error, attributes));
    });
  });

const emailVerificationIsMandatory = config =>
  !(config && config.mandatoryEmailVerification === false);

const loginOrVerifyEmail = (user, config) =>
  new Promise((resolve) => {
    // we default to mandatory
    getUserAttributes(user).then((attributes) => {
      if (emailVerificationIsMandatory(config) && (attributes.email_verified !== 'true')) {
        resolve(emailVerificationFlow(user, attributes));
      } else {
        resolve(Action.login(user, attributes));
      }
    });
  });

const buildIdentityCredentials = (username, jwtToken, config) => {
  const loginDomain = `cognito-idp.${config.region}.amazonaws.com`;
  const loginUrl = `${loginDomain}/${config.userPool}`;
  const creds = {
    IdentityPoolId: config.identityPool,
    Logins: {},
    LoginId: username, // https://github.com/aws/aws-sdk-js/issues/609
  };
  creds.Logins[loginUrl] = jwtToken;
  return creds;
};

const refreshIdentityCredentials = (username, jwtToken, config) =>
  new Promise((resolve, reject) => {
    const creds = buildIdentityCredentials(username, jwtToken, config);
    AWSCognito.config.credentials = new CognitoIdentityCredentials(creds);
    AWSCognito.config.credentials.refresh((error) => {
      if (error) {
        reject(error.message);
      } else {
        resolve();
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
            () => resolve(loginOrVerifyEmail(user, config)),
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
 *
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
 *   authenticate(...).then(dispatch);
 *
*/
const authenticate = (username, password, userPool, config) =>
  new Promise((resolve) => {
    const creds = new CognitoIdentityServiceProvider.AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const user = new CognitoIdentityServiceProvider.CognitoUser({
      Username: username,
      Pool: userPool,
    });

    user.authenticateUser(creds, {
      onSuccess: () => resolve(performLogin(user, config)),
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

const mkAttrList = attributes =>
  Object.keys(attributes).map(key => ({
    Name: key,
    Value: attributes[key],
  }));

const updateAttributes = (user, attributes, config) =>
  new Promise((resolve, reject) => {
    const attributeList = mkAttrList(attributes);
    user.updateAttributes(attributeList, (err) => {
      if (err) {
        reject(err.message);
      } else if (emailVerificationIsMandatory(config)) {
        resolve(loginOrVerifyEmail(user, config));
      } else {
        resolve(Action.updateAttributes(attributes));
      }
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
  sendAttributeVerificationCode,
  authenticate,
  registerUser,
  changePassword,
  loginOrVerifyEmail,
  performLogin,
  updateAttributes,
};
