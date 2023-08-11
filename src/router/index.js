import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const Episode1View = () => import('../views/Episode1View.vue')
const Episode2View = () => import('../views/Episode2View.vue')
const Episode3View = () => import('../views/Episode3View.vue')
const Episode4View = () => import('../views/Episode4View.vue')
const NotFound = () => import('../views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/episode1',
      name: 'episode1',
      component: Episode1View
    },
    {
      path: '/episode2',
      name: 'episode2',
      component: Episode2View
    },
    {
      path: '/episode3',
      name: 'episode3',
      component: Episode3View
    },
    {
      path: '/episode4',
      name: 'episode4',
      component: Episode4View
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
