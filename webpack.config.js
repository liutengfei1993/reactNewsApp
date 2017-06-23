/*
* @Author: liutengfei
* @Date:   2017-05-15 15:02:33
* @Last Modified by:   liutengfei
* @Last Modified time: 2017-05-15 17:21:13
*/
var webpack = require("webpack");
var path = require("path");

module.exports = {
  context:  __dirname + "/src",
  entry: "./js/root.js",
   module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
            presets: ["react","es2015"],
            plugins: ["react-html-attrs"]
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname + "/src/",//打包后的文件存放的地方
    publicPath: '/src/',
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
