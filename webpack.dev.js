const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {

    return merge(common(argv.mode), {
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            devMiddleware: {
                writeToDisk: true,
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
            host: 'local-ip',
            port: 8081, // 8081, 'auto'
            hot: true, // true, 'only'
        },
        watchOptions: {
            aggregateTimeout: 100,
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
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    indentWidth: 4,
                                    outputStyle: 'compressed',
                                    // outputStyle: 'expanded',
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
                            }
                        },
                    ],
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                // filename: 'css/[name].css',
                filename: 'style.css',
            }),
            // new webpack.SourceMapDevToolPlugin({
            //     filename: "[file].map"
            // }),
        ],
    });
};
