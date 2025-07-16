import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
    path: '/configuracoes/alterar-dados',
    name: 'AlterarDados',
    component: () => import('@/views/AlterarDados.vue'),
  },
  ],
})

export default router
