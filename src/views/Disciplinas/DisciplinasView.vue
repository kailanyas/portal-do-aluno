<script setup>
  import { ref } from 'vue'
  import SideBar from '@/components/SideBar.vue'
  import HeaderC from '@/components/Header.vue'
  import FooterR from '@/components/Footer.vue'
  import Cards from '@/components/DisciplinasCard.vue'
  
  const isSidebarOpen = ref(false)
  function toggleSidebar() {
      isSidebarOpen.value = !isSidebarOpen.value
  }

  const isModalOpen = ref(false);

  // Dados das ementas que serão exibidos na lista
  const ementasData = {
    'Desenvolvimento Web': {
      disciplina: 'COM12345 - Desenvolvimento Web',
      chTotal: '60h',
      creditos: 4,
      ementa: 'Fundamentos do desenvolvimento web. HTML, CSS e JavaScript. Frameworks front-end (Vue.js/React). Noções de back-end com Node.js. APIs REST. Bancos de dados para web. Práticas de responsividade e acessibilidade.'
    },
    'Banco de Dados': {
      disciplina: 'COM54321 - Banco de Dados',
      chTotal: '60h',
      creditos: 4,
      ementa: 'Conceitos de sistemas de bancos de dados. Modelagem de dados conceitual, lógica e física. Modelo relacional, álgebra relacional e cálculo relacional. Linguagem SQL. Normalização. Noções de bancos de dados NoSQL.'
    },
    'Engenharia de Software': {
      disciplina: 'COM67890 - Engenharia de Software',
      chTotal: '60h',
      creditos: 3,
      ementa: 'Introdução à Engenharia de Software. Processos de software (cascata, ágil, Scrum). Engenharia de requisitos. Análise e projeto de sistemas orientados a objetos com UML. Verificação, validação e testes de software.'
    },
    'Redes de Computadores': {
      disciplina: 'COM09876 - Redes de Computadores',
      chTotal: '60h',
      creditos: 4,
      ementa: 'Conceitos básicos de redes de computadores. Modelo de referência OSI e TCP/IP. Camadas Física, de Enlace, de Rede, de Transporte e de Aplicação. Protocolos fundamentais da Internet. Noções de segurança de redes.'
    }
  };

 
  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function baixarEmenta() {
    alert('Função para baixar a ementa será implementada aqui!');
  }
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            
            <HeaderC titulo="Disciplinas"/>

            <main class="main-content">
                <Cards @abrirEmentaModal="openModal" />
            </main>

            <FooterR />
        </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            
            <div class="modal-header">
              <h3>Ementas das Disciplinas</h3>
              <button @click="closeModal" class="close-button">&times;</button>
            </div>
            
            <div class="modal-body">
              <div v-for="(ementa, nome) in ementasData" :key="nome" class="ementa-container">
                <div class="ementa-item">
                  <strong>Disciplina:</strong> {{ ementa.disciplina }}
                </div>
                <div class="ementa-item">
                  <strong>CH Total e Créditos:</strong> {{ ementa.chTotal }} - {{ ementa.creditos }} créditos
                </div>
                <div class="ementa-item">
                  <strong>Ementa:</strong>
                  <p class="ementa-texto">{{ ementa.ementa }}</p>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button @click="closeModal" class="btn btn-secondary">Voltar</button>
              <button @click="baixarEmenta" class="btn btn-primary">Baixar</button>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background-color: #fff;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.3);
      width: 100%;
      max-width: 700px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }

    .modal-header h3 {
      margin: 0;
      font-size: 1.5rem;
      color: #144575;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 2rem;
      color: #718096;
      cursor: pointer;
    }

    .modal-body {
      flex-grow: 1;
      overflow-y: auto;
      padding-right: 10px;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      border-top: 1px solid #e2e8f0;
      padding-top: 1rem;
      margin-top: 1rem;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .btn-primary {
      background-color: #144575;
      color: white;
    }
    .btn-primary:hover {
      background-color: #103a60;
    }

    .btn-secondary {
      background-color: #edf2f7;
      color: #4a5568;
    }
    .btn-secondary:hover {
      background-color: #e2e8f0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
      transition: opacity 0.3s ease;
    }
    .modal-fade-enter-from,
    .modal-fade-leave-to {
      opacity: 0;
    }
    
    .ementa-item {
      margin-bottom: 1rem;
      font-size: 1rem;
      line-height: 1.6;
    }
    .ementa-item strong {
      color: #144575;
    }
    .ementa-texto {
      margin-top: 0.5rem;
      text-align: justify;
      color: #4a5568;
    }
    

    .ementa-container {
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid #e2e8f0;
    }
    .ementa-container:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
</style>