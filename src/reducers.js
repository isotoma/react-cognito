import { CognitoUserPool } from 'amazon-cognito-identity-js';

/* global AWSCognito */

const initial = {
  user: null,
  userPool: null,
  config: {
    region: null,
    userPool: null,
    clientId: null,
    identityPool: null,
  },
};

const configure = (state, action) => {
  // naughty side-effect
  AWSCognito.config.region = action.config.region;
  const pool = new CognitoUserPool({
    UserPoolId: action.config.userPool,
    ClientId: action.config.clientId,
  });
  const user = pool.getCurrentUser();
  return Object.assign({}, state, {
    config: action.config,
    userPool: pool,
    user,
  });
};

const login = (state, action) => Object.assign({}, state, {
  user: action.user,
});


const logout = state => Object.assign({}, state, {
  user: null,
});


export const cognito = (state = initial, action) => {
  switch (action.type) {
    case 'COGNITO_CONFIGURE':
      console.log("ACTION:CONFIGURE");
      return configure(state, action);
    case 'COGNITO_LOGIN':
      console.log("ACTION:LOGIN");
      return login(state, action);
    case 'COGNITO_LOGOUT':
      console.log("ACTION:LOGOUT");
      return logout(state, action);
    default:
      return state;
  }
};
