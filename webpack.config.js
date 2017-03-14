var webpack = require('webpack');

module.exports = {
    context: __dirname + '/js/src',
    entry: {
        main: './main.js',
        common: './common.js'
    },
    output: {
        path: __dirname + '/js/dist',
        filename: '[name].js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            chunks: ['main']
        })
    ],
    devtool: 'cheap-inline-module-source-map'
};
