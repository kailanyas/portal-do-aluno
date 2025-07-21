<script setup>
import { ref } from 'vue'

import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'
import Cards from '@/components/DisciplinasCard.vue'
import Modal from '@/components/Modal.vue'
import Dropdown from '@/components/DropDown.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

const open = ref(false)
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Minhas Disciplinas" />

      <main class="main-content">
        <Dropdown class="dropdown" titulo="Disciplinas 2025/1" :abertoInicialmente="true">
          <div class="cards">
            <div class="card">
              <div class="cardHeader"><h3>Desenvolvimento Web</h3></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Giuliano Prado</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Período:</strong> 2025/1</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button>Diário de Classe</button>
                <button>Programa de Disciplina</button>
              </div>
            </div>

            <div class="card">
              <div class="cardHeader"><h3>Banco de Dados</h3></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Antônio Almeida</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Período:</strong> 2025/1</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button>Diário de Classe</button>
                <button>Programa de Disciplina</button>
              </div>
            </div>

            <div class="card">
              <div class="cardHeader"><h3>Engenharia de Software</h3></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Clayton Fraga</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Período:</strong> 2025/1</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button>Diário de Classe</button>
                <button>Programa de Disciplina</button>
              </div>
            </div>

            <div class="card">
              <div class="cardHeader"><h3>Redes de Computadores</h3></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Helder Amorim</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Período:</strong> 2025/1</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button>Diário de Classe</button>
                <button>Programa de Disciplina</button>
              </div>
            </div>
          </div>
        </Dropdown>

        <Dropdown class="dropdown" titulo="Disciplinas 2024/2">
          <div class="cards">
            <div class="card">
              <div class="cardHeader"><h3>Teoria dos grafos</h3></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Edmar Hell</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Período:</strong> 2025/1</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button>Diário de Classe</button>
                <button>Programa de Disciplina</button>
              </div>
            </div>

            <div class="card">
              <div class="cardHeader"><h3>Inteligência Artificial</h3></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Jacson Silva</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Período:</strong> 2025/1</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button>Diário de Classe</button>
                <button>Programa de Disciplina</button>
              </div>
            </div>

            <div class="card">
              <div class="cardHeader"><h3>Engenharia de Requisitos</h3></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Bruno Vilela</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Período:</strong> 2025/1</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button>Diário de Classe</button>
                <button>Programa de Disciplina</button>
              </div>
            </div>
          </div>
        </Dropdown>
      </main>

      <FooterR />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  width: 100vw;
  background-color: var(--dark-blue-bg);
}

.content-area {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-content {
  flex: 1;
  overflow-y: auto; /* Apenas uma declaração é necessária */
  padding: 1.5rem;
  box-sizing: border-box;
}

.dropdown {
  width: 100%;
  /* REMOVIDO: overflow-y: auto; */
  /* REMOVIDO: max-height: 100%; */
}

.dropdown :deep(.dropdown-header) {
  background-color: transparent !important;
  color: var(--text-light);
  font-size: 1.5rem;
  padding: 0 0 1rem 0;
  border-bottom: 2px solid var(--border-color);
  margin-bottom: 1.5rem;
  /* REMOVIDO: overflow-y: auto; */ /* Esta propriedade era desnecessária aqui */
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

/* O restante do seu CSS permanece o mesmo... */

.card {
  background-color: #f5f5f5;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.cardHeader {
  padding: 1rem 1.5rem;
  background-color: var(--card-bg);
}

.cardHeader h3 {
  font-size: 1.25rem;
  text-align: center;
  margin: 0;
  font-weight: 600;
  color: #144575;
}

.cardBody {
  background-color: var(--text-light);
  flex-grow: 1;
  padding: 1.5rem;
}

.cardBody p {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  color: var(--text-dark);
  line-height: 1.5;
}

.cardBody p:last-child {
  margin-bottom: 0;
}

.cardBody strong {
  color: #000;
}

.cardFooter {
  background-color: var(--text-light);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 0.75rem;
  border-top: 1px solid #e0e0e0;
}

.cardFooter button {
  color: #f5f5f5;
}

.cardFooter button,
.cardFooter :deep(.btn-open) {
  flex: 1 1 auto;
  min-height: 3rem;
  font-size: 0.9rem;
  background-color: #144575;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.cardFooter button:hover,
.cardFooter :deep(.btn-open:hover) {
  background-color: #103a60;
}
</style>
