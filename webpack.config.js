const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  // watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
      filename: "./index.html"
    })
  ]
};

  // module.exports = {
//     entry: './src/index.js',
//     watch: true,
//     output: {
//         filename: 'bundle.js'
//     },
//     // devtool: 'source-map',
// }


// // var config = {...};
// // module.exports = config;