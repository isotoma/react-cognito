import baseConfig, { options } from './base.config';

export default {
  ...baseConfig,

  entry: {
    'react-cognito': './src/index.js',
  },

  output: {
    path: './dist',
    filename: options.optimizeMinimize ? '[name].min.js' : '[name].js',
    library: 'ReactCognito',
    libraryTarget: 'umd',
  },

  externals: [
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
      'amazon-cognito-identity-js': {
        root: 'AWSCognito',
        commonjs2: 'amazon-cognito-identity-js',
        commonjs: 'amazon-cognito-identity-js',
        amd: 'amazon-cognito-identity-js',
      },
    }
  ],
};
