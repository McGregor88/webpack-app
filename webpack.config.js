const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'news': PATHS.source + '/pages/news/news.js'
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'news.html',
                chunks: ['news'],
                template: PATHS.source + '/pages/news/news.pug'
            })
        ]
    },
    pug()
]);

module.exports = function(env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return merge([
            common,
            devserver()
        ])
    }
};
