  
import { Action } from './actions';

/**
 * Request that a verification code is sent by email or SMS to verify
 * an attribute
 * @param {object} user - the cognito user object
 * @param {string} attribute - the attribute name
*/
const sendAttributeVerificationCode = (user, attribute) =>
  new Promise((resolve, reject) => {
    user.getAttributeVerificationCode(attribute, {
      onSuccess: () => resolve(false),
      inputVerificationCode: () => resolve(true),
      onFailure: error => reject(error.message),
    });
  });

/**
 * Fetches the user attributes from Cognito, and turns them into
 * an object
 * @param {object} user - the cognito user object
 * @returns {Promise} resolves with the attributes or rejects with an error message
*/
const getUserAttributes = user =>
  new Promise((resolve, reject) =>
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
    }),
  );

const mkAttrList = attributes =>
  Object.keys(attributes).map(key => ({
    Name: key,
    Value: attributes[key],
  }));

const updateAttributes = (user, attributes, config) =>
  new Promise((resolve, reject) => {
    const attributeList = mkAttrList(attributes);
    user.updateAttributes(attributeList, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(Action.updateAttributes(attributes));
      }
    });
  });

export {
  sendAttributeVerificationCode,
  getUserAttributes,
  updateAttributes,
  mkAttrList,
};
