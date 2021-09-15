const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'app.bundle': ['./js/app.js'],
        'service_worker': ['./js/service_worker.js']
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/js/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devtool: 'eval-source-map'
};