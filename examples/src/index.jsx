import React from 'react';
import { LoginForm, LoginFormContainer, cognito, configure } from 'react-cognito';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(combineReducers({
  cognito
}));

store.dispatch(configure({
  region: 'eu-west-1',
  userPool: 'eu-west-1_4bpnxxQKX',
  identityPool: 'eu-west-1:3e151c70-ad45-4e36-8b87-f0125da6c13e',
  clientId: '7oc1qboh1jldlrd929ksv7cgta',
}));

ReactDOM.render(
  <Provider store={store}>
    <LoginFormContainer>
      <LoginForm />
    </LoginFormContainer>
  </Provider>,
  document.getElementById('app')
);
