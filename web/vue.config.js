const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/app/api': {
        target: 'https://aso-2201402.main.jp',
        changeOrigin: true,
        pathRewrite: {
          '^/app/api': '/app/api'
        }
      }
    }
  }
}