<script setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'
import Swal from 'sweetalert2'

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

const documentos = ref([
  { titulo: 'Atestado de Cotista', caminho: '' },
  { titulo: 'Atestado de Matrícula', caminho: '' },
  { titulo: 'Atestado de Reconhecimento', caminho: '' },
  { titulo: 'Comprovante de Matrícula Provisório', caminho: '/pdf/Comprovante_de_matricula.pdf' },
  { titulo: 'Comprovante de Solicitação de Matrícula', caminho: '' },
  { titulo: 'Comprovante de Rendimentos IR', caminho: '' },
  { titulo: 'Currículo de Cursos', caminho: '' },
  { titulo: 'Estágio', caminho: '' },
  { titulo: 'Ficha Cadastral do Aluno', caminho: '' },
  { titulo: 'Grade de Horário Individual', caminho: '' }, 
  { titulo: 'Histórico Parcial', caminho: '' },
  { titulo: 'Identidade UFES', caminho: '' },
  { titulo: 'Integralização Curricular', caminho: '' },
]);


function abrirLink(titulo, caminho) {
  if (!caminho) {
    Swal.fire({
      title: 'Documento Indisponível',
      text: `O documento "${titulo}" não está disponível para download no momento.`,
      icon: 'info',
      confirmButtonColor: '#144575',
    });
    return;
  }

  Swal.fire({
    title: `Você deseja abrir o arquivo "${titulo}"?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#144575',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar',
    width: '500px'
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(caminho, '_blank', 'noopener')
    }
  })
}


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

function openHorarioModal() { isHorarioModalOpen.value = true; }
function closeHorarioModal() { isHorarioModalOpen.value = false; }
function baixarHorario() { alert('Função para baixar a grade de horário.'); }


function handleItemClick(doc) {
  if (doc.titulo === 'Grade de Horário Individual') {
    openHorarioModal();
  } else {
    abrirLink(doc.titulo, doc.caminho);
  }
}
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Documentos"/>

      <main class="main-content">
        <div id="links-content">
          <div id="title">
            <h2>Documento</h2>
            <h2>Download</h2>
          </div>

          <div 
            class="link-card" 
            v-for="doc in documentos" 
            :key="doc.titulo" 
            @click="handleItemClick(doc)"
          >
            <div class="link-header">
              <p>{{ doc.titulo }}</p>
              <i class="fa-solid fa-download" @click.stop="handleItemClick(doc)"></i>
            </div>
          </div> 
        </div>      
      </main>

      <FooterR />
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isHorarioModalOpen" class="modal-overlay" @click.self="closeHorarioModal">
          <div class="modal-content modal-grande">
            <div class="modal-header">
              <h2>Grade de Horário Individual</h2>
              <button @click="closeHorarioModal" class="close-button">&times;</button>
            </div>
            <div class="modal-body">
              <table class="grade-horario-table">
                <thead>
                  <tr>
                    <th>Horário</th>
                    <th v-for="dia in diasDaSemana" :key="dia">{{ dia }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="horario in horarios" :key="horario">
                    <td class="horario-slot">{{ horario.replace('-', ' às ') }}</td>
                    <td v-for="dia in diasDaSemana" :key="dia" :class="{ 'aula-preenchida': gradeDeHorario[horario][dia] }">
                      {{ gradeDeHorario[horario][dia] }}
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
  </div>
</template>

<style scoped>
.layout-container {
  display: flex; height: 100vh; width: 100vw; overflow: hidden;
}
.content-area {
  display: flex; flex-direction: column; flex: 1; height: 100%; overflow: hidden;
}
.main-content {
  flex: 1; overflow-y: auto; padding: 1.3rem; box-sizing: border-box;
  display: flex; flex-direction: column; align-items: center; scroll-behavior: smooth;
}
#links-content {
  width: 60%; background-color: white; border-radius: 10px;
  display: flex; flex-direction: column; justify-content: center;
  padding: 1rem; box-sizing: border-box;
}
#title {
  display: flex; justify-content: space-between; align-items: center;
  color: #144575; padding: 0.5rem; flex-wrap: wrap;
}
#title h2 { font-size: 1.3rem; }
.link-card {
  padding: 0.8rem 1rem; margin: 0.5rem 0; border-radius: 10px;
  background-color: #f7f9fb; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s; cursor: pointer;
}
.link-card:hover {
  transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
.link-header {
  display: flex; justify-content: space-between; align-items: center; gap: 1rem;
}
.link-header p { font-weight: 650; word-break: break-word; }
.link-header i { font-size: 1.5rem; color: #333; }
.link-card:hover .link-header i { color: #144575; }

@media (max-width: 768px) {
  #links-content { width: 95%; padding: 0.8rem; }
  .main-content { padding: 1rem 0.5rem; }
  #title p { font-size: 1rem; }
  .link-header p { font-size: 0.95rem; }
  .link-header i { font-size: 1.3rem; }
}

.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);
    display: flex; justify-content: center; align-items: center; z-index: 1000;
}
.modal-content {
    background-color: #fff; padding: 1.5rem; border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3); width: 100%;
    max-height: 90vh; display: flex; flex-direction: column;
}
.modal-grande { max-width: 1100px; }
.modal-header {
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; margin-bottom: 1rem;
}
.modal-header h2 { margin: 0; font-size: 1.5rem; color: #144575; }
.close-button { background: none; border: none; font-size: 2rem; color: #718096; cursor: pointer; }
.modal-body { flex-grow: 1; overflow-y: auto; padding: 0 5px; }
.modal-footer {
    display: flex; justify-content: flex-end; gap: 1rem;
    border-top: 1px solid #e2e8f0; padding-top: 1rem; margin-top: 1rem;
}
.btn { padding: 0.75rem 1.5rem; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; transition: background-color 0.2s; }
.btn-primary { background-color: #144575; color: white; }
.btn-primary:hover { background-color: #103a60; }
.btn-secondary { background-color: #edf2f7; color: #4a5568; }
.btn-secondary:hover { background-color: #e2e8f0; }

.grade-horario-table {
    width: 100%; border-collapse: separate; border-spacing: 0 6px;
    text-align: center; font-size: 0.9rem; table-layout: fixed;
}
.grade-horario-table th, .grade-horario-table td {
    border: 1px solid #e2e8f0; padding: 0.5rem; height: 70px;
    vertical-align: middle; border-radius: 8px;
}
.grade-horario-table thead th { background-color: transparent; color: #144575; font-weight: 600; border: none; font-size: 1rem; }
.horario-slot { font-weight: 500; background-color: #f8f9fa; min-width: 110px; font-size: 0.85rem; }
.aula-preenchida { background-color: #e3f2fd; color: #103a60; font-weight: bold; }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
</style>