import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BibliotecaView from '../views/BibliotecaView.vue'
import CalendarioAcademicoView from '../views/CalendarioAcademicoView.vue'
import DisciplinasView from '../views/Disciplinas/DisciplinasView.vue'
import LinksExternosView from '../views/Links/LinksExternosView.vue'
import OfertaDisciplinasView from '../views/OfertaDisciplinasView.vue'
import DocumentosView from '../views/DocumentosView.vue'
import SolicitacoesView from '../views/Solicitacoes/SolicitacoesView.vue'
import AlterarDadosView from '../views/Configurações/AlterarDadosView.vue'

//imports Solicitações:
import AtividadesComplementaresView from '../views/Solicitacoes/AtividadesComplementaresView.vue'
import ColacaoView from '../views/Solicitacoes/ColacaoView.vue'
import ComprovanteVacinacaoView from '../views/Solicitacoes/ComprovanteVacinacaoView.vue'
import EstagioObrigatorioView from '../views/Solicitacoes/EstagioObrigatorioView.vue'
import TrancamentoMatriculaView from '../views/Solicitacoes/TrancamentoMatriculaView.vue'
import DesistenciaCursoView from '../views/Solicitacoes/DesistenciaCursoView.vue'

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
  {
    path: '/solicitacoes/AtividadesComplementares',
    name: 'AtividadesComplementares',
    component: AtividadesComplementaresView,
  },
  {
    path: '/solicitacoes/Colacao',
    name: 'Colacao',
    component: ColacaoView,
  },
  {
    path: '/solicitacoes/ComprovanteVacinacao',
    name: 'ComprovanteVacinacao',
    component: ComprovanteVacinacaoView,
  },
  {
    path: '/solicitacoes/EstagioObrigatorio',
    name: 'EstagioObrigatorio',
    component: EstagioObrigatorioView,
  },
  {
    path: '/solicitacoes/TrancamentoMatricula',
    name: 'TrancamentoMatricula',
    component: TrancamentoMatriculaView,
  },
  {
    path: '/solicitacoes/DesistenciaCurso',
    name: 'DesistenciaCurso',
    component: DesistenciaCursoView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
