const path = require('path');

module.exports = {
  entry: {
    // press: './press/index.js',
    // swipe: './swipe/index.js',
    // swipeOnly: './swipeOnly/index.js',
    // swipeview: './swipeview/index.js',
    // 'fixable-top': './fixable-top/index.js',
    'swipe-view-top': './src/swipe-view-top.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: './dist/[name].js'
  }
};