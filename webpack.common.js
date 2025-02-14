const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/pages/index.tsx", 
        "./GumFall/index": "./src/pages/GumFall/index.tsx",  
        "./GumFall/PrivacyPolices/index": "./src/pages/GumFall/PrivacyPolices/index.tsx"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            filename: "index.html",
            template: "./src/pages/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            title: "GumFall",
            filename: "GumFall/index.html",
            template: "./src/pages/index.html",
            chunks: ["./GumFall/index"]
        }), 
        new HtmlWebpackPlugin({
            title: "GumFallPrivacyPolices", 
            filename: "GumFall/PrivacyPolices/index.html", 
            template: "./src/pages/index.html", 
            chunks: ["./GumFall/PrivacyPolices/index"]
        }),

        new MiniCssExtractPlugin(),
        new NodePolyfillPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "./app-ads.txt", to: "./app-ads.txt" }, 
                { from: "./src/public/", to: "./" }
            ]
        })
    ],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    optimization: {
        moduleIds: "deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.*', '.ts', '.tsx', '.js', '.jsx']
    }
};