const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const chokidar = require('chokidar');
const webpack = require('webpack');

// Get local IP address in Node.js
let os = require('os');
let ifaces = os.networkInterfaces();
let localIpAddress;

Object.keys(ifaces).forEach(function (ifname) {
    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            return;
        }
        localIpAddress = iface.address;
    });
});

module.exports = (env, argv) => {

    return merge(common(argv.mode), {
        target: 'web',
        devtool: 'eval-cheap-module-source-map',
        devServer: {
            before(app, server) {
                chokidar.watch([
                    './src/**/*.html'
                ]).on('all', () => {
                    server.sockWrite(server.sockets, 'content-changed');
                });
            },
            // contentBase: './dist',
            contentBase: path.join(__dirname, 'dist'),
            overlay: {
                warnings: true,
                errors: true
            },
            host: localIpAddress,
            port: 8081,
            hot: true,
            // writeToDisk: true,
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
