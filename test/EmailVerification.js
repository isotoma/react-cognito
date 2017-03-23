import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { verifyEmail } from '../src/EmailVerification';

chai.use(chaiAsPromised);
const expect = chai.expect;

let dispatched = undefined;

const dispatch = (action) => {
  dispatched = action;
};

const user = {
  verifyAttribute: (attributename, code, callback) => {
    if (code === 'onSuccess') {
      callback.onSuccess();
    } else if (code === 'inputVerificationCode') {
      callback.inputVerificationCode();
    } else {
      callback.onFailure(code);
    }
  },
};

/** @test {verifyEmail} */
describe('verifyEmail', () => {
  /** @test {verifyEmail#test success promise} */
  it('should return a promise that fires resolve on success', () => {
    const p = verifyEmail('onSuccess', user, dispatch);
    return expect(p.then(() => 'success', () => 'failure')).to.eventually.equal('success');
  });
  /** @test {verifyEmail#test failure promise} */
  it('should return a promise that fires resolve on success', () => {
    const p = verifyEmail({ message: 'foo' }, user, dispatch);
    return expect(p.then(() => 'success', () => 'failure')).to.eventually.equal('failure');
  });
});

