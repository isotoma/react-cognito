import webpack from 'webpack';
import yargs from 'yargs';

export const options = yargs
  .alias('p', 'optimize-minimize')
  .alias('d', 'debug')
  .option('port', {
    default: '8080',
    type: 'string'
  })
  .argv;

export const jsLoader = 'babel?cacheDirectory';

const baseConfig = {
  entry: undefined,

  output: undefined,

  externals: undefined,

  module: {
    preLoaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader'}
    ],
    loaders: [
      { test: /\.js/, loader: jsLoader, exclude: /node_modules/ }
    ],
    resolve: {
      alias: {
        'aws-cognito-sdk': 'node_modules/amazon-cognito-identity-js/dist/aws-cognito-sdk.js',
      },
      extensions: ['', '.js', '.jsx'],
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(options.optimizeMinimize ? 'production' : 'development')
      }
    })
  ]
};

if (options.optimizeMinimize) {
  baseConfig.devtool = 'source-map';
}

export default baseConfig;
