var path = require('path');
var webpack = require('webpack');

module.exports = {
    //项目入口文件
    entry: './src/main.js',
    output: {
        //打包出口路径
        path: path.resolve(__dirname, './dist');
        publicPath: '/dist/',
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
        extensions: ['.js', '.vue', '.json']
    }
};
