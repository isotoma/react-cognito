// the aws sdk does not load properly with require
// for reasons best know the the AWS dev team

window = {}
//require('aws-cognito-sdk-real');
require("./node_modules/amazon-cognito-identity-js/dist/aws-cognito-sdk.js");
Object.keys(window.AWSCognito).forEach(key => {
  exports[key] = window.AWSCognito[key];
});
window = undefined;


