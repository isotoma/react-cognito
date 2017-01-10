var path = require('path');
module.exports = {
  resolve: {
    alias: {
      'aws-cognito-sdk': path.resolve(__dirname, 'node_modules/amazon-cognito-identity-js/dist/aws-cognito-sdk.js'),
    },
    extensions: ['', '.js', '.jsx'],
  }
};



