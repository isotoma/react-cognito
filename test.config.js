var path = require('path');
module.exports = {
  resolve: {
    alias: {
      'aws-cognito-sdk-real': path.resolve(__dirname, 'node_modules/amazon-cognito-identity-js/dist/aws-cognito-sdk.js'),
      'aws-cognito-sdk': path.resolve(__dirname, 'sdkshim.js'),
    },
    extensions: ['', '.js', '.jsx'],
  }
};



