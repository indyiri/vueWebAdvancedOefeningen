import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//OEFENING 1 imports
import PersonalView from '../views/oefening1/PersonalView.vue'
import HobbyView from '../views/oefening1/HobbyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // OEFENING 1 routes
    {
      path: '/personal',
      name: 'personal',
      component: PersonalView,
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: HobbyView,
    },
  ],
})

export default router
