import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    redirect: '/main/category',
    children: [
      {
        path: '/main/category',
        name: 'MainCategory',
        component: () => import('@/views/main/category/category.vue')
      },
      {
        path: '/main/info',
        name: 'MainCategoryInfo',
        component: () => import('@/views/main/info/info.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// 导航守卫
router.beforeEach((to) => {
  // if (to.path !== '/login') {
  //   const token = localCache.getCache('token')
  //   if (!token) {
  //     return '/login'
  //   }
  // }
  if (to.path === '/main') {
    // console.log(firstMenu, 'firstMenu')
    return firstMenu.url
  }
})

export default router
