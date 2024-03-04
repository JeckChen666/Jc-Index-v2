import { createRouter, createWebHistory } from 'vue-router'
import Routes from '@/router/routes.js'
import WhiteList from '@/router/whiteList.js'
import { useDefaultStore } from '@/stores/index'
import { clearToken, checkToken } from '@/utils/tokenUtils.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes
})

router.beforeEach((to, from, next) => {
  const Store = useDefaultStore()
  Store.clearAxiosPromiseCancelArr() // 路由跳转前取消全部请求
  if (checkToken()) {
    next()
  } else {
    clearToken()
    if (WhiteList.includes(to.path)) {
      next()
    } else {
      // next('/login')
      console.log('没有token')
      next()
    }
  }
})

export default router
