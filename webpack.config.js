var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    //项目入口文件
    entry: {
        app: ['./node_modules/babel-polyfill', './src/main.ts']
        //app: './src/main.ts'
    },
    output: {
        //打包出口路径
        path: path.resolve(__dirname, './dist'),
        //publicPath: './dist/',
        //打包后的文件名
        filename: 'main.js'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    resolve: {
        //路径别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.vue', '.js', '.json', '.css', '.less', '.ts']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {loader: MiniCssExtractPlugin.loader},
                //'vue-style-loader',
                'css-loader'
            ],
            include: path.resolve(__dirname, './src')
        },{
            test: /\.less$/,
            use: [
                {loader: MiniCssExtractPlugin.loader},
                //'vue-style-loader',
                'css-loader',
                'less-loader'
            ],
            exclude: /node_modules/,
            include: path.resolve(__dirname, './src')
        },{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                //name: '[name].[ext]?[hash]',
                esModule: false
            }
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'css': 'vue-style-loader!css-loader',
                    'less': 'vue-style-loader!css-loader!less-loader'
                }
            }
        },{
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        },{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: file => (
                /node_modules/.test(file) && 
                !/\.vue\.js/.test(file)
            )
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
};