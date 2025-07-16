import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/biblioteca",
    name: "Biblioteca",
    component: () => import("@/views/Biblioteca.vue"),
  },
  {
    path: "/calendario-academico",
    name: "CalendarioAcademico",
    component: () => import("@/views/CalendarioAcademico.vue"),
  },
  {
    path: "/disciplinas",
    name: "Disciplinas",
    component: () => import("@/views/Disciplinas.vue"),
  },
  {
    path: "/links-externos",
    name: "LinksExternos",
    component: () => import("@/views/LinksExternos.vue"),
  },
  {
    path: "/oferta-disciplinas",
    name: "OfertaDisciplinas",
    component: () => import("@/views/OfertaDisciplinas.vue"),
  },
  {
    path: "/documentos",
    name: "Documentos",
    component: () => import("@/views/Documentos.vue"),
  },
  {
    path: "/solicitacoes",
    name: "Solicitacoes",
    component: () => import("@/views/Solicitacoes.vue"),
  },
  {
    path: "/configuracoes",
    name: "AlterarDados",
    component: () => import("@/views/AlterarDados.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
