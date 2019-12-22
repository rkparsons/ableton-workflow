const path = require('path')
const webpack_rules = []
// todo: replace path with env var
const webpackOption = {
    entry: './src/app.js',
    watch: true,
    devtool: 'source-map',
    output: {
        path: path.resolve('E:/PushCtrl/js'),
        filename: 'pushCtrlBundle.js',
        library: 'init',
        libraryExport: 'default',
    },
    module: {
        rules: webpack_rules,
    },
}
let babelLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
    },
}
webpack_rules.push(babelLoader)
module.exports = webpackOption

// todo: use import path aliases
