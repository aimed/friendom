const webpack = require('webpack') // to access built-in plugins
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const fs = require('fs')
// const TMDB_API_KEY =

if (!process.env.TMDB_API_KEY) {
  throw new Error('Set TMDB_API_KEY as an enviroment variable')
}

module.exports = {
  entry: ['./src/index.js'], // 'babel-polyfill'
  output: {
    path: './build',
    filename: 'bundle.js',
    target: 'web'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY)
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: './src/index.html' },
      { from: './src/main.css' }
    ])
  ],
  devtool: 'source-map'

}
