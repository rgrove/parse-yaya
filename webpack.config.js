'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',

  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },

  output: {
    filename: 'parse-yaya.min.js',
    globalObject: "typeof self !== 'undefined' ? self : this", // see https://github.com/webpack/webpack/issues/6522
    library: {
      commonjs: 'parse-yaya',
      root: 'parseYaya'
    },
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist', 'umd')
  }
};
