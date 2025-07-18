<script setup>
import { ref } from "vue";
const isSidebarOpen = ref(false);
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function alterar() {
  alert("Função alterar ainda não implementada");
}

function exibir() {
  alert("Função exibir ainda não implementada");
}

function adicionarEndereco() {
  alert("Função adicionar endereço ainda não implementada");
}
</script>

<template>
  <div class="layout-container">
    <div class="content-area">
      <main class="main-content">
        <h2>Alteração E-mail/Endereço</h2>
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
                <strong>Endereço Principal</strong><br />
                Outros: Rua, Número, Complemento, Bairro, CIDADE<br />
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
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem;
  width: 100%;
}

.content-area {
  width: 100%;
  max-width: 1000px; /* limite máximo de largura mais realista */
  margin: 0 auto; /* centraliza horizontalmente */
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-content {
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Cabeçalho azul com texto branco */
h1 {
  background-color: #004080; /* azul UFES */
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.5rem;
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
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }

  h1 {
    font-size: 1.2rem;
    padding: 8px 16px;
    text-align: center;
  }

  .dados-table {
    display: block;
    width: 100%;
    overflow-x: auto;
    font-size: 0.9rem;
  }

  .dados-table thead {
    display: none; /* Esconde cabeçalho em telas pequenas (opcional) */
  }

  .dados-table tbody tr {
    display: block;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color: white;
    padding: 10px;
  }

  .dados-table td {
    display: block;
    text-align: left;
    border: none;
    padding: 6px 0;
    font-size: 0.9rem;
  }

  .dados-table td::before {
    content: attr(data-label);
    font-weight: bold;
    display: inline-block;
    width: 120px;
    color: #004080;
  }

  .center {
    text-align: center;
  }

  button {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
