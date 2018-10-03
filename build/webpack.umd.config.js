'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge({
  mode: 'production',
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/dist/',
    filename: 'hlib.js',
    libraryTarget: 'umd',
    library: 'Hlib',
    umdNamedDefine: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
}, require('./webpack.base.config.js'))
