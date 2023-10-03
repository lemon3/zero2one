/* global require, module */
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    zero2one: ['@/zero2one.js'],
  },

  output: {
    publicPath: '',
    path: paths.build,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html',
      inject: 'body',
    })
  ],

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
};
