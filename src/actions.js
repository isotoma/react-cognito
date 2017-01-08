
export const configure = config => ({
  type: 'COGNITO_CONFIGURE',
  config,
});

export const login = (user, attributes) => ({
  type: 'COGNITO_LOGIN',
  user,
  attributes,
});

export const logout = () => ({
  type: 'COGNITO_LOGOUT',
});

export const loginFailure = (user, error) => ({
  type: 'COGNITO_LOGIN_FAILURE',
  user,
  error,
});

export const mfaRequired = user => ({
  type: 'COGNITO_LOGIN_MFA_REQUIRED',
  user,
});

export const newPasswordRequired = user => ({
  type: 'COGNITO_LOGIN_NEW_PASSWORD_REQUIRED',
  user,
});

export const newPasswordRequiredFailure = (user, error) => ({
  type: 'COGNITO_NEW_PASSWORD_REQUIRED_FAILURE',
  user,
  error,
});

export const emailVerificationRequired = (user, attributes) => ({
  type: 'COGNITO_EMAIL_VERIFICATION_REQUIRED',
  user,
  attributes,
});

export const emailVerificationFailed = (user, error, attributes) => ({
  type: 'COGNITO_EMAIL_VERIFICATION_FAILED',
  user,
  error,
  attributes,
});
