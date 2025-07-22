<script setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'
import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'

// Função para pegar todos os domingos de um ano
function getDomingosDoAno(ano) {
  const domingos = []
  let data = new Date(ano, 0, 1) 

  // Avança até o primeiro domingo
  while (data.getDay() !== 0) {
    data.setDate(data.getDate() + 1)
  }

  // Adiciona todos os domingos do ano
  while (data.getFullYear() === ano) {
    domingos.push(new Date(data))
    data.setDate(data.getDate() + 7)
  }

  return domingos
}

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

const hoje = new Date()
const dataAtual = ref(new Date(hoje.getFullYear(), hoje.getMonth(), 1))  // JS zero-based
const mesAtual = ref(hoje.getMonth() + 1)  // v-calendar 1-based
const anoAtual = ref(hoje.getFullYear())

const domingosAnoAtual = getDomingosDoAno(anoAtual.value)

const atributosDatas = ref([
    {
        key: 'domingos',
        highlight: 'green',
        dates: domingosAnoAtual,
    },
    {
        key: 'Recesso',
        highlight: 'green',
        dates: { start: new Date(2025, 6, 14), end: new Date(2025, 6, 18) },
        popover: { label: 'Recesso/Férias docentes' }
    },
    {
        key: 'Padroeira Alegre',
        highlight: 'green',
        dates: [new Date(2025, 7, 15)],
        popover: { label: 'Festa da Padroeira de Alegre' }
    },
    {
        key: 'Termino25/1',
        highlight: 'blue',
        dates: [new Date(2025, 7, 28)],
        popover: { label: 'Término 2025/1' }
    },
    {
        key: 'Recesso',
        highlight: 'green',
        dates: { start: new Date(2025, 8, 5), end: new Date(2025, 8, 21) },
        popover: { label: 'Recesso/Férias docentes' }
    },
    {
        key: 'Independencia',
        highlight: 'green',
        dates: [new Date(2025, 8, 7)],
        popover: { label: 'Independência do Brasil' }
    },
    {
        key: 'Inicio25/2',
        highlight: 'blue',
        dates: [new Date(2025, 8, 22)],
        popover: { label: 'Início 2025/2' }
    },
    {
        key: 'NossaSenhoraAparecida',
        highlight: 'green',
        dates: [new Date(2025, 9, 12)],
        popover: { label: 'Nossa Senhora Aparecida' }
    },
    {
        key: 'ServidorPublico',
        highlight: 'green',
        dates: [new Date(2025, 9, 27)],
        popover: { label: 'Dia do Servidor Público' }
    },
    {
        key: 'Finados',
        highlight: 'green',
        dates: [new Date(2025, 10, 2)],
        popover: { label: 'Finados' }
    },
    {
        key: 'ProclamaçãodaRepública',
        highlight: 'green',
        dates: [new Date(2025, 10, 15)],
        popover: { label: 'Proclamação da República' }
    },
    {
        key: 'ConscNegra',
        highlight: 'green',
        dates: [new Date(2025, 10, 20)],
        popover: { label: 'Dia Nacional de Zumbi e da Consciência Negra' }
    },
    {
        key: 'Recesso',
        highlight: 'green',
        dates: { start: new Date(2025, 11, 22), end: new Date(2026, 0, 20) },
        popover: { label: 'Recesso/Férias docentes' }
    },
    {
        key: 'Natal',
        highlight: 'green',
        dates: [new Date(2025, 11, 25)],
        popover: { label: 'Natal' }
    },
    {
        key: 'Reinicio25/2',
        highlight: 'blue',
        dates: [new Date(2026, 0, 21)],
        popover: { label: 'Reinício das aulas do semestre letivo 2025/2' }
    },
    {
        key: 'Atividades',
        highlight: 'red',
        dates: [new Date(2025, 6, 29)],
        popover: { label: 'Trabalho de Interface Humano-Computador ' }
    },
    {
        key: 'Atividade1',
        highlight: 'red',
        dates: [new Date(2025, 7, 19)],
        popover: { label: 'Prova de Desenvolvimento Web' }
    },
])
</script>


<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Calendário Acadêmico" />

      <main class="main-content">
        <div class="calendar-section">
          <div class="calendar-wrapper">
            <Calendar
                v-model="dataAtual"
                is-expanded
                :attributes="atributosDatas"
                title-position="left"
                show-weeknumbers
                :initial-page="{ month: mesAtual, year: anoAtual }"
                :first-day-of-week="0"
                @update:from-page="({ month, year }) => {
                    mesAtual.value = month
                    anoAtual.value = year
                    dataAtual.value = new Date(year, month - 1, 1)
                }"
            />

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
  padding: 2rem 2rem 1rem;
  box-sizing: border-box;

  display: flex;
  justify-content: center; 
  align-items: center;     
  height: 100vh;           
  overflow: visible;     
}

.calendar-section {
  width: 90%;
  max-width: 900px; 
  height: 70vh;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto; 
  overflow: visible; 
}


.calendar-wrapper {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.calendar-section :deep(.vc-container) {
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  flex-grow: 1;
  box-sizing: border-box;
}

.calendar-section :deep(.vc-title) {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem !important;
  white-space: nowrap; 
  overflow: visible; 
}

.calendar-section :deep(.vc-day) {
  padding: 1rem;
  margin-top: 1rem !important; 
}

.calendar-section :deep(.vc-day-content) {
  font-size: 1.3rem !important;
  font-weight: 600 !important;
}


.calendar-section :deep(.vc-weekday) {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.5rem !important;
}
</style>
