import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
      path: '/abcview',
      name: 'abcview',
      component: () => import('../views/ABCView.vue')
    },
    {
      path: '/aboutview',
      name: 'aboutview',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/efg',
      name: 'efg',
      component: () => import('../views/EFG.vue')
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

