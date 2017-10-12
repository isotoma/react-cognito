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

  login: (creds, attributes, groups) => ({
    type: 'COGNITO_LOGIN',
    creds,
    groups,
    attributes,
  }),

  refresh: user => ({
    type: 'COGNITO_REFRESH',
    user,
  }),

  logout: () => ({
    type: 'COGNITO_LOGOUT',
  }),

  partialLogout: () => ({
    type: 'COGNITO_PARTIAL_LOGOUT',
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

  emailVerificationFailed: (user, error) => ({
    type: 'COGNITO_EMAIL_VERIFICATION_FAILED',
    user,
    error,
  }),

  beginPasswordResetFlow: (user, error) => ({
    type: 'COGNITO_BEGIN_PASSWORD_RESET_FLOW',
    user,
    error,
  }),

  continuePasswordResetFlow: user => ({
    type: 'COGNITO_CONTINUE_PASSWORD_RESET_FLOW',
    user,
  }),

  finishPasswordResetFlow: error => ({
    type: 'COGNITO_FINISH_PASSWORD_RESET_FLOW',
    error,
  }),

  updateAttributes: attributes => ({
    type: 'COGNITO_UPDATE_USER_ATTRIBUTES',
    attributes,
  }),

  confirmationRequired: (user, email) => ({
    type: 'COGNITO_USER_UNCONFIRMED',
    user,
    email,
  }),

  confirmFailed: (user, error) => ({
    type: 'COGNITO_USER_CONFIRM_FAILED',
    user,
    error,
  }),

  clearCache: () => ({
    type: 'COGNITO_CLEAR_CACHE',
  }),
};

export { Action };
