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
    { codigo: 'CIC405', nome: 'Redes de Computadores', vagas: 20, status: 'Disponível', horarios: [{ dia: "Segunda", hora: "08:00 - 10:00" }, { dia: "Quarta", hora: "10:00 - 12:00" }], departamento: 'Computação' } // Conflito com CIC401
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
    Computação: [
        { value: 'CIC401', text: 'Computação Gráfica' },
        { value: 'CIC402', text: 'Compiladores' },
    ],
    Matemática: [
        { value: 'MAT001', text: 'Cálculo I' },
        { value: 'MAT005', text: 'Algebra Linear' },
        { value: 'MAT002', text: 'Matemática Básica' }
    ],
    Biologia: [
        { value: 'BIO101', text: 'Introdução a Biologia' },
        { value: 'BIO102', text: 'Biologia Orgânica' },
        { value: 'BIO203', text: 'Parasitologia' }
    ]
};

const selectedCategory = ref('');
const selectedItem = ref('');
const subOptions = ref([]);
const searchTerm = ref('');
const showResults = ref(false);
const searchResults = ref([]);

// --- LÓGICA DA GRADE DE HORÁRIOS (AGORA PARA DISPLAY) ---
const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const intervalosDeTempo = ["08:00 - 10:00", "10:00 - 12:00", "14:00 - 16:00", "16:00 - 18:00"];

const gradeHorarioDisplay = computed(() => {
    const grade = {};
    intervalosDeTempo.forEach(intervalo => {
        grade[intervalo] = {};
        diasDaSemana.forEach(dia => {
            grade[intervalo][dia] = null;
        });
    });
    disciplinasAdicionadas.value.forEach(disciplina => {
        disciplina.horarios.forEach(h => {
            if (grade[h.hora] && grade[h.hora][h.dia] === null) {
                grade[h.hora][h.dia] = disciplina;
            }
        });
    });
    return grade;
});

// --- FUNÇÕES DE MANIPULAÇÃO E VALIDAÇÃO ---
function verificarConflito(novaDisciplina) {
    for (const disciplinaAdicionada of disciplinasAdicionadas.value) {
        for (const horarioAdicionado of disciplinaAdicionada.horarios) {
            for (const horarioNovo of novaDisciplina.horarios) {
                if (horarioAdicionado.dia === horarioNovo.dia && horarioAdicionado.hora === horarioNovo.hora) {
                    return disciplinaAdicionada;
                }
            }
        }
    }
    return null;
}

function adicionarMateria(materia) {
    if (isAdicionada(materia.codigo)) {
        alert(`A disciplina ${materia.nome} já foi adicionada.`);
        return;
    }
    const conflito = verificarConflito(materia);
    if (conflito) {
        alert(`Conflito de Horário! A disciplina "${materia.nome}" choca com "${conflito.nome}" que já foi adicionada.`);
        return;
    }
    disciplinasAdicionadas.value.push(materia);
}

function removerMateria(codigo) {
    disciplinasAdicionadas.value = disciplinasAdicionadas.value.filter(
        (disciplina) => disciplina.codigo !== codigo
    );
}

function isAdicionada(codigo) {
    return disciplinasAdicionadas.value.some(disciplina => disciplina.codigo === codigo);
}

watch(selectedCategory, (newCategory) => {
    selectedItem.value = '';
    subOptions.value = data[newCategory] || [];
});

