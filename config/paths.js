/* global __dirname, require, module */
const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // examples
  docs: path.resolve(__dirname, '../docs'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
};
