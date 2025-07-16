import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SolicitacaoView from '../views/SolicitacaoView.vue'
import Biblioteca from '../views/Biblioteca.vue'
import CalendarioAcademico from '../views/CalendarioAcademico.vue'
import Disciplinas from '../views/Disciplinas.vue'
import LinksExternos from '../views/LinksExternos.vue'
import OfertaDisciplinas from '../views/OfertaDisciplinas.vue'
import Documentos from '../views/Documentos.vue'
import Solicitacoes from '../views/Solicitacoes.vue'
import AlterarDados from '../views/AlterarDados.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/solicitacao',
    name: 'Solicitacao',
    component: SolicitacaoView,
  },
  {
    path: '/biblioteca',
    name: 'Biblioteca',
    component: Biblioteca,
  },
  {
    path: '/calendario-academico',
    name: 'CalendarioAcademico',
    component: CalendarioAcademico,
  },
  {
    path: '/disciplinas',
    name: 'Disciplinas',
    component: Disciplinas,
  },
  {
    path: '/links-externos',
    name: 'LinksExternos',
    component: LinksExternos,
  },
  {
    path: '/oferta-disciplinas',
    name: 'OfertaDisciplinas',
    component: OfertaDisciplinas,
  },
  {
    path: '/documentos',
    name: 'Documentos',
    component: Documentos,
  },
  {
    path: '/solicitacao',
    name: 'Solicitacao',
    component: Solicitacoes,
  },
  {
    path: '/configuracoes',
    name: 'AlterarDados',
    component: AlterarDados,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
