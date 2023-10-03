/* global require, module */
const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common');

const prod = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    // mangleExports: 'size',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});

const start = {
  entry: {},
  output: {
    path: paths.build,
    clean: true
  },
};

const builds = {
  umd: merge(prod, {
    output: {
      filename: '[name].min.js',
      library: {
        name: 'Zero2One',
        type: 'umd',
        umdNamedDefine: true,
        export: 'default',
      },
      globalObject: 'this',
      // clean: true,
    },
  }),
  esm: merge(prod, {
    output: {
      filename: '[name].esm.min.js',
      library: {
        type: 'module',
      },
      globalObject: 'this',
    },
    experiments: {
      outputModule: true,
    },
  }),
};

module.exports = [
  start,

  // umd (minified)
  builds.umd,
  // umd
  merge(builds.umd, {
    output: { filename: '[name].js' },
    optimization: { minimize: false },
  }),

  // esm (minified)
  builds.esm,
  // esm
  merge(builds.esm, {
    output: { filename: '[name].esm.js' },
    optimization: { minimize: false },
  }),
];
