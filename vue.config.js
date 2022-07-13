'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  // assetsRoot: path.resolve(__dirname, "../dist"),
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js\css\img)
  lintOnSave: true, // 是否开启eslint
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  devServer: {
    open: true,
    port: 8081,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {}
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin (这个会影响css热更新)
    extract: false,
    // 开启 CSS source maps?
    sourceMap: true,
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 375,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false
          })
        ]
      }
    }
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'shopping-mall-app',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // 设置静态文件路径
    config.resolve.alias
      .set('@', resolve('src'))
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  }
}
