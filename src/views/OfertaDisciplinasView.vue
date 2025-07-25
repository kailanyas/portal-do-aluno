<script setup>
import { ref, watch, computed } from 'vue'
import Swal from 'sweetalert2'

import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'
import Dropdown from '@/components/DropDown.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
}

const disciplinasAdicionadas = ref([]);
const disciplinasPeriodo = ref([
    { codigo: 'CIC401', nome: 'Computação Gráfica', vagas: 40, status: 'Disponível', horarios: [{ dia: "Segunda", hora: "08:00 - 10:00" }, { dia: "Quarta", hora: "08:00 - 10:00" }], departamento: 'Computação' },
    { codigo: 'CIC402', nome: 'Compiladores', vagas: 40, status: 'Disponível', horarios: [{ dia: "Terça", hora: "10:00 - 12:00" }, { dia: "Quinta", hora: "10:00 - 12:00" }], departamento: 'Computação' },
    { codigo: 'CIC403', nome: 'Inteligência Artificial', vagas: 35, status: 'Disponível', horarios: [{ dia: "Terça", hora: "14:00 - 16:00" }, { dia: "Quinta", hora: "14:00 - 16:00" }], departamento: 'Computação' },
    { codigo: 'CIC404', nome: 'TCC I', vagas: 0, status: 'Lotada', horarios: [{ dia: "Sexta", hora: "08:00 - 10:00" }, { dia: "Sexta", hora: "10:00 - 12:00" }], departamento: 'Computação' },
    { codigo: 'CIC405', nome: 'Redes de Computadores', vagas: 20, status: 'Disponível', horarios: [{ dia: "Segunda", hora: "08:00 - 10:00" }, { dia: "Quarta", hora: "10:00 - 12:00" }], departamento: 'Computação' }
]);
const todasAsDisciplinas = ref([
    ...disciplinasPeriodo.value,
    { codigo: 'MAT001', nome: 'Cálculo I', vagas: 10, status: 'Disponível', horarios: [{ dia: "Segunda", hora: "10:00 - 12:00" }, { dia: "Quarta", hora: "10:00 - 12:00" }], departamento: 'Matemática' },
    { codigo: 'MAT005', nome: 'Algebra Linear', vagas: 5, status: 'Disponível', horarios: [{ dia: "Terça", hora: "08:00 - 10:00" }, { dia: "Quinta", hora: "08:00 - 10:00" }], departamento: 'Matemática' },
    { codigo: 'MAT002', nome: 'Matemática Básica', vagas: 25, status: 'Disponível', horarios: [{ dia: "Sexta", hora: "14:00 - 16:00" }], departamento: 'Matemática' },
    { codigo: 'BIO101', nome: 'Introdução a Biologia', vagas: 15, status: 'Disponível', horarios: [{ dia: "Segunda", hora: "16:00 - 18:00" }], departamento: 'Biologia' },
    { codigo: 'BIO102', nome: 'Biologia Orgânica', vagas: 0, status: 'Lotada', horarios: [{ dia: "Quarta", hora: "16:00 - 18:00" }], departamento: 'Biologia' },
    { codigo: 'BIO203', nome: 'Parasitologia', vagas: 30, status: 'Disponível', horarios: [{ dia: "Sexta", hora: "08:00 - 10:00" }], departamento: 'Biologia' },
    { codigo: 'FIS202', nome: 'Física Moderna', vagas: 3, status: 'Disponível', horarios: [{ dia: "Segunda", hora: "14:00 - 16:00" }, { dia: "Sexta", hora: "14:00 - 16:00" }], departamento: 'Física' }
]);
const data = {
    Computação: [ { value: 'CIC401', text: 'Computação Gráfica' }, { value: 'CIC402', text: 'Compiladores' } ],
    Matemática: [ { value: 'MAT001', text: 'Cálculo I' }, { value: 'MAT005', text: 'Algebra Linear' }, { value: 'MAT002', text: 'Matemática Básica' } ],
    Biologia: [ { value: 'BIO101', text: 'Introdução a Biologia' }, { value: 'BIO102', text: 'Biologia Orgânica' }, { value: 'BIO203', text: 'Parasitologia' } ]
};
const selectedCategory = ref('');
const selectedItem = ref('');
const subOptions = ref([]);
const searchTerm = ref('');
const showResults = ref(false);
const searchResults = ref([]);
watch(selectedCategory, (newCategory) => { selectedItem.value = ''; subOptions.value = data[newCategory] || []; });

