var path = require('path');
var SRC_DIR = path.join(__dirname, '/react_client/src')
var DIST_DIR = path.join(__dirname, '/react_client/dist');

module.exports = {

  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react', {targets: {node: 'current'}}]
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
    ]
  },

}