const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  return merge(common(argv.mode), {
    // inline-source-map, eval-cheap-module-source-map
    devtool: 'inline-source-map',
    devServer: {
      devMiddleware: {
        // writeToDisk: true,
      },
      static: {
        // directory: path.resolve(__dirname, 'dist'),
        // directory: './dist',
      },
      watchFiles: ['src/**/*.html', 'public/**/*'],
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
      host: 'localhost', // 'localhost', 'local-ip'
      port: 'auto', // 8081, 'auto'
      hot: true, // true, 'only'
    },
    watchOptions: {
      aggregateTimeout: 100,
      // ignored: /node_modules/,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            // 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                api: 'modern-compiler',
                sassOptions: {
                  indentWidth: 4,
                  outputStyle: 'compressed',
                  // outputStyle: 'expanded',
                  verbose: true,
                },
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            // 'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        // filename: 'style.css',
      }),
      // new webpack.SourceMapDevToolPlugin({
      //     filename: "[file].map"
      // }),
    ],
  });
};
