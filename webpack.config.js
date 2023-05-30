const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
    entry: { myAppName: path.resolve(__dirname, "./src/index.js") },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: production ? "[name].[contenthash].js" : "[name].js",
        publicPath: "/",
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(sass|less|css)$/,
                use: ["style-loader", "css-loader", 'sass-loader'],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: !production,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !production,
                        },
                    },
                ],
            },
            {
                test: /\.(jpeg|png|jpg|webp|avif|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]",
                },
            },
            {
                test: /\.mp4|webm$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "video",
                        },
                    },
                ],
            },
            // {
            //     test: /\.(ttf)$/,
            //     use: ["file-loader"],
            // }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "2048",
            template: "./public/index.html",
            // favicon: "./public/favicon/favicon-32x32.png",
        }),
        new MiniCssExtractPlugin({
            filename: production ? "[name].[contenthash].css" : "[name].css",
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: `${path.join(__dirname, "/public/fonts")}`, to: `public/fonts` },
        //     ],
        // }),
    ],
    devServer: {
        port: 9088,
        hot: true,
    },
    mode: production ? "production" : "development",
};
