import HomeView from '@/views/HomeView.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    redirect:'/about',
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/card',
        name: 'card',
        component: () => import('../views/CardView.vue')
      }
    ]
  }
  // ,{
  //   path: '/card',
  //   name: 'card',
  //   component: () => import('../views/CardView.vue')
  // }
]
