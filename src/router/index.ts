import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/story/:id',
      name: 'story',
      component: () => import('@/views/Story.vue'),
    },
  ],
})

export default router
