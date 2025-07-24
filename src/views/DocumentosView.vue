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
  { titulo: 'Grade de Horário Individual', caminho: '/pdf/Horario_Individual.pdf' },
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
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Documentos"/>

      <main class="main-content">
        <div id="links-content">
          <div id="title">
            <h3>Documento</h3>
            <h3>Download</h3>
          </div>

          <div 
            class="link-card" 
            v-for="doc in documentos" 
            :key="doc.titulo" 
            @click="abrirLink(doc.titulo, doc.caminho)"
          >
            <div class="link-header">
              <p>{{ doc.titulo }}</p>
              <i class="fa-solid fa-download" @click.stop="abrirLink(doc.titulo, doc.caminho)"></i>
            </div>
          </div> 
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
  overflow: hidden;
}
.content-area {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.main-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
}
#links-content {
  width: 60%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
}
#title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #144575;
  padding: 0.5rem;
  flex-wrap: wrap;
}
#title h3 {
  font-size: 1.3rem;
}
.link-card {
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  background-color: #f7f9fb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.link-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
.link-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.link-header p {
  font-weight: 650;
  word-break: break-word;
}
.link-header i {
  font-size: 1.5rem;
  color: #333;
}
.link-card:hover .link-header i {
  color: #144575;
}
@media (max-width: 768px) {
  #links-content {
    width: 95%;
    padding: 0.8rem;
  }
  .main-content {
    padding: 1rem 0.5rem;
  }
  #title p {
    font-size: 1rem;
  }
  .link-header p {
    font-size: 0.95rem;
  }
  .link-header i {
    font-size: 1.3rem;
  }
}
</style>