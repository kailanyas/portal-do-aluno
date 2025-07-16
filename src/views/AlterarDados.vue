<script setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function alterar() {
  alert('Função alterar ainda não implementada')
}

function exibir() {
  alert('Função exibir ainda não implementada')
}

function adicionarEndereco() {
  alert('Função adicionar endereço ainda não implementada')
}
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC />

      <main class="main-content">
        <h1>Alteração de Dados Cadastrais</h1>

        <table class="dados-table">
          <thead>
            <tr>
              <th>Endereço</th>
              <th>Email</th>
              <th colspan="2">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Outros: Rua, Número, Complemento, Bairro, CIDADE<br />
                <strong>endereço principal</strong>
              </td>
              <td>exemplo@email.com</td>
              <td><button @click="alterar">Alterar</button></td>
              <td><button @click="exibir">Exibir</button></td>
            </tr>
            <tr>
              <td colspan="4" class="center">
                <button @click="adicionarEndereco">Adicionar endereço</button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="obs">
          Para excluir ou definir um endereço como principal, entre em alterar
        </p>
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

/* Cabeçalho azul com texto branco */
h1 {
  background-color: #004080; /* azul UFES */
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}

/* Tabela branca com letras azul-ufes */
.dados-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  color: #004080;
  border: 1px solid #004080;
  border-radius: 8px;
  overflow: hidden;
}

.dados-table th {
  background-color: #004080;
  color: white;
  padding: 12px;
  text-align: left;
}

.dados-table td {
  padding: 12px;
  border-top: 1px solid #004080;
}

button {
  background-color: #004080;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0059b3;
}

.center {
  text-align: center;
}

.obs {
  margin-top: 20px;
  font-style: italic;
  color: #004080;
}

</style>
