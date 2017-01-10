import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { sendAttributeVerificationCode } from '../utils';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('sendAttributeVerificationCode', () => {
  const successUser = {
    getAttributeVerificationCode: (attribute, funcs) => {
      funcs.onSuccess();
    },
  };

  it('should return false on success', () =>
    expect(sendAttributeVerificationCode(successUser, '')).to.eventually.equal(false),
  );
});

