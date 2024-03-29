/* global require, module */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

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

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8889,
    watchFiles: [paths.src]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: paths.src + '/template.html',
      minify: true,
      inject: 'body',
    })
  ],
});
