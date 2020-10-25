#### 学习vue + ts建站
技术栈介绍  

采用vue+ts书写逻辑  
less代替css  
babel处理向下兼容  
##### webpack
##### vue
##### vue-ruter
```
npm i vue-router --save-dev
```
##### babel
首先安装相关的依赖  
```
npm i babel-core babel-loader babel-preset-env --save-dev
```
创建一个.babelrc文件

transform runtime
```
npm i @babel/plugin-tansform-runtime
npm i @babel/runtime --save
```
##### typeScript
首先安装ts的预处理器
```
npm i typescript ts-loader --save-dev
//约束代码格式, tslint不更新了，eslint即将支持ts
npm i tslint tslint-loader tslint-config-standard --save-dev
```
配置webpack的预处理规则
```
{
    test: /\.ts$/,
    loader: 'ts-loader',
    options: {
        appendTsSuffix: [/\.vue$/]
    }
}
```
在项目src中添加vue-shims.d.ts文件
```TypeScript
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
```
修改entry
```
entry: {
    app: './src/main.ts'
}
```  

安装Vue对TypeScript支持的依赖
```
npm i vue-class-component vue-property-decorator --save-dev
```