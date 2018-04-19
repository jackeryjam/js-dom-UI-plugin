const path = require('path');

module.exports = {
  entry: {
    'fixable-top': './src/fixable-top.js',
    'press': './src/press.js',
    'swipe-only': './src/swipe-only.js',
    'swipe-view-top': './src/swipe-view-top.js',
    'swipe': './src/swipe.js',
    'swipeview': './src/swipeview.js'
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