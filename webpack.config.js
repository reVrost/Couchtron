

var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/app.js'],
    },
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/'
    },
    devserver: {
        contentBase: '.',
        publicPath: 'http://localhost:8080/build/'

    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }]
    },

    plugins: [new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))]
}
