const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://aso-2201402.main.jp/baby-motsu',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/app/api'
        }
      }
    }
  }
};