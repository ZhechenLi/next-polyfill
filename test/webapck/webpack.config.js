var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NextPolyfillWebpackPlugin = require('../../lib/NextPolyfillWebpackPlugin')
  .default;

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.[chunkhash].js'
  },
  plugins: [new HtmlWebpackPlugin({}), new NextPolyfillWebpackPlugin()]
};
