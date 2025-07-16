import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SolicitacaoView from '../views/SolicitacaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {

      path: '/solicitacao', 
      name: 'Solicitacao',
      component: SolicitacaoView,
    },

    path: '/configuracoes/alterar-dados',
    name: 'AlterarDados',
    component: () => import('@/views/AlterarDados.vue'),
  },
  ],
})

export default router
