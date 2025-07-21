<script setup>
import { ref, watch } from 'vue'
import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
}

const open = ref(false)
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
const selectedCategory = ref(''); // Guarda a categoria do 1º select
const selectedItem = ref('');     // Guarda o item escolhido no 2º select
const subOptions = ref([]);       // Guarda a LISTA de opções para o 2º select
const searchTerm = ref('');       // Guarda o texto da barra de busca


watch(selectedCategory, (newCategory) => {

selectedItem.value = '';

subOptions.value = data[newCategory] || [];
});

function handleSearch() {
if (!selectedCategory.value) {
    alert('Por favor, selecione o departamento que oferta a disciplina.');
    return;
}

console.log('Buscando com os seguintes filtros:');
console.log('Categoria:', selectedCategory.value);
console.log('Item:', selectedItem.value);
console.log('Termo de Busca:', searchTerm.value);

alert(`Busca enviada! Veja o console (F12) para os detalhes.`);
}
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            
            <HeaderC titulo="Minhas Disciplinas"/>

            <main class="main-content">
                <div class="card card-grande">
                <div class="cardHeader">
                <h3>Busca de Programas de Disciplinas</h3>
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
                            <button id="botaoBaixar" type="button">Baixar</button>
                        </div>
                    </div>
                        
                    <div class="form-group">
                        <label for="search-input">Pesquisar</label>
                        <div class="search-bar">
                                <input 
                                    type="text" 
                                    id="search-input" 
                                    v-model="searchTerm" 
                                    placeholder="Digite um termo para a busca..."
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
    </div>
</template>

<style scoped>
    .layout-container {
        display: flex;
        height: 100vh;
        width: 100vw;
        background-color: var(--dark-blue-bg);
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
        max-width: 800px; /* Largura máxima para o formulário */
        margin: 0 auto; /* Centraliza o card na área de conteúdo */
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

    /* Estilos para o formulário de filtro */
    .filter-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .form-row {
        display: flex;
        gap: 1.5rem;
        align-items: flex-end; /* Alinha os itens na base */
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

    /* Estilos unificados para os botões */
    #botaoBaixar,
    .search-bar button {
        padding: 0.75rem 1.5rem;
        height: calc(1.5rem + 2 * 0.75rem + 2px); /* Altura igual aos inputs */
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

    /* --- Responsividade --- */
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
            align-items: stretch; /* Faz os itens ocuparem toda a largura */
        }
    }
</style>