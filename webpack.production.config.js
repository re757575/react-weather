const path = require('path');
const util = require('util');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const pkg = require('./package.json');

module.exports = {
  // devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[chunkhash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: false }),
    new CopyWebpackPlugin(
      [
        { from: 'public/' }
      ],
      {
        ignore: ['.DS_Store']
      }
    ),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
      minChunks: Infinity,
      filename: '[name].[chunkhash:8].js'
    }),
    new HtmlWebpackPlugin({
      title: util.format('React Weather %s', pkg.version),
      filename: 'index.html',
      mobile: true,
      template: 'public/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new OfflinePlugin({
      excludes: ['images/*'],
      ServiceWorker: { events: true }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};
