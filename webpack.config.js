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
    devtool:"source-map",
    module: {
        loaders: [
            {
                test:/\.tsx?$/, loader: "ts-loader"
            },
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }],

            preLoaders:[{test:/\.js$/, loader:"source-map-loader"}]
    },

    plugins: [new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))]
}

