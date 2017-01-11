import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import assert from 'assert';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { sendAttributeVerificationCode, authenticate } from '../utils';

chai.use(chaiAsPromised);
const expect = chai.expect;

sinon.stub(CognitoUser.prototype, 'authenticateUser', (creds, f) => {
  switch (creds.username) {
    case 'success':
      f.onSuccess();
      break;
    case 'failure-bad-creds':
      f.onFailure({ code: 'failed' });
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

describe('sendAttributeVerificationCode', () => {
  it('should return false on success', () => {
    const u = {
      getAttributeVerificationCode: (a, f) => f.onSuccess(),
    };
    return expect(sendAttributeVerificationCode(u, '')).to.eventually.equal(false);
  });
});

describe('authenticate', () => {
  const pool = {};
  const a = username => authenticate(username, '', pool, {});
  it('should return a loginFailure action for failed passwords', () =>
    expect(a('failure-bad-creds'))
      .to.eventually.have.property('type')
      .to.equal('COGNITO_LOGIN_FAILURE'),
  );
  it('should return a confirmationRequired action when not confirmed', () =>
    expect(a('failure-not-confirmed'))
      .to.eventually.have.property('type')
      .to.equal('COGNITO_USER_UNCONFIRMED'),
  );
});
