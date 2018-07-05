const path = require('path');
const webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const jsCwd = path.join(process.cwd(), './src');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  context: jsCwd,
  entry: './index.js',
  mode: isDev ? 'development' : 'production',
  output: {
    path: path.join(process.cwd(), 'dest'),
    filename: 'bundle.js',
    publicPath: '/dest/',
  },
  devtool: isDev ? 'inline-source-map' : 'hidden',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      'app': jsCwd
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  devServer: {
    contentBase: __dirname,
    compress: true,
    historyApiFallback: true
  }
};

if (isDev) {
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
} else {
  module.exports.optimization = {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          beautify: false,
          mangle: {
            keep_fnames: true
          },
          compress: {
            drop_console: false
          },
          comments: false
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  };
}