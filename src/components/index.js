import Vue from 'vue'

// 全局自动注册
// 将global文件夹下的vue组件全部拉进来，注册引用到main.js中
const requireContext = require.context(
  './global',
  true,
  /\.vue$/
)

requireContext.keys().forEach(fileName => {
  const componentConfig = requireContext(fileName)
  Vue.component(
    componentConfig.default.name || componentConfig.name,
    componentConfig.default || componentConfig
  )
})
