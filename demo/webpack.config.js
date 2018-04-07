const path = require('path');

module.exports = {
  entry: {
    // press: './press/index.js',
    // swipe: './swipe/index.js',
    swipeOnly: './swipeOnly/index.js',
    // swipeview: './swipeview/index.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]/dist/index.js'
  }
};