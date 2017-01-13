import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import assert from 'assert';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { CognitoIdentityCredentials } from 'aws-cognito-sdk';
import {
  emailVerificationIsMandatory,
  sendAttributeVerificationCode,
  authenticate,
} from '../src/utils';

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

/** @test {sendAttributeVerificationCode} */
describe('sendAttributeVerificationCode', () => {
  /** @test {sendAttributeVerificationCode#test success} */
  it('should return false on success', () => {
    const u = {
      getAttributeVerificationCode: (a, f) => f.onSuccess(),
    };
    return expect(sendAttributeVerificationCode(u, '')).to.eventually.equal(false);
  });
});

// cannot stub performLogin, and useful to test entire orchestration
describe('authenticate and performLogin', () => {
  const pool = {};
  const a = username => authenticate(username, '', pool, {});

  it('should return a loginFailure action for failed passwords', () =>
    expect(a('failure-bad-creds'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_LOGIN_FAILURE'));
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
  it('should return loginFailure action when session error', () =>
    expect(a('session-error'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_LOGIN_FAILURE'));
  it('should return loginFailure action emailVerificationRequired if verification required', () =>
    expect(a('email-verification-required'))
    .to.eventually.have.property('type')
    .to.equal('COGNITO_EMAIL_VERIFICATION_REQUIRED'));
});

describe('emailVerificationIsMandatory', () => {
  it('should return true when config is undefined', () =>
    expect(emailVerificationIsMandatory()).to.equal(true));
  it('should return true when mandatory is true', () =>
    expect(emailVerificationIsMandatory({ mandatoryEmailVerification: true }))
    .to.equal(true));
  it('should return false when mandatory is false', () =>
    expect(emailVerificationIsMandatory({ mandatoryEmailVerification: false }))
    .to.equal(false));
});
