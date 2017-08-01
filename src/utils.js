import { util as AWSutil } from 'aws-sdk/global';

/**
 * Change a user's password
 * @param {object} user - the cognito user object
 * @param {string} oldPassword - the current password
 * @param {string} newPassword - the new password
*/
const changePassword = (user, oldPassword, newPassword) =>
  new Promise((resolve, reject) =>
    user.changePassword(oldPassword, newPassword, (err, result) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(result);
      }
    }));

/**
 * builds the federated identity pool login structure
 * @param {string} username - the username of the user
 * @param {string} jwtToken - a JWT Token from the session
 * @param {object} config - the cognito react config object
*/
const buildLogins = (username, jwtToken, config) => {
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

/**
 * Decode a jwtToken to check for cognito:groups
 * @param {string} jwtToken - a JWT Token from the session
 */
const getGroups = (jwtToken) => {
  const payload = jwtToken.split('.')[1];
  const decodedToken = JSON.parse(AWSutil.base64.decode(payload).toString('utf8'));
  // decodedToken['cognito:groups'] can be undefined if user is in no groups
  if (!decodedToken['cognito:groups']) {
    return [];
  }
  return decodedToken['cognito:groups'];
};

export {
  changePassword,
  buildLogins,
  getGroups,
};
