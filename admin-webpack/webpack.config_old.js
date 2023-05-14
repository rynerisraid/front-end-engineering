const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development', //开发环境
    entry: path.resolve(__dirname, './src/main.ts'), //项目的入口文件，相对路径转换为绝对路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    resolve: {
        alias: {
            '@': path.resolve("src")
        },
        extensions: [".ts", ".tsx", ".js", ".vue", ".json",]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: ['\\.vue$'] //用于编译 .vue文件中的ts
                    }
                }]
            },

            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
                type: 'asset',
                generator: { filename: 'img/[contenthash:8][ext][query]' },
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            templateContent: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Admin webpack</title>
        </head>
        <body>
            <div id="app"></div>
        </body>
        </html>`
        })],


    devServer: {
        //contentBase: path.resolve(__dirname,"./dist"),
        port: 8080,
        historyApiFallback: true,                      //支持History模式
        static: {
            directory: path.join(__dirname, "public"),
        }
        //publicPath:"/",                             //开发环境中模拟资源
    }

};