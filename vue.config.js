const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // devServer: {
    //     proxy: {
    //         '/v1': {
    //             target: 'https://rest-sandbox.coinapi.io',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/v1': ''
    //             }
    //         }
    //     }
    // }
})