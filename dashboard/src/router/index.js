import { createRouter, createWebHistory } from 'vue-router'

const Credencials = () => import('../views/Credentials/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Home = () => import('../views/Home/index.vue')

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbaks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
