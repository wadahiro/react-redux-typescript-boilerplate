var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;
NODE_ENV = NODE_ENV && NODE_ENV.trim() === 'production' ? 'production' : 'development';
console.log('NODE_ENV: ' + NODE_ENV);

var config = {
    entry: {
        vendor: ['babel-polyfill', path.join(__dirname, 'vendors.js')]
    },
    devtool: '#source-map',
    output: {
        path: path.join(__dirname, '../.dll'),
        filename: '[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"' + NODE_ENV + '"'
        }),
        new webpack.DllPlugin({
            context: path.join(__dirname, '../src/script'),
            path: path.join(__dirname, '../.dll', '[name]-manifest.json'),
            name: '[name]_[hash]'
        }),
    ]
};

if (NODE_ENV === 'production') {
    delete config.devtool;
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }))
}

module.exports = config;