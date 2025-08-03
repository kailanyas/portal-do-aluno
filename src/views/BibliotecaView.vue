<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Biblioteca" />

      <main class="main-content">
        <div class="card-principal">

          <div class="pendencia-section">
            <h2>Pendência com a biblioteca</h2>
            <div v-if="!temPendencia" class="alert alert-success">
              Você não possui nenhuma pendência no momento.
            </div>
            <div v-else class="alert alert-danger">
              Atenção! Você possui livros com devolução atrasada.
            </div>
          </div>

          <div class="emprestimos-section">
            <h2>Meus Empréstimos</h2>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Livro</th>
                    <th>Data do Empréstimo</th>
                    <th>Data de Devolução</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="emprestimo in emprestimos" :key="emprestimo.id">
                    <td>{{ emprestimo.titulo }}</td>
                    <td>{{ emprestimo.dataEmprestimo }}</td>
                    <td>{{ emprestimo.dataDevolucao }}</td>
                    <td>
                      <a 
                        href="https://acervo.ufes.br/login?redirect=/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="btn-renovar"
                        :aria-label="`Renovar empréstimo do livro ${emprestimo.titulo}`"
                      >
                        Renovar
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <FooterR />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import HeaderC from '@/components/Header.vue';
import FooterR from '@/components/Footer.vue';

const isSidebarOpen = ref(false);
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

const temPendencia = ref(false);

const formatarData = (data) => {
  return new Intl.DateTimeFormat('pt-BR').format(data);
};

const calcularDevolucao = (data) => {
  const dataDevolucao = new Date(data);
  const dataAtual = new Date();
  
  const baseDate = data > dataAtual ? data : dataAtual;
  dataDevolucao.setDate(baseDate.getDate() + 30);
  
  return dataDevolucao;
};

const hoje = new Date();
const emprestimos = ref([
  {
    id: 1,
    titulo: 'Cálculo: Volume 1 - James Stewart',
    dataEmprestimo: formatarData(hoje),
    dataDevolucao: formatarData(calcularDevolucao(hoje)),
  },
  {
    id: 2,
    titulo: 'Introdução à Programação com Python - Nilo Ney',
    dataEmprestimo: formatarData(new Date(hoje.getTime() - 10 * 24 * 60 * 60 * 1000)),
    dataDevolucao: formatarData(calcularDevolucao(new Date(hoje.getTime() - 10 * 24 * 60 * 60 * 1000))),
  },
  {
    id: 3,
    titulo: 'Fundamentos de Física: Volume 2 - Halliday & Resnick',
    dataEmprestimo: formatarData(new Date(hoje.getTime() - 25 * 24 * 60 * 60 * 1000)),
    dataDevolucao: formatarData(calcularDevolucao(new Date(hoje.getTime() - 25 * 24 * 60 * 60 * 1000))),
  },
]);

</script>

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
  padding: 2rem;
  box-sizing: border-box;
  background-color: #144575;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.card-principal {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 1200px;
}

h2 {
  color: #144575;
  font-size: 1.5em;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

h3 {
  color: #103a60;
  font-size: 1.3em;
  margin-bottom: 1rem;
}

.pendencia-section {
  margin-bottom: 2.5rem;
}

.alert {
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;
  font-weight: 500;
}

.alert-success {
  background-color: #d1e7dd;
  color: #0f5132;
  border-color: #badbcc;
}

.alert-danger {
  background-color: #f8d7da;
  color: #842029;
  border-color: #f5c2c7;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

thead th {
  background-color: #144575; 
  color: white;             
  font-weight: 600;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

tbody tr:hover {
  background-color: #e9ecef;
}

.btn-renovar {
  background-color: #218838;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
  transition: background-color 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-renovar:hover {
  background-color: #1a682c;
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
    align-items: stretch;
  }
  .card-principal {
    padding: 1rem;
  }
  h2 {
    font-size: 1.3em;
  }
  h3 {
    font-size: 1.1em;
  }
}
</style>