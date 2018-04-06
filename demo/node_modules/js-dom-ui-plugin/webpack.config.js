const path = require('path');

module.exports = {
  entry: './demo/swipeview/index.js',
  output: {
    path: path.resolve(__dirname, 'demo/swipeview/dist'),
    filename: 'index.js'
  }
};