const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./common');

module.exports = merge(common, {
  entry: {
    main: path.resolve(__dirname, '../src/entries/server/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/static/',
    filename: 'server/index.js',
    clean: false,
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BUILD': JSON.stringify('server'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.css$/,
        use: ['null-loader'],
      },
    ],
  },
});
