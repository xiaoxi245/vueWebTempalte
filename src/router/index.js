import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import Home from '@/views/Home.vue'

Vue.use(Router)

// 实现路由自动加载
let routes = []
const requireContext = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.js$/
)

requireContext.keys().forEach(fileName => {
  if (fileName === './index.js') return
  const routerModule = requireContext(fileName)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

const router = new Router({
  routes
})
// 动态添加路由
router.addRoutes([
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
])

// 路由拦截
// 添加路由的导航守卫
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
