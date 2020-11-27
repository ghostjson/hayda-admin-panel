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
    path: '/blog/new',
    name: 'NewBlog',
    component: () => import('../views/NewBlog')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
