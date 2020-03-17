const path = require('path')
const webpack_rules = []
// todo: replace path with env var
const webpackOption = {
    entry: './src/app.js',
    watch: true,
    output: {
        path: path.resolve('E:/PushCtrl/js'),
        filename: 'pushCtrlBundle.js',
        library: 'init',
        libraryExport: 'default',
    },
    module: {
        rules: webpack_rules,
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src/'),
        },
    },
}
let babelLoader = {
    test: /\.(ts|js)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
    },
}
let esLintLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
}

webpack_rules.push(babelLoader)
webpack_rules.push(esLintLoader)
module.exports = webpackOption

// todo: use import path aliases