function handleDownload() {
  if (selectedCategory.value === 'Matemática' && selectedItem.value === 'MAT005') {
    const link = document.createElement('a');
    link.href = '/pdf/RelatórioOferta-Matematica.pdf'; 
    link.setAttribute('download', 'Ementa_Algebra_Linear.pdf');
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    Swal.fire({
      title: 'Seleção Inválida',
      text: 'A ementa em PDF está disponível apenas para a seleção de "Departamento: Matemática" e "Disciplina: Algebra Linear".',
      icon: 'warning',
      confirmButtonColor: '#144575',
      confirmButtonText: 'Entendi'
    });
  }
}

function handleSearch() {
    if (!selectedCategory.value && !selectedItem.value && !searchTerm.value) {
        alert('Por favor, selecione um filtro ou digite um termo na busca.');
        return;
    }
    let resultadosFiltrados = todasAsDisciplinas.value;
    if (selectedCategory.value) {
        resultadosFiltrados = resultadosFiltrados.filter(d => d.departamento === selectedCategory.value);
    }
    if (selectedItem.value) {
        resultadosFiltrados = resultadosFiltrados.filter(d => d.codigo === selectedItem.value);
    }
    if (searchTerm.value) {
        const termo = searchTerm.value.toLowerCase();
        resultadosFiltrados = resultadosFiltrados.filter(d =>
            d.nome.toLowerCase().includes(termo) ||
            d.codigo.toLowerCase().includes(termo)
        );
    }
    searchResults.value = resultadosFiltrados;
    showResults.value = true;
}

function confirmarEnvio() {
    Swal.fire({
        title: 'Tem certeza que deseja enviar a solicitação de matrícula?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#144575',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar',
        width: '500px'
    }).then((result) => {
        if (result.isConfirmed) {
            submitEvaluation()
        }
    })
}
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />
        <div class="content-area">
            <HeaderC titulo="Oferta de Disciplinas"/>
            <main class="main-content">
                <div class="dropdown-view">
                    <Dropdown titulo="OFERTAS DISCIPLINAS 2025/1" :abertoInicialmente="true" class="drop">
                        <div class="table-wrapper">
                            <table class="results-table">
                                <thead>
                                    <tr>
                                        <th>Curso</th>
                                        <th>Departamento</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Código">Ciência da Computação</td>
                                        <td data-label="Departamento">Computação</td>
                                        <td data-label="Ação">
                                            <button 
                                                class="btn-adicionar">
                                                Baixar
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-label="Código">Sistemas de informação</td>
                                        <td data-label="Disciplina">Computação</td>
                                        <td data-label="Ação">
                                            <button 
                                                class="btn-adicionar">
                                                Baixar
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Dropdown>

                    <Dropdown titulo="BUSCAR OFERTAS DE DISCIPLINAS DE OUTROS CURSOS"  class="drop">
                        <div class="card card-grande">
                            <div class="cardHeader">
                                <p>Selecione os filtros ou pesquise pelo código/nome da disciplina</p>
                            </div>
                            
                            <div class="cardBody">
                                <form class="filter-form" @submit.prevent>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="category-select">Departamento</label>
                                            <select id="category-select" v-model="selectedCategory">
                                                <option disabled value="">Selecione um departamento...</option>
                                                <option value="Computação">Departamento Computação</option>
                                                <option value="Matemática">Departamento Matemática</option>
                                                <option value="Biologia">Departamento Biologia</option>
                                            </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="item-select">Disciplina</label>
                                            <select id="item-select" v-model="selectedItem" :disabled="!selectedCategory">
                                                <option disabled value="">Selecione uma disciplina...</option>
                                                <option v-for="option in subOptions" :key="option.value" :value="option.value">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-button">
                                            <button id="botaoBaixar" type="button" @click="handleDownload">Baixar</button>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="search-input">Pesquisar por Código ou Nome</label>
                                        <div class="search-bar">
                                            <input 
                                                type="text" 
                                                id="search-input" 
                                                v-model="searchTerm" 
                                                placeholder="Digite um termo para a busca..."
                                                @keyup.enter="handleSearch"
                                            >
                                            <button id="botaoBuscaTexto" type="button" @click="handleSearch">Buscar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div v-if="showResults" class="search-results-container">
                                <div class="table-wrapper">
                                    <p v-if="searchResults.length === 0" class="no-results-message">Nenhuma disciplina encontrada com os filtros aplicados.</p>
                                    <table v-else class="results-table">
                                        <thead>
                                            <tr>
                                                <th>Código</th>
                                                <th>Disciplina</th>
                                                <th>Vagas</th>
                                                <th>Ação</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="disciplina in searchResults" :key="`search-${disciplina.codigo}`">
                                                <td data-label="Código">{{ disciplina.codigo }}</td>
                                                <td data-label="Disciplina">{{ disciplina.nome }}</td>
                                                <td data-label="Vagas">
                                                    <span :class="['status-badge', disciplina.status === 'Disponível' ? 'status-disponivel' : 'status-lotada']">
                                                      {{ disciplina.status === 'Disponível' ? `${disciplina.vagas} Vagas` : 'Lotada' }}
                                                    </span>
                                                </td>
                                                <td data-label="Ação">
                                                    <button 
                                                        class="btn-adicionar" 
                                                    >
                                                        Baixar
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </main>
            <FooterR />
        </div>
    </div>
