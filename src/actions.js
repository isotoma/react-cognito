
export const configure = config => ({
  type: 'COGNITO_CONFIGURE',
  config,
});

export const login = user => ({
  type: 'COGNITO_LOGIN',
  user,
});

export const logout = () => ({
  type: 'COGNITO_LOGOUT',
});
