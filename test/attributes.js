import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {
  sendAttributeVerificationCode,
} from '../src/attributes';

chai.use(chaiAsPromised);
const expect = chai.expect;

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
