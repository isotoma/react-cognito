/** 
 * container for all the actions
*/
const Action = {

  configure: config => ({
    type: 'COGNITO_CONFIGURE',
    config,
  }),

  authenticated: user => ({
    type: 'COGNITO_AUTHENTICATED',
    user,
  }),

  loggingIn: attributes => ({
    type: 'COGNITO_LOGGING_IN',
    attributes,
  }),

  login: creds => ({
    type: 'COGNITO_LOGIN',
    creds,
  }),

  logout: () => ({
    type: 'COGNITO_LOGOUT',
  }),

  loginFailure: (user, error) => ({
    type: 'COGNITO_LOGIN_FAILURE',
    user,
    error,
  }),

  mfaRequired: user => ({
    type: 'COGNITO_LOGIN_MFA_REQUIRED',
    user,
  }),

  newPasswordRequired: user => ({
    type: 'COGNITO_LOGIN_NEW_PASSWORD_REQUIRED',
    user,
  }),

  newPasswordRequiredFailure: (user, error) => ({
    type: 'COGNITO_NEW_PASSWORD_REQUIRED_FAILURE',
    user,
    error,
  }),

  emailVerificationRequired: attributes => ({
    type: 'COGNITO_EMAIL_VERIFICATION_REQUIRED',
    attributes,
  }),

  emailVerificationFailed: (error, attributes) => ({
    type: 'COGNITO_EMAIL_VERIFICATION_FAILED',
    error,
    attributes,
  }),

  beginForgottenPasswordFlow: (user, error) => ({
    type: 'COGNITO_BEGIN_FORGOTTEN_PASSWORD_FLOW',
    user,
    error,
  }),

  finishForgottenPasswordFlow: error => ({
    type: 'COGNITO_FINISH_FORGOTTEN_PASSWORD_FLOW',
    error,
  }),

  updateAttributes: attributes => ({
    type: 'COGNITO_UPDATE_USER_ATTRIBUTES',
    attributes,
  }),

  confirmationRequired: (user, error) => ({
    type: 'COGNITO_USER_UNCONFIRMED',
    user,
    error,
  }),

};

export { Action };
