const path = require('path')
// todo: replace path with env var

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('E:/PushCtrl/js'),
        filename: 'pushCtrlBundle.js',
        library: 'init',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '~': path.resolve(__dirname, 'src/'),
        },
    },
}
