<script setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'
import Cards from '@/components/SolicitacoesCard.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}


const solicitacoes = ref([
  {
    title: 'Atividades Complementares',
    description: 'Envie e acompanhe suas atividades complementares para validar no seu histórico escolar.',
    route: '/atividades-complementares',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Trancamento de Matrícula',
    description: 'Suspenda temporariamente suas atividades acadêmicas sem perder o vínculo, via TMA ou TMJ, conforme prazos.',
    route: '/trancamento-matricula',
    disabled: true,
    disabledReason: 'Prazo para solicitação encerrado em 19/07/2025.'
  },
  {
    title: 'Desistência de Curso',
    description: 'Realize a solicitação para cancelar seu vínculo com o curso atual. Atenção: esta ação é irreversível.',
    route: '/desistencia-curso',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Colação de Grau/Diploma',
    description: 'Confira seus dados cadastrais para a colação de grau e emissão do Diploma Digital, evitando taxas futuras.',
    route: '/colacao-de-grau',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Comprovante de Vacinação',
    description: 'Envie e acompanhe o status do seu comprovante de vacinação para registro acadêmico.',
    route: '/comprovante-vacinacao',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Estágio Obrigatório',
    description: 'Envie os documentos exigidos para o cadastro de seu estágio obrigatório no E-Social, conforme orientação da Coordenação.',
    route: '/estagio-obrigatorio',
    disabled: false,
    disabledReason: ''
  },
]);
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Solicitações" />

      <main class="main-content">
        <Cards :listaDeCards="solicitacoes" />
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
        margin-top: 3.2rem;
        

        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>