var path = require('path');
var util = require('util');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

const pkg = require('./package.json');

module.exports = {
  // devtool: 'source-map',
  entry: [
    'whatwg-fetch',
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
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
