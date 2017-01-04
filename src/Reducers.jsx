
const initial = {
  user: null,
  username: "",
  seen: 'anonymous',
  userPool: null,
  config: {
    region: null,
    userPool: null,
    clientId: null,
    identityPool: null,
  }
};

export const cognito = (state = initial, action) => {
  switch(action.type) {
    case 'COGNITO_CONFIGURE':
      console.log("CONFIGURING");
      return Object.assign({}, state, {
        config: action.config
        //userPool: new CognitoUserPool({
        //  UserPoolId: action.config.userPool,
        //  ClientId: action.config.clientId,
        //})
      });
    default:
      return state;
  }
};
