'use strict'
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const entry = [
  './examples/index.js',
  'webpack-hot-middleware/client?reload=true',
]

module.exports = merge({
  mode: 'development',
  entry,
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new htmlWebpackPlugin({
      filename: './index.html',
      template: './examples/index.tpl',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ],
  devtool: '#eval-source-map',
}, require('./webpack.base.config.js'))
