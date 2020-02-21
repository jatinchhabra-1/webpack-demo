var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/scripts/main.js",
    output: {
        filename: "assets/scripts/bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "var",
        library: "ui"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].html',
                            esModule: false
                        }
                    },
                    'extract-loader',
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ["img:src", "link:href"]
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            },{
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attrs: ["img:src", "link:href"]
                },
                include: path.resolve(__dirname, 'src/index.html')
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './assets/images',
                    publicPath: 'assets/images',
                    esModule: false
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: './assets/css',
                            publicPath: 'assets/css',
                            esModule: false
                        }
                    },
                    'extract-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}