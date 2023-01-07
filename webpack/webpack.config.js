const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口的位置
    entry: "./src/index.js",
    //Loader
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js",
    },
};