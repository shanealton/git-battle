const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js)$/, loader: 'babel-loader', exclude: /(node_modules)/, query: {compact: false} },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [new HTMLWebpackPlugin({
    template: 'app/index.html'
  })]
}
