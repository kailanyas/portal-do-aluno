import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/configuracoes/alterar-dados',
    name: 'AlterarDados',
    component: () => import('@/views/AlterarDados.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
