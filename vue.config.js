const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// const AutoImport = require('unplugin-auto-import/webpack').default // 注意 .default‌:ml-citation{ref="1,4" data="citationList"}
// const Components = require('unplugin-vue-components/webpack').default
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  // 1.配置方式一: CLI提供的属性
  // outputDir: './build',
  // publicPath: "./",
  devServer: {
    port: 9527,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
    // config.plugins = [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()]
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()]
    //   })
    // ]
  }
})
