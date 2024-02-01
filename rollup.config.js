// rollup.config.js
module.exports = {
  input: './index.js', // 你的入口文件
  output: {
    file: 'dist/index.js', // 输出文件的路径和名称
    format: 'umd', // 输出格式
    name: 'gotcjs', // 全局变量的名称，当在浏览器中使用时，你的库将通过这个名称被访问
    globals: {
      // 这里定义外部依赖，如：jquery: '$'
    },
  },
  external: [
    // 这里列出你的外部依赖，这些依赖不会被打包进输出文件
  ],
};