</template>

<style scoped>
    :root {
        --border-color: #e2e8f0;
        --text-light: #4a5568;
        --text-dark: #1a202c;
        --form-bg: #fff;
        --form-border: #cbd5e0;
        --accent-blue: #5A82AA;
    }

    .layout-container { display: flex; height: 100vh; width: 100vw; }
    .content-area { display: flex; flex-direction: column; flex: 1; height: 100vh; overflow: hidden; }
    .main-content { flex: 1; overflow-y: auto; padding: 1rem; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; }
    .dropdown-view {
        border-radius: 14px; 
        background-color:  #f5f5f5;
        width: 100%; 
        max-width: 900px; 
    }

    .table-wrapper { overflow-x: auto; background-color: #f5f5f5;}
    .results-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }
    .results-table th, .results-table td { padding: 0.8rem 1rem; border-bottom: 1px solid #e2e8f0; vertical-align: middle; }
    .results-table thead { border-bottom: 2px solid #cbd5e0; }
    .results-table th { background-color: #144575; font-weight: 600; color: white; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.5px; }
    
    .btn-adicionar { background-color: #38a169; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s ease; white-space: nowrap; }
    .btn-adicionar:hover:not(:disabled) { background-color: #2f855a; }
    .btn-adicionar:disabled { background-color: #a0aec0; cursor: not-allowed; opacity: 0.8; }
    
    .status-badge { padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 600; font-size: 0.8rem; color: #fff; }
    .status-disponivel { background-color: #38a169; }
    .status-lotada { background-color: #e53e3e; }
    
    .drop {
        background-color: #f5f5f5;
    }
    .card-grande {
        background-color: #f5f5f5;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }

    .cardHeader {
        background-color: #f5f5f5;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--border-color);
    }

    .cardHeader h3 {
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
        box-sizing: border-box;
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
    #botaoBuscaTexto {
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
    #botaoBuscaTexto:hover {
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

    .search-results-container {
        padding: 0 1rem 1rem 1rem;
    }
    
    .no-results-message {
        text-align: center;
        padding: 2rem;
        color: var(--text-light);
        background-color: #fff;
        border-radius: 8px;
    }

</style>