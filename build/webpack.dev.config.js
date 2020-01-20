module.exports = {
  devtool: 'cheap-module-eval-source-map'  // cheap 忽略文件列信息 module 定位到ts源码而不是经过loader转译后的js源码 eval-source-map 会将sourcemap以data-url的形式打包
}