/* global __dirname */
import { resolve } from 'path';
import { defineConfig } from 'vite';
// import babel from 'vite-plugin-babel';

import banner from 'vite-plugin-banner';
import pkg from './package.json';

const origName = pkg.name;

const bannerText = `/*!
* ${origName} v${pkg.version}
* ${pkg.homepage}
*/`;

const lookupNames = {
  es: `${origName}.js`,
  cjs: `${origName}.cjs.js`,
  umd: `${origName}.umd.js`,
};

export default defineConfig({
  build: {
    target: 'es2015', // esnext
    lib: {
      entry: resolve(__dirname, 'lib/zero2one.js'),
      name: 'Zero2One',
      formats: ['es', 'cjs', 'umd'],
      // @ts-expect-error: i only need 'es', 'cjs', 'umd'
      fileName: (format) => lookupNames[format],
    },
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },

  plugins: [
    // babel(),
    banner(bannerText),
  ],
});
