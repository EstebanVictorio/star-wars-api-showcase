const path = require('path');



let config =
{
    mode: "",
    node: {
      __dirname: true,
      __filename: true
    },
    entry: {

    },
    output: {
      publicPath: '/dist/'
    },
    module:{
      rules: [
        {
        test: /\.js$/,
        use: {
          loader: 'loader',
          options: {

          }
        }
      }
      ]
    }
  };


module.exports = config;
