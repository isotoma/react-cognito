
const Action = {

  configure: config => ({
    type: 'COGNITO_CONFIGURE',
    config,
  }),

  login: (user, attributes) => ({
    type: 'COGNITO_LOGIN',
    user,
    attributes,
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

  emailVerificationRequired: (user, attributes) => ({
    type: 'COGNITO_EMAIL_VERIFICATION_REQUIRED',
    user,
    attributes,
  }),

  emailVerificationFailed: (user, error, attributes) => ({
    type: 'COGNITO_EMAIL_VERIFICATION_FAILED',
    user,
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

  confirmationRequired: user => ({
    type: 'COGNITO_USER_UNCONFIRMED',
    user,
  }),

};

export { Action };
