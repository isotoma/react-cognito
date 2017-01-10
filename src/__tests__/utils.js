import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import { CognitoIdentityServiceProvider } from 'aws-cognito-sdk';
import { sendAttributeVerificationCode, authenticate } from '../utils';

chai.use(chaiAsPromised);
const expect = chai.expect;

sinon.stub(CognitoIdentityServiceProvider.CognitoUser, 'authenticateUser', (creds, f) => {
  switch (creds.result) {
    case 'success':
      f.onSuccess();
      break;
    case 'failure':
      f.onFailure('failed');
      break;
    case 'mfa':
      f.mfaRequired();
      break;
    case 'newpass':
      f.newPasswordRequired();
      break;
    default:
      break;
  }
});

describe('sendAttributeVerificationCode', () => {
  it('should return false on success', () => {
    const u = {
      getAttributeVerificationCode: (a, f) => f.onSuccess(),
    };
    expect(sendAttributeVerificationCode(u, '')).to.eventually.equal(false);
  });
});

describe('authenticate', () => {
  it('should return a loginFailure action for failed passwords', () => {
    const pool = {};
    expect(authenticate('failure', '', pool, {})).to.eventually.equal({
      type: 'COGNITO_LOGIN_FAILURE',
      user: {},
      attributes: {},
    });
  });
});
