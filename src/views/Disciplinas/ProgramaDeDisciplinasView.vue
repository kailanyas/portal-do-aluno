<script setup>
import { ref, watch } from 'vue'
import Swal from 'sweetalert2'

import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
}

const isModalOpen = ref(false);
const modalContent = ref(null);

const programasData = {
  'cc': { 
      tipo: 'programa',
      disciplina: 'COM06850 - INTRODUÇÃO A CIÊNCIA DA COMPUTAÇÃO',
      cargaHoraria: { total: 60, teorica: 60, exercicio: 0, laboratorio: 0 },
      creditos: 4,
      objetivos: 'Apresentar ao aluno uma visão abrangente do curso de Ciência da Computação, do mercado de trabalho e das áreas de atuação profissional.',
      ementa: 'Visão histórica, perspectivas e aplicação da computação. Cursos superiores de computação no Brasil. Mercado de trabalho. Áreas de especialização. A estrutura básica de um computador digital: hardware e software. Sistemas de numeração. Ciclo de vida de software.',
      bibliografiaBasica: ['Livro de Introdução à Computação A', 'Livro de Introdução à Computação B'],
      bibliografiaComplementar: ['Artigos e publicações da SBC']
  },
  'si': { 
      tipo: 'programa',
      disciplina: 'COM10394 - REDES DE COMPUTADORES',
      cargaHoraria: { total: 60, teorica: 45, exercicio: 0, laboratorio: 15 },
      creditos: 4,
      objetivos: 'Estudar a arquitetura e os protocolos utilizados nas redes de computadores, com foco no modelo TCP/IP.',
      ementa: 'Conceitos básicos de redes de computadores. Modelo de referência OSI e TCP/IP. Camadas Física, de Enlace, de Rede, de Transporte e de Aplicação. Protocolos fundamentais da Internet. Noções de segurança de redes.',
      bibliografiaBasica: ['Kurose & Ross - Redes de Computadores e a Internet'],
      bibliografiaComplementar: ['Tanenbaum & Wetherall - Redes de Computadores']
  },
  'es': { 
      tipo: 'programa',
      disciplina: 'COM67890 - ENGENHARIA DE SOFTWARE',
      cargaHoraria: { total: 60, teorica: 60, exercicio: 0, laboratorio: 0 },
      creditos: 3,
      objetivos: 'Apresentar os principais conceitos e práticas da Engenharia de Software para o desenvolvimento de sistemas de qualidade.',
      ementa: 'Introdução à Engenharia de Software. Processos de software (cascata, ágil, Scrum). Engenharia de requisitos. Análise e projeto de sistemas orientados a objetos com UML. Verificação, validação e testes de software.',
      bibliografiaBasica: ['Pressman & Maxim - Engenharia de Software: Uma Abordagem Profissional'],
      bibliografiaComplementar: ['Sommerville, I. - Engenharia de Software']
  }
};

function openModal() {
  if (!selectedItem.value) {
    Swal.fire('Atenção', 'Por favor, selecione um departamento e uma disciplina.', 'warning');
    return;
  }
  
  const data = programasData[selectedItem.value];
  if (data) {
    modalContent.value = data;
    isModalOpen.value = true;
  } else {
    Swal.fire('Oops...', `Conteúdo para a disciplina selecionada não foi encontrado.`, 'info');
  }
}

function closeModal() {
  isModalOpen.value = false;
  modalContent.value = null;
}

function baixarConteudo() {
    alert(`Função para baixar o conteúdo será implementada aqui!`);
}

const data = {
    professores: [
        { value: 'cc', text: 'Introdução a Ciência da Computação' },
        { value: 'si', text: 'Redes de computadores' },
        { value: 'es', text: 'Engenharia de Software' }
    ],
    disciplinas: [
        { value: 'dev_web', text: 'Cálculo I' },
        { value: 'banco_dados', text: 'Algebra Linear' },
        { value: 'eng_software', text: 'Matemática Básica' }
    ],
    cursos: [
        { value: 'cc', text: 'Introdução a Biologia' },
        { value: 'si', text: 'Biologia orgânica' },
        { value: 'es', text: 'Parasitologia' }
    ]
};
const selectedCategory = ref('');
const selectedItem = ref('');
const subOptions = ref([]);
const searchTerm = ref('');

