'use strict'
const merge = require('webpack-merge')
//const devEnv = require('./dev.env')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"'
})
