// 导入依赖包
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// 导出配置项
module.exports = {
  // 入口文件
  entry: './src/index.ts',
  // 出口文件
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 首页模版输出文件
      template: './src/index.htm'
    })
  ]
}