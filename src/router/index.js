import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/health-hub',
    name: 'HealthHub',
    component: () => import('../views/HealthHub')
  },
  {
    path: '/page-editor',
    name: 'PageEditor',
    component: () => import('../views/PageEditor')
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: () => import('../views/Subscriptions')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
