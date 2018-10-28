const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index.js',
        game: './js/game.js'
    }, 
    output: {
        filename: 'js/[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
    },
    
    mode: 'development',
    watch: true,
    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                        plugins: ["transform-object-rest-spread"]
                    }
                }
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            mimetype: 'image/png',
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].bundle.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'wepback',
            template: './index.html'
        }),
        new CleanWebpackPlugin([
            'public'
        ])
    ]
}