const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const webpackOption = {
    mode: 'production',
}
module.exports = merge(common, webpackOption)
