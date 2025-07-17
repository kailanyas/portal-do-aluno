<script setup>
import { ref } from "vue";
import SideBar from "@/components/SideBar.vue";
import HeaderC from "@/components/Header.vue";
import FooterR from "@/components/Footer.vue";
import { useRouter } from "vue-router";

const isSidebarOpen = ref(false);
const mostrarSubSidebar = ref(true); // controla visibilidade da sub-sidebar

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function toggleSubSidebar() {
  mostrarSubSidebar.value = !mostrarSubSidebar.value;
}

const router = useRouter();

function goTo(path) {
  router.push(path);
}
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Configurações" />

      <main class="main-content">
        <!-- Botão para mobile -->
        <button class="btn-toggle-sub" @click="toggleSubSidebar">
          {{ mostrarSubSidebar ? 'Esconder Menu' : 'Mostrar Menu' }}
        </button>

        <div class="config-layout">
          <aside v-if="mostrarSubSidebar" class="sidebar-filho">
            <ul>
              <li @click="goTo('/configuracoes/dados-cadastrais')">Alterar Dados Pessoais</li>
              <li @click="goTo('/configuracoes/documentos')">Alterar Documentos</li>
              <li @click="goTo('/configuracoes/email-endereco')">Alterar E-mail/Endereço</li>
              <li @click="goTo('/configuracoes/nome-social')">Incluir Nome Social</li>
              <li @click="goTo('/configuracoes/dados-bancarios')">Incluir Dados Bancários</li>
              <li @click="goTo('/configuracoes/alterar-senha')">Alterar Senha</li>
            </ul>
          </aside>

          <section class="descricao">
            <!-- Aqui entram as views filhas -->
            <router-view />
          </section>
        </div>
      </main>

      <FooterR />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.content-area {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow: hidden;
}

.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

h1 {
  background-color: #004080;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.config-layout {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Sub-sidebar */
.sidebar-filho {
  width: 250px;
  background-color: white;
  border: 1px solid #004080;
  border-radius: 8px;
  padding: 1rem;
  height: fit-content;
}

.sidebar-filho ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-filho li {
  padding: 10px;
  margin-bottom: 8px;
  background-color: #004080;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.sidebar-filho li:hover {
  background-color: #0059b3;
}

/* View das rotas filhas */
.descricao {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
}

/* Botão que aparece só no mobile */
.btn-toggle-sub {
  display: none;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #004080;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Mostrar o botão e esconder menu por padrão em telas pequenas */
@media (max-width: 768px) {
  .btn-toggle-sub {
    display: inline-block;
  }

  .config-layout {
    flex-direction: column;
  }

  .sidebar-filho {
    width: 100%;
  }
}
</style>