watch(selectedCategory, (newCategory) => {
    selectedItem.value = '';
    subOptions.value = data[newCategory] || [];
});

// ✨ --- FUNÇÃO DE BUSCA IMPLEMENTADA --- ✨
function handleSearch() {
    if (!searchTerm.value.trim()) {
        Swal.fire('Atenção', 'Por favor, digite um termo para a busca.', 'warning');
        return;
    }

    const termoBusca = searchTerm.value.toLowerCase().trim();
    let encontrado = null;

    // Object.values() transforma o objeto de programas em um array para podermos usar .find()
    encontrado = Object.values(programasData).find(programa => 
        programa.disciplina.toLowerCase().includes(termoBusca)
    );

    if (encontrado) {
        modalContent.value = encontrado;
        isModalOpen.value = true;
    } else {
        Swal.fire('Não encontrado', `Nenhum programa de disciplina encontrado para o termo "${searchTerm.value}".`, 'info');
    }
}
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            <HeaderC titulo="Programas de Disciplinas"/>
            <main class="main-content">
                <div class="card card-grande">
                    <div class="cardHeader">
                        <h2>Busca de Programas de Disciplinas</h2>
                        <p>Selecione os filtros ou pesquise pelo código da disciplina</p>
                    </div>
                    
                    <div class="cardBody">
                        <form class="filter-form" @submit.prevent="handleSearch">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="category-select">Departamento</label>
                                    <select id="category-select" v-model="selectedCategory">
                                        <option disabled value="">Selecione uma categoria...</option>
                                        <option value="professores">Departamento Computação</option>
                                        <option value="disciplinas">Departamento Matemática</option>
                                        <option value="cursos">Departamento Biologia</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="item-select">Disciplina</label>
                                    <select id="item-select" v-model="selectedItem" :disabled="!selectedCategory">
                                        <option disabled value="">Selecione um item...</option>
                                        <option v-for="option in subOptions" :key="option.value" :value="option.value">
                                            {{ option.text }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-button">
                                    <button id="botaoBaixar" type="button" @click="openModal">Abrir</button>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="search-input">Pesquisar</label>
                                <div class="search-bar">
                                    <input 
                                        type="text" 
                                        id="search-input" 
                                        v-model="searchTerm" 
                                        placeholder="Digite o código ou nome da disciplina..."
                                        @keyup.enter.prevent="handleSearch"
                                    >
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <FooterR />
        </div>

        <Teleport to="body">
            <Transition name="modal-fade">
                <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>Programa de Disciplina</h2>
                            <button @click="closeModal" class="close-button">&times;</button>
                        </div>
                        
                        <div class="modal-body" v-if="modalContent">
                            <div class="info-principal">
                                <div><strong>Disciplina:</strong> {{ modalContent.disciplina }}</div>
                                <div><strong>Créditos:</strong> {{ modalContent.creditos }}</div>
                                <div><strong>Carga Horária Semestral:</strong> {{ modalContent.cargaHoraria.total }}h</div>
                            </div>
                             <div class="info-ch">
                                <span><strong>Teórica:</strong> {{ modalContent.cargaHoraria.teorica }}h</span>
                                <span><strong>Exercícios:</strong> {{ modalContent.cargaHoraria.exercicio }}h</span>
                                <span><strong>Laboratório:</strong> {{ modalContent.cargaHoraria.laboratorio }}h</span>
                            </div>

                            <div class="section">
                                <h6>Objetivos da Disciplina</h6>
                                <p>{{ modalContent.objetivos }}</p>
                            </div>
                            <div class="section">
                                <h6>Ementa da Disciplina</h6>
                                <p>{{ modalContent.ementa }}</p>
                            </div>
                            <div class="section">
                                <h6>Bibliografia</h6>
                                <ul>
                                    <li v-for="item in modalContent.bibliografiaBasica" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                             <div class="section">
                                <h6>Bibliografia Complementar</h6>
                                <ul>
                                    <li v-for="item in modalContent.bibliografiaComplementar" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button @click="closeModal" class="btn btn-secondary">Voltar</button>
                            <button @click="baixarConteudo" class="btn btn-primary">Baixar</button>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<style scoped>
    /* --- ESTRUTURA GERAL DA PÁGINA --- */
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
    }

    /* --- CARD PRINCIPAL E FORMULÁRIO --- */
    .card {
        background-color: #f5f5f5;
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
        overflow: hidden; 
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .card-grande {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }

    .cardHeader {
        background-color: #f5f5f5;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--border-color);
    }

    .cardHeader h2 {
        font-size: 1.5rem;
        color: #144575;
        margin: 0 0 0.25rem 0;
        font-weight: 600;
    }

    .cardHeader p {
        font-size: 0.9rem;
        color: var(--text-light);
        margin: 0;
        opacity: 0.8;
    }

    .cardBody {
        background-color: var(--form-bg);
        flex-grow: 1; 
        padding: 2rem;
    }

    .filter-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-row {
        display: flex;
        gap: 1.5rem;
        align-items: flex-end;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .form-group label {
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: var(--text-dark);
    }

    .form-group select,
    .form-group input {
        width: 100%;
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid var(--form-border);
        border-radius: 8px;
        background-color: #fff;
        transition: border-color 0.2s ease;
    }

    .form-group select:focus,
    .form-group input:focus {
        outline: none;
        border-color: var(--accent-blue);
        box-shadow: 0 0 0 3px rgba(90, 130, 170, 0.2);
    }

    .form-group select:disabled {
        background-color: #edf2f7;
        cursor: not-allowed;
    }

    #botaoBaixar,
    .search-bar button {
        padding: 0.75rem 1.5rem;
        height: calc(1.5rem + 2 * 0.75rem + 2px); 
        border: none;
        background-color: #144575;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.2s ease;
    }

    #botaoBaixar:hover,
    .search-bar button:hover {
        background-color: #103a60;
    }

    .search-bar {
        display: flex;
    }

    .search-bar input {
        flex: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .search-bar button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    /* --- MODAL --- */
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
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        width: 100%;
        max-width: 800px;
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
        margin-bottom: 1.5rem;
    }

    .modal-header h2 {
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
        line-height: 1.6;
        padding-right: 1rem;
    }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
        margin-top: 1.5rem;
    }

    .btn-primary {
        background-color: #144575;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
    }

    .btn-primary:hover {
        background-color: #103a60;
    }

    .btn-secondary {
        background-color: #edf2f7;
        color: #4a5568;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
    }

    .btn-secondary:hover {
        background-color: #e2e8f0;
    }

    /* --- CONTEÚDO DO MODAL --- */
    .info-principal {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 0.5rem 1.5rem;
        margin-bottom: 0.5rem;
        padding-bottom: 1rem;
    }

    .info-ch {
        display: flex;
        gap: 2rem;
        padding: 0.5rem 0;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
    }

    .section {
        margin-bottom: 1.5rem;
    }

    .section h6 {
        font-size: 0.9rem;
        text-transform: uppercase;
        color: #103a60;
        border-bottom: 2px solid #144575;
        padding-bottom: 0.25rem;
        margin-bottom: 0.75rem;
    }

    .section p,
    .section ul {
        margin: 0;
        padding-left: 0;
        list-style-position: inside;
    }

    /* --- ANIMAÇÕES --- */
    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }

    /* --- RESPONSIVIDADE --- */
    @media (max-width: 768px) {
        .main-content {
            padding: 1rem;
        }
        .cardBody {
            padding: 1.5rem;
        }
        .form-row {
            flex-direction: column;
            gap: 1.5rem;
            align-items: stretch;
        }
    }
</style>