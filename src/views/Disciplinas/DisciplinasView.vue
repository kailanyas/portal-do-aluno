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

  
  const isEmentaModalOpen = ref(false);
  const ementasData = {
    'Desenvolvimento Web': { disciplina: 'COM12345 - Desenvolvimento Web', chTotal: '60h', creditos: 4, ementa: 'Fundamentos do desenvolvimento web. HTML, CSS e JavaScript. Frameworks front-end (Vue.js/React). Noções de back-end com Node.js. APIs REST. Bancos de dados para web. Práticas de responsividade e acessibilidade.' },
    'Banco de Dados': { disciplina: 'COM54321 - Banco de Dados', chTotal: '60h', creditos: 4, ementa: 'Conceitos de sistemas de bancos de dados. Modelagem de dados conceitual, lógica e física. Modelo relacional, álgebra relacional e cálculo relacional. Linguagem SQL. Normalização. Noções de bancos de dados NoSQL.' },
    'Engenharia de Software': { disciplina: 'COM67890 - Engenharia de Software', chTotal: '60h', creditos: 3, ementa: 'Introdução à Engenharia de Software. Processos de software (cascata, ágil, Scrum). Engenharia de requisitos. Análise e projeto de sistemas orientados a objetos com UML. Verificação, validação e testes de software.' },
    'Redes de Computadores': { disciplina: 'COM09876 - Redes de Computadores', chTotal: '60h', creditos: 4, ementa: 'Conceitos básicos de redes de computadores. Modelo de referência OSI e TCP/IP. Camadas Física, de Enlace, de Rede, de Transporte e de Aplicação. Protocolos fundamentais da Internet. Noções de segurança de redes.' }
  };
  function openEmentaModal() { isEmentaModalOpen.value = true; }
  function closeEmentaModal() { isEmentaModalOpen.value = false; }
  function baixarEmenta() { alert('Função para baixar a ementa.'); }


  const isHorarioModalOpen = ref(false);
  const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const horarios = ["08:00-10:00", "10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00", "18:00-20:00", "20:00-22:00"];
  
  const gradeDeHorario = ref({
      "08:00-10:00": { "Segunda": "Cálculo I", "Terça": "Banco de Dados", "Quarta": "Cálculo I", "Quinta": "Banco de Dados", "Sexta": null, "Sábado": null },
      "10:00-12:00": { "Segunda": "Desenvolvimento Web", "Terça": "Engenharia de Software", "Quarta": null, "Quinta": "Engenharia de Software", "Sexta": "Redes de Computadores", "Sábado": null },
      "12:00-14:00": { "Segunda": null, "Terça": null, "Quarta": null, "Quinta": null, "Sexta": null, "Sábado": null },
      "14:00-16:00": { "Segunda": "Redes de Computadores", "Terça": null, "Quarta": "Banco de Dados", "Quinta": null, "Sexta": null, "Sábado": null },
      "16:00-18:00": { "Segunda": null, "Terça": null, "Quarta": null, "Quinta": null, "Sexta": null, "Sábado": null },
      "18:00-20:00": { "Segunda": "Estrutura de Dados", "Terça": "Inteligência Artificial", "Quarta": null, "Quinta": "Inteligência Artificial", "Sexta": null, "Sábado": null },
      "20:00-22:00": { "Segunda": "Estrutura de Dados", "Terça": null, "Quarta": null, "Quinta": null, "Sexta": null, "Sábado": null },
  });
  
  function isHorarioAtual(dia, horario) {
    const diaAtual = "Segunda"; 
    const horaAtual = 10.5;
    const [inicio, fim] = horario.split('-').map(h => parseInt(h.split(':')[0]));
    return dia === diaAtual && horaAtual >= inicio && horaAtual < fim;
  }

  function openHorarioModal() { isHorarioModalOpen.value = true; }
  function closeHorarioModal() { isHorarioModalOpen.value = false; }
  function baixarHorario() { alert('Função para baixar a grade de horário.'); }
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />
        <div class="content-area">
            <HeaderC titulo="Disciplinas"/>
            <main class="main-content">
                <Cards @abrirEmentaModal="openEmentaModal" @abrirHorarioModal="openHorarioModal" />
            </main>
            <FooterR />
        </div>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isEmentaModalOpen" class="modal-overlay" @click.self="closeEmentaModal">
          <div class="modal-content">
            <div class="modal-header">
              <h2>Ementas das Disciplinas</h2>
              <button @click="closeEmentaModal" class="close-button" aria-label="Fechar modal">&times;</button>
            </div>
            <div class="modal-body">
              <div v-for="(ementa, nome) in ementasData" :key="nome" class="ementa-container">
                <div class="ementa-item"><strong>Disciplina:</strong> {{ ementa.disciplina }}</div>
                <div class="ementa-item"><strong>CH Total e Créditos:</strong> {{ ementa.chTotal }} - {{ ementa.creditos }} créditos</div>
                <div class="ementa-item"><strong>Ementa:</strong><p class="ementa-texto">{{ ementa.ementa }}</p></div>
              </div>
            </div>
            <div class="modal-footer">
              <button @click="closeEmentaModal" class="btn btn-secondary">Voltar</button>
              <button @click="baixarEmenta" class="btn btn-primary">Baixar</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isHorarioModalOpen" class="modal-overlay" @click.self="closeHorarioModal">
          <div class="modal-content modal-grande">
            <div class="modal-header">
              <h2>Grade de Horário - 2025/1</h2>
               <button @click="closeHorarioModal" class="close-button" aria-label="Fechar modal">&times;</button>
            </div>
            <div class="modal-body">
              <table class="grade-horario-table">
                <thead>
                  <tr>
                    <th scope="col">Horário</th>
                    <th v-for="dia in diasDaSemana" :key="dia" scope="col">{{ dia }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="horario in horarios" :key="horario">
                    <th scope="row" class="horario-slot">{{ horario.replace('-', ' às ') }}</th>
                    <td 
                      v-for="dia in diasDaSemana" 
                      :key="dia" 
                      :class="{ 
                        'aula-preenchida': gradeDeHorario[horario][dia],
                        'horario-atual': isHorarioAtual(dia, horario)
                      }"
                    >
                      <div v-if="gradeDeHorario[horario][dia]" class="aula-content">
                        {{ gradeDeHorario[horario][dia] }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button @click="closeHorarioModal" class="btn btn-secondary">Voltar</button>
              <button @click="baixarHorario" class="btn btn-primary">Baixar</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
</template>

<style scoped>
    .layout-container {
        display: flex; height: 100vh; width: 100vw;
    }
    .content-area {
        display: flex; flex-direction: column; flex: 1; height: 100vh; overflow: hidden;
    }
    .main-content {
        flex: 1; overflow-y: auto; padding: 1.5rem; box-sizing: border-box; display: flex; flex-direction: column; align-items: center;
    }
    .modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);
        display: flex; justify-content: center; align-items: center; z-index: 1000;
    }
    .modal-content {
        background-color: #fff; padding: 1.5rem; border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3); width: 100%; max-width: 700px;
        max-height: 90vh; display: flex; flex-direction: column;
    }
    .modal-header {
        display: flex; justify-content: space-between; align-items: center;
        border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; margin-bottom: 1rem;
    }
    
    .modal-header h2 {
        margin: 0; font-size: 1.5rem; color: #144575;
    }
    .close-button {
        background: none; border: none; font-size: 2rem; color: #718096; cursor: pointer;
    }
    .modal-body {
        flex-grow: 1; overflow-y: auto; padding-right: 10px;
    }
    .modal-footer {
        display: flex; justify-content: flex-end; gap: 1rem;
        border-top: 1px solid #e2e8f0; padding-top: 1rem; margin-top: 1rem;
    }
    .btn {
        padding: 0.75rem 1.5rem; border: none; border-radius: 8px; font-weight: 700;
        cursor: pointer; transition: background-color 0.2s;
    }
    .btn-primary {
        background-color: #144575; color: white;
    }
    .btn-primary:hover {
        background-color: #103a60;
    }
    .btn-secondary {
        background-color: #edf2f7; color: #4a5568;
    }
    .btn-secondary:hover {
        background-color: #e2e8f0;
    }
    .modal-fade-enter-active, .modal-fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .modal-fade-enter-from, .modal-fade-leave-to {
        opacity: 0;
    }
    .ementa-item {
        margin-bottom: 1rem; font-size: 1rem; line-height: 1.6;
    }
    .ementa-item strong {
        color: #144575;
    }
    .ementa-texto {
        margin-top: 0.5rem; text-align: justify; color: #4a5568;
    }
    .ementa-container {
        padding-bottom: 1.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0;
    }
    .ementa-container:last-child {
        border-bottom: none; margin-bottom: 0; padding-bottom: 0;
    }
    
    .modal-grande {
        max-width: 1100px; 
    }
    .grade-horario-table {
        width: 100%;
        border-collapse: separate; 
        border-spacing: 0 6px; 
        text-align: center;
        font-size: 0.9rem;
        table-layout: fixed;
    }
    .grade-horario-table th,
    .grade-horario-table td {
        border: 1px solid #e2e8f0;
        padding: 0.5rem;
        height: 70px;
        vertical-align: middle;
        border-radius: 8px; 
    }
    .grade-horario-table thead th {
        background-color: transparent;
        color: #144575;
        font-weight: 600;
        border: none;
        font-size: 1rem;
    }
    .horario-slot {
        font-weight: 500;
        background-color: #f8f9fa;
        min-width: 110px;
        font-size: 0.85rem;
    }
    .aula-preenchida {
        background-color: #e3f2fd;
        color: #103a60;
        font-weight: bold;
    }
    .horario-atual {
        border: 2px solid #ef5350;
        box-shadow: 0 0 10px rgba(239, 83, 80, 0.5);
        position: relative;
        z-index: 2;
    }
    .aula-content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>