import baseConfig, { options } from './base.config';

export default {
  ...baseConfig,

  entry: {
    'bundle': './examples/src/index.jsx',
  },

  output: {
    path: './examples/htdocs/dist',
    filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
  },

  resolve: {
    modulesDirectories: ['dist'],
    extensions: ['', '.js', '.jsx'],
  },

  externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      redux: 'Redux',
      'react-redux': 'ReactRedux',
      'react-router': 'ReactRouter',
      'aws-sdk': 'AWS',
      'amazon-cognito-identity-js': 'AmazonCognitoIdentity',

  },
};
