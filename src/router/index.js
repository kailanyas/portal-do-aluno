import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BibliotecaView from '../views/BibliotecaView.vue'
import CalendarioAcademicoView from '../views/CalendarioAcademicoView.vue'
import DisciplinasView from '../views/Disciplinas/DisciplinasView.vue'
import LinksExternosView from '../views/Links/LinksExternosView.vue'
import OfertaDisciplinasView from '../views/OfertaDisciplinasView.vue'
import DocumentosView from '../views/DocumentosView.vue'
import SolicitacoesView from '../views/Solicitações/SolicitacoesView.vue'
import AlterarDadosView from '../views/Configurações/AlterarDadosView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/solicitacoes',
    name: 'Solicitacoes',
    component: SolicitacoesView,
  },
  {
    path: '/biblioteca',
    name: 'Biblioteca',
    component: BibliotecaView,
  },
  {
    path: '/calendario-academico',
    name: 'CalendarioAcademico',
    component: CalendarioAcademicoView,
  },
  {
    path: '/disciplinas',
    name: 'Disciplinas',
    component: DisciplinasView,
  },
  {
    path: '/links-externos',
    name: 'LinksExternos',
    component: LinksExternosView,
  },
  {
    path: '/oferta-disciplinas',
    name: 'OfertaDisciplinas',
    component: OfertaDisciplinasView,
  },
  {
    path: '/documentos',
    name: 'Documentos',
    component: DocumentosView,
  },
  {
    path: '/configuracoes',
    name: 'AlterarDados',
    component: AlterarDadosView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
