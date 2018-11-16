var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  minimize: true
});

var productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production'),
    'PUBLIC_URL': process.env.PUBLIC_URL,
    'APIURL': process.env.APIURL,
    'PORT': process.env.PORT
  }
});

var cssExtractPlugin = new ExtractTextPlugin('styles.css');

config.devtool = '';
config.output.pathinfo = false;
config.output.publicPath = process.env.PUBLIC_URL;
config.entry = ['./app/App.js'];
config.plugins.unshift(productionPlugin);
config.plugins.push(cssExtractPlugin);
config.plugins.push(uglifyPlugin);

config.module.loaders = [
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    loaders: ['babel']
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss')
  },
  {
    test: /\.styl$/,
    exclude: /(node_modules)/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus-loader')
  },
  {
    test: /\.(png|jpg)$/,
    exclude: /(node_modules)/,
    loader: 'url-loader?name=images/[name].[ext]&limit=8192'
  }
]

module.exports = config;
