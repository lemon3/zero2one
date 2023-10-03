/* global require, module */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // 'eval-cheap-source-map',

  output: {
    filename: '[name].js',
    library: {
      name: 'Zero2One',
      type: 'umd',
      umdNamedDefine: true,
      export: 'default',
    },
    globalObject: 'this',
  },

  // dev server
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8889,
  },
});
