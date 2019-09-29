const path = require('path')
const webpack = require('webpack')
const webpack_rules = []
const webpackOption = {
    entry: './src/devices/drumTrack.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'drumTrackBundle.js',
        library: 'initLiveApi',
        libraryExport: 'default',
    },
    module: {
        rules: webpack_rules,
    },
    optimization: {
        minimize: false,
    },
}
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        },
    },
}
webpack_rules.push(babelLoader)
module.exports = webpackOption
