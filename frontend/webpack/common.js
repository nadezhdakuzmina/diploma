const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const basePath = path.resolve(__dirname, './');
const tsConfigPath = path.resolve(__dirname, '../tsconfig.json');
const isProduction = process.env.MODE === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: !isProduction && 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsConfigPath,
      }),
    ],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: tsConfigPath,
          },
        },
      },
      {
        test: /\?inline$/,
        use: ['raw-loader']
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.isProduction': JSON.stringify(isProduction),
      'process.env.basePath': JSON.stringify(basePath),
      'process.env.SSL': JSON.stringify(process.env.SSL),
      'process.env.DOMAIN': JSON.stringify(process.env.DOMAIN),
      'process.env.BACKEND_UPSTREAM': JSON.stringify(process.env.BACKEND_UPSTREAM),
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
};