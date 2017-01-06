

import { emailVerificationRequired, emailVerificationFailed, login, setUserAttributes } from './actions';

const sendAttributeVerificationCode = (user, attribute) =>
  new Promise((resolve, reject) => {
    user.getAttributeVerificationCode(attribute, {
      onSuccess: () => resolve(false),
      inputVerificationCode: () => resolve(true),
      onFailure: error => reject(error.message),
    });
  });

const getUserAttributes = user =>
  new Promise((resolve, reject) => {
    user.getUserAttributes((error, result) => {
      if (error) {
        reject(error.message);
      } else {
        const attributes = {};
        for (let i = 0; i < result.length; i += 1) {
          const name = result[i].getName();
          const value = result[i].getValue();
          attributes[name] = value;
        }
        resolve(attributes);
      }
    });
  });

const postLoginDispatch = (user, dispatch) =>
  getUserAttributes(user).then((attributes) => {
    dispatch(setUserAttributes(attributes));
    return attributes;
  }).then((attributes) => {
    if (attributes.email_verified !== 'true') {
      sendAttributeVerificationCode(user, 'email').then((required) => {
        if (required) {
          dispatch(emailVerificationRequired(user));
        } else {
          // not entirely sure how we could end up here, but the API allows it
          dispatch(login(user));
        }
      }, (error) => {
        dispatch(emailVerificationFailed(user, error));
      });
    } else {
      dispatch(login(user));
    }
  });

export { postLoginDispatch };
