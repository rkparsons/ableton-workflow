const path = require('path')
const webpack_rules = []
const webpackOption = {
    entry: './src/devices/drums.js',
    watch: true,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'drumsBundle.js',
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
