const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/main.jsx",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "/dist_"),
        filename: "bundle.js",
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist_",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        [
                            "@babel/preset-react",
                            {
                                runtime: "automatic",
                            },
                        ],
                        "@babel/preset-typescript",
                    ],
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                /*configFile: "./path/to/tsconfig.json" */
            }),
        ],
        extensions: [".jsx", ".ts", ".js", ".css", ".scss", ".tsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
