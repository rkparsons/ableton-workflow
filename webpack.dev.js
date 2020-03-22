const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const webpackOption = {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    plugins: [new ForkTsCheckerWebpackPlugin()],
}

module.exports = merge(common, webpackOption)
