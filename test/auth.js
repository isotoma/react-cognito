import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import assert from 'assert';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials } from 'aws-cognito-sdk';
import {
  authenticate,
  performLogin,
} from '../src/auth';

chai.use(chaiAsPromised);
const expect = chai.expect;

sinon.stub(CognitoIdentityCredentials.prototype, 'refresh', function f(callback) {
  const username = this.params.LoginId;
  switch (username) {
    case 'identity-pool-failure':
      callback('bad refresh in test');
      break;
    case 'success':
    case 'email-verification-required':
      callback();
      break;
    default:
      assert(false, 'unrecognised username in credentials refresh');
  }
});

const mockSession = {
  getIdToken: () => ({
    getJwtToken: () => 'jwt_token',
  }),
};

sinon.stub(CognitoUser.prototype, 'getAttributeVerificationCode', (attribute, callbacks) =>
  callbacks.inputVerificationCode(),
);

sinon.stub(CognitoUser.prototype, 'getUserAttributes', function f(callback) {
  const verified = this.username === 'email-verification-required' ? 'false' : 'true';
  callback(undefined, [{
    getName: () => 'email_verified',
    getValue: () => verified,
  }]);
});

sinon.stub(CognitoUser.prototype, 'getSession', function f(callback) {
  switch (this.username) {
    case 'session-error':
      callback(true, null);
      break;
    case 'success':
    case 'email-verification-required':
      callback(false, mockSession);
      break;
    default:
      assert(false, 'unrecognised username in getSession stub');
  }
});

sinon.stub(CognitoUser.prototype, 'authenticateUser', (creds, f) => {
  switch (creds.username) {
    case 'success':
    case 'session-error':
    case 'email-verification-required':
      f.onSuccess();
      break;
    case 'failure-bad-creds':
      f.onFailure({ code: 'NotAuthorizedException' });
      break;
    case 'failure-not-confirmed':
      f.onFailure({ code: 'UserNotConfirmedException' });
      break;
    case 'mfa':
      f.mfaRequired();
      break;
    case 'newpass':
      f.newPasswordRequired();
      break;
    default:
      assert(false, 'unrecognised username in authenticateUser stub');
      break;
  }
});

describe('performLogin', () => {
  it('should return loginFailure action when session error', () => {
    const user = new CognitoUser({
      Username: 'session-error',
      Pool: {},
    });
    expect(performLogin(user, {}))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_LOGIN_FAILURE');
  });
});

/** @test {authenticate} */
// cannot stub performLogin, and useful to test entire orchestration
describe('authenticate', () => {
  const pool = {};
  const a = username => authenticate(username, '', pool, {});

  it('should return an authenticated action on success', () =>
    expect(a('success'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_AUTHENTICATED'));

  /** @test {authenticate#failed passwords} */
  it('should return a loginFailure action for failed passwords', () =>
    expect(a('failure-bad-creds'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_LOGIN_FAILURE'));

  /** @test {authenticate#not confirmed} */
  it('should return a confirmationRequired action when not confirmed', () =>
    expect(a('failure-not-confirmed'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_USER_UNCONFIRMED'));

  it('should return an mfaRequired action when MFA is required', () =>
    expect(a('mfa'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_LOGIN_MFA_REQUIRED'));

  it('should return newPasswordRequired action when new password is required', () =>
    expect(a('newpass'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_LOGIN_NEW_PASSWORD_REQUIRED'));
});
