var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin').default;

var path = require('path')
var objectAssign = require('object-assign')

var NODE_ENV = process.env.NODE_ENV
NODE_ENV = NODE_ENV && NODE_ENV.trim() === 'production' ? 'production' : 'development'

module.exports = {
  target: 'web',
  entry: ['babel-polyfill', './src/script/index.tsx'],
  output: {
    path: path.join(__dirname, '../public'),
    //publicPath: '',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        include: [
          path.join(__dirname, '../src/script') //important for performance!
        ],
        loaders: ['babel?cacheDirectory=true', 'awesome-typescript-loader?forkChecker=true'],
        // loaders: ['happypack/loader', 'awesome-typescript-loader?useBabel=true&babelOptions=true&forkChecker=true']
      }
      //   {
      //     test: /\.css$/,
      //     loader: 'style!css'
      //   }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    //Typically you'd have plenty of other plugins here as well
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '../src/script'),
      manifest: require('../.dll/vendor-manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"' + NODE_ENV + '"'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
      hash: true
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve('../.dll/vendor.js'),
      publicPath: 'assets',
      outputPath: 'assets',
      hash: true,
      includeSourcemap: true
    })
    // I'm waiting the issue is resolved...
    // https://github.com/amireh/happypack/issues/33
    // new HappyPack({
    //   // loaders is the only required parameter:
    //   loaders: ['react-hot', 'babel'],

    //   // customize as needed, see Configuration below
    // })
  ],
  cache: true
}
