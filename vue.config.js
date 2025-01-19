// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// const path = require('path')
module.exports = {
  outputDir: './build', // 构建时输出的目录

  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }

  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }

  // 配置方式二
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }

  // 配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
