// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/datenschutz',
      name: 'privacy',
      component: PrivacyPolicyView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
