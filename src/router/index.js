import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//OEFENING 1, 2, 3 imports
import PersonalView from '../views/oefening1/PersonalView.vue'
import HobbyView from '../views/oefening1/HobbyView.vue'

//OEFENING 4 imports
import OrderView from '../views/oefening4/OrderView.vue'

// OEFENING 5 import
import StoreView from '../views/oefening5/StoreView.vue'

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
    // OEFENING 1, 2, 3 routes
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
    // OEFENING 4 routes
    {
      path: '/order',
      name: 'order',
      component: OrderView,
    },
    // OEFENING 5 routes
    {
      path: '/store',
      name: 'store',
      component: StoreView,
    }
  ],
})

export default router
