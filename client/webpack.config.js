var sGrid = require('s-grid');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/App.js'
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/',
    hot: true,
    historyApiFallback: true,
    colors: true,
    noInfo: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Prello',
      template: './index_template.ejs',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss'
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss!stylus-loader'
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?name=images/[name].[ext]&limit=8192'
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, '..', 'app'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.styl', '.png', '.jpg', '.jpeg', '.gif']
  },
  stylus: function () {
    return [sGrid, rupture]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
