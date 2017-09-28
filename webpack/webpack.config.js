import baseConfig, { options } from './base.config';

export default {
  ...baseConfig,

  entry: {
    'react-cognito': './src/index.js',
  },

  output: {
    path: './dist',
    filename: options.optimizeMinimize ? 'react-cognito.min.js' : 'react-cognito.js',
    library: 'ReactCognito',
    libraryTarget: 'umd',
  },
  externals: [
    /aws-sdk/,
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      redux: {
        root: 'Redux',
        commonjs: 'redux',
        commonjs2: 'redux',
        amd: 'redux',
      },
    },
    {
      'react-redux': {
        root: 'ReactRedux',
        commonjs: 'react-redux',
        commonjs2: 'react-redux',
        amd: 'react-redux',
      },
    },
    {
      'amazon-cognito-identity-js': {
        root: 'AmazonCognitoIdentity',
        commonjs2: 'amazon-cognito-identity-js',
        commonjs: 'amazon-cognito-identity-js',
        amd: 'amazon-cognito-identity-js',
      },
    }
  ],
};
