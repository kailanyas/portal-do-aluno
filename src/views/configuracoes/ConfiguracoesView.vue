<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SideBar from "@/components/SideBar.vue";
import HeaderC from "@/components/Header.vue";
import FooterR from "@/components/Footer.vue";

const isSidebarOpen = ref(false);
const mostrarAbas = ref(false);
const abaSelecionada = ref("");
const router = useRouter();

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function abrirConfiguracao(caminho, aba) {
  mostrarAbas.value = true;
  abaSelecionada.value = aba;
  router.push(caminho);
}
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Configurações" />

      <main class="main-content" :class="{ 'center-cards': !mostrarAbas }">
        <!-- Cards -->
        <transition name="fade">
          <div v-if="!mostrarAbas" class="cards-container">
            <div class="card">
              <div class="card-header">
                <h3>Alterar Dados Pessoais</h3>
              </div>
              <p>Atualize seu nome, CPF, data de nascimento e outros dados básicos.</p>
               <ul><li class="event-item"></li></ul>
              <div class="button-wrapper">
                <button class="card-button" @click="abrirConfiguracao('/configuracoes/dados-cadastrais', 'dados')">
                  Acessar
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3>Alterar Documentos</h3>
              </div>
              <p>Envie ou substitua documentos pessoais como RG, CNH, etc.</p>
               <ul><li class="event-item"></li></ul>
              <div class="button-wrapper">
                <button class="card-button" @click="abrirConfiguracao('/configuracoes/config-documentos', 'documentos')">
                  Acessar
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3>Alterar E-mail/Endereço</h3>
              </div>
              <p>Modifique seu endereço residencial ou e-mail de contato.</p>
               <ul><li class="event-item"></li></ul>
              <div class="button-wrapper">
                <button class="card-button" @click="abrirConfiguracao('/configuracoes/email-endereco', 'email')">
                  Acessar
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3>Incluir Dados Bancários</h3>
              </div>
              <p>Adicione uma nova conta bancária para recebimentos.</p>
               <ul><li class="event-item"></li></ul>
              <div class="button-wrapper">
                <button class="card-button" @click="abrirConfiguracao('/configuracoes/dados-bancarios', 'banco')">
                  Acessar
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3>Alterar Senha</h3>
              </div>
              <p>Troque sua senha de acesso por uma nova.</p>
               <ul><li class="event-item"></li></ul>
              <div class="button-wrapper">
                <button class="card-button" @click="abrirConfiguracao('/configuracoes/alterar-senha', 'senha')">
                  Acessar
                </button>
              </div>
            </div>
          </div>
        </transition>

        <!-- Abas -->
        <transition name="slide-fade">
          <div v-if="mostrarAbas" class="menu-abas">
            <button @click="abrirConfiguracao('/configuracoes/dados-cadastrais', 'dados')" :class="{ active: abaSelecionada === 'dados' }">
              Dados Pessoais
            </button>
            <button @click="abrirConfiguracao('/configuracoes/config-documentos', 'documentos')" :class="{ active: abaSelecionada === 'documentos' }">
              Documentos
            </button>
            <button @click="abrirConfiguracao('/configuracoes/email-endereco', 'email')" :class="{ active: abaSelecionada === 'email' }">
              E-mail/Endereço
            </button>
            <button @click="abrirConfiguracao('/configuracoes/dados-bancarios', 'banco')" :class="{ active: abaSelecionada === 'banco' }">
              Dados Bancários
            </button>
            <button @click="abrirConfiguracao('/configuracoes/alterar-senha', 'senha')" :class="{ active: abaSelecionada === 'senha' }">
              Alterar Senha
            </button>
          </div>
        </transition>

        <!-- Conteúdo das views filhas -->
        <transition name="fade-in-aba">
          <div if="mostrarAbas">
            <router-view />
          </div>
        </transition>
      </main>

      <FooterR />
    </div>
  </div>
</template>

<style scoped>
.aba-content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  padding: 1.5rem;
  width: 100%;
}

.card {
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  font-weight: normal;
  height: auto;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 400px;
  min-height: 250px;
  padding: 1.25rem;
  text-align: left;
  width: 100%;
}

.card-button {
  background-color: #144575;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.2s ease;
  width: 100%;
}

.card-button:hover {
  background-color: #103a60;
}

.card-header h3 {
  color: #144575;
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
  text-align: center;
}

.card p {
  color: #555;
  font-size: 0.9rem;
}

.cards-container {
  box-sizing: border-box;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  height: auto;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.5rem;
  width: 100%;
}

.content-area {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.event-item {
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
}

.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.main-content {
  align-items: center;
  background-color: #f5f5f5;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  padding: 2rem;
}

.main-content.center-cards {
  justify-content: center;
}

.menu-abas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.menu-abas button {
  background-color: #e0e0e0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  transition: background-color 0.3s ease;
}

.menu-abas button.active,
.menu-abas button:hover {
  background-color: #004080;
  color: white;
}

/* Animações */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-in-aba-enter-active,
.fade-in-aba-leave-active {
  transition: opacity 0.4s ease;
}

.fade-in-aba-enter-from,
.fade-in-aba-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
