<script setup>
import { ref } from "vue";
import SideBar from "@/components/SideBar.vue";
import HeaderC from "@/components/Header.vue";
import FooterR from "@/components/Footer.vue";
import { useRouter } from "vue-router";

const isSidebarOpen = ref(false);
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
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
      <HeaderC titulo="Configure!!" />

      <main class="main-content">
        <h1>Configurações</h1>

        <div class="config-layout">
          <aside class="sidebar-filho">
            <ul>
              <li @click="goTo('/configuracoes/dados-cadastrais')">
                Alterar Dados Pessoais
              </li>
              <li @click="goTo('/configuracoes/documentos')">
                Alterar Documentos
              </li>
              <li @click="goTo('/configuracoes/email-endereco')">
                Alterar E-mail/Endereço
              </li>
              <li @click="goTo('/configuracoes/nome-social')">
                Incluir Nome Social
              </li>
              <li @click="goTo('/configuracoes/dados-bancarios')">
                Incluir Dados Bancários
              </li>
              <li @click="goTo('/configuracoes/alterar-senha')">
                Alterar Senha
              </li>
            </ul>
          </aside>

          <section class="descricao">
            <p>
              Selecione uma das opções ao lado para alterar seus dados
              cadastrais.
            </p>
            <p>
              Você poderá visualizar, editar ou adicionar informações conforme
              necessário.
            </p>
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

/* Layout com sidebar filha */
.config-layout {
  display: flex;
  gap: 2rem;
}

/* Sidebar filha */
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

/* Área descritiva */
.descricao {
  flex: 1;
  padding: 1rem;
  background-color: white;
  border: 1px solid #004080;
  border-radius: 8px;
  color: #004080;
}
</style>