// *** CORREÇÃO: Lógica de busca funcional ***
function handleSearch() {
    if (!selectedCategory.value && !selectedItem.value && !searchTerm.value) {
        alert('Por favor, selecione um filtro ou digite um termo na busca.');
        return;
    }

    let resultadosFiltrados = todasAsDisciplinas.value;

    // 1. Filtra por Departamento (categoria)
    if (selectedCategory.value) {
        resultadosFiltrados = resultadosFiltrados.filter(d => d.departamento === selectedCategory.value);
    }
    
    // 2. Filtra por Disciplina específica (item selecionado no segundo dropdown)
    if (selectedItem.value) {
        resultadosFiltrados = resultadosFiltrados.filter(d => d.codigo === selectedItem.value);
    }

    // 3. Filtra pelo termo de busca (no nome ou código da disciplina)
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

function submitEvaluation() {
  Swal.fire({
    title: 'Solicitação de matrícula enviada com sucesso!',
    text: 'Obrigado por sua participação.',
    icon: 'success',
    confirmButtonColor: '#144575',
    confirmButtonText: 'OK',
    width: '500px'
  }).then(() => {
    closeModal()
  })
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
            <HeaderC titulo="Solicitação de Matrícula"/>
            <main class="main-content">
                <div class="dropdown-view">
                    
                    <Dropdown titulo="DISCIPLINAS OBRIGATÓRIAS DO PERÍODO" :abertoInicialmente="true">
                        <div class="table-wrapper">
                            <table class="results-table">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Disciplina</th>
                                        <th>Vagas</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="disciplina in disciplinasPeriodo" :key="disciplina.codigo">
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
                                              :disabled="disciplina.status === 'Lotada' || isAdicionada(disciplina.codigo)"
                                              @click="adicionarMateria(disciplina)">
                                              {{ isAdicionada(disciplina.codigo) ? 'Adicionado ✔' : 'Adicionar' }}
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Dropdown>

                    <Dropdown titulo="BUSCAR POR DISCIPLINAS EM OUTROS CURSOS">
                        <div class="card card-grande">
                            <div class="cardHeader">
                            <p>Selecione os filtros ou pesquise pelo código/nome da disciplina</p>
                            </div>
                            
                            <div class="cardBody">
                            <form class="filter-form" @submit.prevent="handleSearch">
                                
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
                                        <button id="botaoBaixar" type="submit">Buscar</button>
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
                                                        :disabled="disciplina.status === 'Lotada' || isAdicionada(disciplina.codigo)"
                                                        @click="adicionarMateria(disciplina)">
                                                        {{ isAdicionada(disciplina.codigo) ? 'Adicionado ✔' : 'Adicionar' }}
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            </div>
                    </Dropdown>
                    
                    <Dropdown v-if="disciplinasAdicionadas.length > 0" titulo="CONFIRMAR DISCIPLINAS" :abertoInicialmente="true">
                        <div class="solicitacao-final-container">
                            <ul class="lista-solicitacao">
                                <li v-for="disciplina in disciplinasAdicionadas" :key="`cart-${disciplina.codigo}`">
                                    <span>
                                        <strong>{{ disciplina.codigo }}</strong> - {{ disciplina.nome }}
                                    </span>
                                    <button class="btn-remover" @click="removerMateria(disciplina.codigo)">Remover</button>
                                </li>
                            </ul>
                        </div>
                    </Dropdown>

                    <Dropdown v-if="disciplinasAdicionadas.length > 0" titulo="GRADE DE HORÁRIOS PROVISÓRIA" :abertoInicialmente="true">
                        <div class="grade-horario-wrapper">
                            <table class="grade-horario-table">
                                <thead>
                                    <tr>
                                        <th>Horário</th>
                                        <th v-for="dia in diasDaSemana" :key="dia">{{ dia }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="intervalo in intervalosDeTempo" :key="intervalo">
                                        <td>{{ intervalo }}</td>
                                        <td v-for="dia in diasDaSemana" :key="`${dia}-${intervalo}`">
                                            <div v-if="gradeHorarioDisplay[intervalo][dia]" class="disciplina-cell">
                                                <strong>{{ gradeHorarioDisplay[intervalo][dia].codigo }}</strong>
                                                <span>{{ gradeHorarioDisplay[intervalo][dia].nome }}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Dropdown>

                    <div v-if="disciplinasAdicionadas.length > 0" class="solicitacao-final-actions">
                        <button class="btn-solicitar-final" @click="confirmarEnvio">
                            Solicitar Matrícula de {{ disciplinasAdicionadas.length }} Disciplina(s)
                        </button>
                    </div>

                </div>
            </main>
            <FooterR />
        </div>
    </div>
</template>

<style scoped>
    :root {
      /* Adicionando variáveis para cores, se não existirem globalmente */
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
        border-radius: 10px; 
        background-color: #144575;
        width: 100%; 
        max-width: 900px; 
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
        box-sizing: border-box; /* Garante que padding não afete a largura total */
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

    .table-wrapper { overflow-x: auto; background-color: #f5f5f5;}
    .results-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; }
    .results-table th, .results-table td { padding: 0.8rem 1rem; border-bottom: 1px solid #e2e8f0; vertical-align: middle; }
    .results-table thead { border-bottom: 2px solid #cbd5e0; }
    .results-table th { background-color: #f8fafc; font-weight: 600; color: #4a5568; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.5px; }
    
    .btn-adicionar { background-color: #38a169; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.2s ease; white-space: nowrap; }
    .btn-adicionar:hover:not(:disabled) { background-color: #2f855a; }
    .btn-adicionar:disabled { background-color: #a0aec0; cursor: not-allowed; opacity: 0.8; }
    
    .status-badge { padding: 0.25rem 0.6rem; border-radius: 12px; font-weight: 600; font-size: 0.8rem; color: #fff; }
    .status-disponivel { background-color: #38a169; }
    .status-lotada { background-color: #e53e3e; }
    
    .solicitacao-final-container { padding: 1rem; background-color: #f5f5f5; }
    .lista-solicitacao { list-style: none; padding: 0; margin: 0; }
    .lista-solicitacao li { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0.5rem; font-size: 1rem; border-bottom: 1px solid #e2e8f0; }
    .lista-solicitacao li:last-child { border-bottom: none; }
    
    .btn-remover { background-color: #e53e3e; color: white; border: none; border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: background-color 0.2s ease; }
    .btn-remover:hover { background-color: #c53030; }
    
    .solicitacao-final-actions { margin-top: 1.5rem; padding: 1rem; background-color: #144575; border-radius: 12px; text-align: center; }
    .btn-solicitar-final { width: 100%; max-width: 400px; padding: 1rem; font-size: 1.2rem; font-weight: 700; background-color: #38a169; color: white; border: none; border-radius: 8px; cursor: pointer; transition: background-color 0.2s ease; }
    .btn-solicitar-final:hover { background-color: #2f855a; }
    
    .grade-horario-wrapper { padding: 1rem; overflow-x: auto; background-color: #f5f5f5;}
    .grade-horario-table { width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; table-layout: fixed; }
    .grade-horario-table th, .grade-horario-table td { border: 1px solid #e2e8f0; padding: 0.5rem; text-align: center; height: 80px; }
    .grade-horario-table th { background-color: #f8fafc; font-weight: 600; color: #4a5568; font-size: 0.9rem; }
    .grade-horario-table td { vertical-align: top; font-size: 0.85rem; }
    
    .disciplina-cell { background-color: #e3eefc; border-radius: 8px; padding: 0.5rem; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05); color: #3c5a7b; overflow: hidden; }
    .disciplina-cell strong { font-size: 0.9rem; display: block; margin-bottom: 0.25rem; }
    .disciplina-cell span { font-size: 0.8rem; line-height: 1.2; }

    /* --- INCREMENTO: REGRAS DE ESTILO PARA RESPONSIVIDADE --- */
    @media (max-width: 768px) {
        .main-content {
            padding: 0.5rem;
        }
        .cardBody {
            padding: 1.5rem;
        }
        .form-row {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
        }
        .form-button, .form-button #botaoBaixar {
            width: 100%;
        }

        /* --- Estilos da tabela responsiva --- */
        .results-table thead {
            display: none; /* 1. Esconde o cabeçalho original */
        }
        .results-table tr {
            display: block; /* 2. Transforma cada linha em um "card" */
            border: 1px solid var(--border-color);
            border-radius: 8px;
            margin-bottom: 1rem;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .results-table td {
            display: block; /* 3. Empilha as células verticalmente */
            text-align: right; /* 4. Alinha o dado à direita */
            position: relative;
            padding-left: 50%; /* 5. Abre espaço para o rótulo */
            border-bottom: 1px dotted var(--border-color);
        }
        .results-table td:last-child {
            border-bottom: none;
        }
        .results-table td::before {
            /* 6. Adiciona o rótulo (do atributo data-label) à esquerda */
            content: attr(data-label);
            position: absolute;
            left: 1rem;
            width: calc(50% - 2rem);
            text-align: left;
            font-weight: 600;
            color: var(--text-dark);
        }
    }
</style>