var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    //项目入口文件
    entry: {
        //app: ['@babel/polyfill', './src/main.ts']
        '.src/main.ts'
    },
    output: {
        //打包出口路径
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',
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
        extensions: ['.ts', '.vue', '.js', '.json', '.less']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },{
            test: /\.less$/,
            use: [
                'vue-loader',
                'css-loader',
                'less-loader'
            ]
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
            exclude: '/node_modules/',
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
        new htmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
};
