require('dotenv').config();

if (process.env.NODE_ENV != 'production') {
  // Create a development serveur with hot reloading
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
    contentBase: './public',
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    /*colors: true,
    noInfo: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },*/
  }).listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at http://localhost:3000');
  });
} else {
  // Create express server to distribute the application
  var path = require('path');
  var express = require('express');


  var app = express();

  var staticPath = path.join(__dirname, './public');
  app.use(express.static(staticPath));

  // Allows you to set port in the project properties.
  app.set('port', process.env.PORT || 1234);

  app.listen(app.get('port'), function () {
    console.log('listening on port ' + app.get('port'));

  });
}
