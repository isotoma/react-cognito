
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

export {
  changePassword,
  buildLogins,
};
