var sGrid = require('s-grid');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'
const postcssNormalize = require('postcss-normalize');


module.exports = {
  //mode: 'development',
  entry: //'./app/App.js',
    [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/App.js'
    ],
  plugins: [
    //new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Prello',
      template: './index_template.ejs',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    /*new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })*/
  ],
  output: {
    //pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    //publicPath: 'http://localhost:3000/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    hot: true,
    inline: true,
    /*colors: true,
    historyApiFallback: true,
    inline: true, // The small notification bar
    noInfo: true, // Delete all useless info and keeps only warnings and errors
    open: true, // To open a browser when launching the script
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    } */
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          /*
          'style-loader',
          'css-loader?sourceMap&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss'
          */
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader'
          }
          //'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ],
      },
      {
        test: /\.styl$/,
        use: [
          /*
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss',
          */
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'stylus-loader',
            options: {
              use: [sGrid(), rupture()]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader'
        ]
      },/*
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [

          //MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader'

        ]
      },*/
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.styl', '.png', '.jpg', '.jpeg', '.gif']
  }
};
/*
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React with Webpack and Redux - Meteor as a backend only!',
      template: './index_template.ejs',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true, // The small notification bar
    noInfo: true, // Delete all useless info and keeps only warnings and errors
    open: true, // To open a browser when launching the script
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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

    
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel']
          },
        ]
        
  },
  resolve: {
    //root: path.join(__dirname, '..', 'app'),
    extensions: ['.js', '.jsx', '.json', '.css', '.styl', '.png', '.jpg', '.jpeg', '.gif']
  },
  
  stylus: function () {
    return [sGrid, rupture]
  }
  postcss: function () {
    return [autoprefixer];
  }
};
*/