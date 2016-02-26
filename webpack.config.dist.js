var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/Draft-js-gutter'
  ],
  output: {
    path: './dist',
    filename: 'draft-js-gutter.js'
  },
  externals: [
    {
      'draft-js': {
        root: 'Draft-js',
        commonjs2: 'draft-js',
        commonjs: 'draft-js',
        amd: 'draft-js'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};