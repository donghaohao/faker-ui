const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const app = express();
const config = require('./webpack.dev.config.js')
const compiler = webpack(config)
const fs = require('fs')
const components = require('../components.json')

const name = process.argv[2]
if (!name) {
  console.log('请指定组件名')
  process.exit()
}
if (!components[name]) {
  console.log('组件不存在')
  process.exit()
}

fs.writeFileSync('./examples/index.js',
  `import Vue from 'vue'
import './index.css'
import App from './${name}/App.vue'
new Vue({
  el: '#app',
  render: h => h(App),
})
`)

const devMiddleware = webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false,
    children: false,
  },
  lazy: false,
  publicPath: '/',
})

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))

app.listen(3000, function () {
  console.log('Modules listening on port 3000!\n')
})
