const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://aso-2201402.main.jp/backend',
        changeOrigin: true,
      }
    }
  }
};