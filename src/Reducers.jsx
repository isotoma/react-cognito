import { CognitoUserPool } from 'amazon-cognito-identity-js';

/* global AWSCognito */

const initial = {
  user: null,
  username: '',
  seen: 'anonymous',
  userPool: null,
  config: {
    region: null,
    userPool: null,
    clientId: null,
    identityPool: null,
  },
};

export const cognito = (state = initial, action) => {
  switch (action.type) {
    case 'COGNITO_CONFIGURE':
      AWSCognito.config.region = action.config.region;
      //AWSCognito.config.credentials = new AWSCognito.CognitoIdentityCredentials({
      //  IdentityPoolId: action.config.identityPool,
      //});
      const pool = new CognitoUserPool({
        UserPoolId: action.config.userPool,
        ClientId: action.config.clientId,
      });
      const user = pool.getCurrentUser();
      return Object.assign({}, state, {
        config: action.config,
        userPool: pool,
        user: user,
      });
    default:
      return state;
  }
};
