var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: './public',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  colors: true,
  noInfo: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8080');
});
