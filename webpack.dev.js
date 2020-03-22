const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    plugins: [new ForkTsCheckerWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
        ],
    },
})
