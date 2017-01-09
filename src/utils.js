
import { CognitoIdentityCredentials } from 'aws-cognito-sdk';
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

const postLogin = user =>
  new Promise((resolve) => {
    getUserAttributes(user).then((attributes) => {
      if (attributes.email_verified !== 'true') {
        sendAttributeVerificationCode(user, 'email').then((required) => {
          if (required) {
            resolve(Action.emailVerificationRequired(user, attributes));
          } else {
            // not entirely sure how we could end up here, but the API allows it
            resolve(Action.login(user, attributes));
          }
        }, (error) => {
          resolve(Action.emailVerificationFailed(user, error, attributes));
        });
      } else {
        resolve(Action.login(user, attributes));
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
          const loginDomain = `cognito-idp.${config.region}.amazonaws.com`;
          const loginUrl = `${loginDomain}/${config.userPool}`;
          const username = user.getUsername();
          const identityCredentials = {
            IdentityPoolId: config.identityPool,
            Logins: {},
            LoginId: username, // https://github.com/aws/aws-sdk-js/issues/609
          };
          identityCredentials.Logins[loginUrl] = session.getIdToken().getJwtToken();
          AWSCognito.config.credentials = new CognitoIdentityCredentials(identityCredentials);
          AWSCognito.config.credentials.refresh((error) => {
            if (error) {
              resolve(Action.loginFailure(user, error.message));
            } else {
              resolve(postLogin(user));
            }
          });
        }
      });
    } else {
      reject();
    }
  });

const updateAttributes = (user, attributes) =>
  new Promise((resolve, reject) => {
    const attributeList = Object.keys(attributes).map(key => ({
      Name: key,
      Value: attributes[key],
    }));
    user.updateAttributes(attributeList, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(Action.updateAttributes(attributes));
      }
    });
  });

export { changePassword, postLogin, performLogin, updateAttributes };
