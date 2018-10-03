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
    publicPath: '../dist/',
    filename: 'hlib-common.js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    vue: 'vue',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new VueLoaderPlugin(),
  ],
}, require('./webpack.base.config.js'))
