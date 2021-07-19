const path = require('path');

module.exports = {
  entry: './app/static/src/js/main.js',
  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, 'app/static/min/js/'),
  },
};
