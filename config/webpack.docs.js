/* global require, module */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'production',

  output: {
    path: paths.docs,
    filename: '[name].min.js',
    library: {
      name: 'Zero2One',
      type: 'umd',
      umdNamedDefine: true,
      export: 'default',
    },
    globalObject: 'this',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: paths.src + '/template.html',
      minify: true,
      inject: 'body',
    }),
  ],
});
