const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const webpack = require('webpack');

const PAGES = fs
  .readdirSync('./src')
  .filter((fileName) => fileName.endsWith('.html'));

module.exports = (mode) => {
  const PRODUCTION = mode === 'production';

  return {
    entry: {
      app: './src/index.js',
      'modernizr.custom': './src/js/vendor/modernizr-custom.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].bundle.js',
      // publicPath: '/',
      // library: {
      //     name: '[name]',
      //     type: 'umd',
      // },
    },
    // cache: false,
    // externals: {
    //     jquery: 'jQuery',
    // },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            sources: false,
            minimize: false,
          },
          include: path.resolve(__dirname, 'src/inc'),
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'img/sprites/general.svg',
              },
            },
            'svgo-loader',
          ],
        },
        // {
        //     test: /\.(png|jpe?g|gif|svg)$/i,
        //     use: [
        //         {
        //             loader: 'file-loader',
        //             options: {
        //                 name: 'img/[path][name].[ext]',
        //                 outputPath: 'img',
        //             },
        //         },
        //     ],
        // },
        // {
        //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //     loader: 'file-loader',
        //     options: {
        //         name: '[name].[ext]',
        //     }
        // },
      ],
    },
    optimization: {
      // runtimeChunk: 'single',
      // runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          swiper: {
            test: /[\\/]node_modules[\\/](swiper)[\\/]/,
            name: 'swiper',
            chunks: 'all',
            enforce: true,
          },
          jquery: {
            test: /[\\/]node_modules[\\/](jquery)[\\/]/,
            name: 'jquery',
            chunks: 'all',
            enforce: true,
          },
          // vendor: {
          //     test: /node_modules/,
          //     name: 'vendors',
          //     chunks: 'all',
          //     enforce: true,
          // }
        },
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      ...PAGES.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `./src/${page}`,
            filename: `./${page}`,
            inject: false,
            minify: false,
          }),
      ),
      new webpack.DefinePlugin({
        PRODUCTION: PRODUCTION,
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        // 'window.jQuery': 'jquery',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'img/**/*',
            context: 'src',
            force: true,
            globOptions: {
              ignore: ['**/svg-sprite/**'],
            },
          },
          {
            from: 'fonts/**/*',
            context: 'src',
            force: true,
          },
        ],
        // options: {
        //     concurrency: 100,
        // },
      }),
      new SpriteLoaderPlugin(),
    ],
  };
};
