import HomeView from '@/views/HomeView.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/testToken',
    name: 'testToken',
    component: () => import('../views/TestTokenView.vue')
  },
  {
    path: '/testTailwind',
    name: 'testTailwind',
    component: () => import('../views/TestTailwindView.vue')
  }
]
