'use strict'
const webpack = require('webpack')
const path = require('path')
const Components = require('../components.json')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge({
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(process.cwd(), './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
}, require('./webpack.base.config.js'))
