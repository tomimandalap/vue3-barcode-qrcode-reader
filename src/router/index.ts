import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/AnotherView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router