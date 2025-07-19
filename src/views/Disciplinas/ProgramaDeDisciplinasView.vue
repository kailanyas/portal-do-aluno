<script setup>
import { ref, watch } from 'vue'

// --- Lógica para o formulário interativo ---

// 1. Dados de exemplo
const data = {
  professores: [
    { value: 'giuliano', text: 'Giuliano Prado' },
    { value: 'ana_paula', text: 'Ana Paula Marques' },
    { value: 'carlos_eduardo', text: 'Carlos Eduardo' }
  ],
  disciplinas: [
    { value: 'dev_web', text: 'Desenvolvimento Web' },
    { value: 'banco_dados', text: 'Banco de Dados' },
    { value: 'eng_software', text: 'Engenharia de Software' }
  ],
  cursos: [
    { value: 'cc', text: 'Ciência da Computação' },
    { value: 'si', text: 'Sistemas de Informação' },
    { value: 'es', text: 'Engenharia de Software' }
  ]
};

// 2. Variáveis reativas para guardar o estado do formulário
const selectedCategory = ref(''); // Guarda a categoria do 1º select
const selectedItem = ref('');     // Guarda o item escolhido no 2º select
const subOptions = ref([]);       // Guarda a LISTA de opções para o 2º select
const searchTerm = ref('');       // Guarda o texto da barra de busca

// 3. Lógica de reatividade (a "mágica" do Vue)
//    Observa a variável `selectedCategory`. Sempre que ela mudar, este código executa.
watch(selectedCategory, (newCategory) => {
  // Limpa a seleção anterior
  selectedItem.value = '';
  // Atualiza as opções do segundo select com base na escolha do primeiro
  subOptions.value = data[newCategory] || [];
});

// 4. Função que é chamada ao clicar no botão "Buscar"
function handleSearch() {
  if (!selectedCategory.value) {
    alert('Por favor, selecione uma categoria para filtrar.');
    return;
  }
  
  // Aqui você faria a lógica de busca real (ex: chamar uma API)
  // Por enquanto, vamos apenas mostrar os dados no console para confirmar
  console.log('Buscando com os seguintes filtros:');
  console.log('Categoria:', selectedCategory.value);
  console.log('Item:', selectedItem.value);
  console.log('Termo de Busca:', searchTerm.value);
  
  alert(`Busca enviada! Veja o console (F12) para os detalhes.`);
}
</script>

<template>
  <div class="card card-grande">
    <div class="cardHeader">
      <h3>Filtro de Busca Acadêmica</h3>
      <p>Selecione os filtros e pesquise por informações</p>
    </div>
    
    <div class="cardBody">
      <form class="filter-form" @submit.prevent="handleSearch">
        
        <div class="form-row">
          <div class="form-group">
            <label for="category-select">Filtrar por</label>
            <select id="category-select" v-model="selectedCategory">
              <option disabled value="">Selecione uma categoria...</option>
              <option value="professores">Professores</option>
              <option value="disciplinas">Disciplinas</option>
              <option value="cursos">Cursos</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="item-select">Item específico</label>
            <select id="item-select" v-model="selectedItem" :disabled="!selectedCategory">
              <option disabled value="">Selecione um item...</option>
              <option v-for="option in subOptions" :key="option.value" :value="option.value">
                {{ option.text }}
              </option>
            </select>
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
</template>

<style scoped>
/* Mantendo os estilos base do card que você já tinha */
.card {
    background-color: #f5f5f5;
    border: none;
    display: flex;
    flex-direction: column;
    overflow: hidden; 
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.cardHeader {
    background-color: #5A82AA;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    min-height: 4.5rem; 
}
.cardHeader h3 {
    font-size: 1.5rem;
    color: #f5f5f5;
    margin: 0;
}
.cardHeader p {
    font-size: 0.9rem;
    color: #f5f5f5;
    margin: 0;
    opacity: 0.9;
}
.cardBody {
    flex-grow: 1; 
    padding: 2rem; /* Mais padding para o formulário respirar */
}

/* Novo estilo para o card maior e centralizado */
.card-grande {
    width: 100%;
    max-width: 800px;
    margin: 2rem auto; /* Centraliza o card na tela */
}

/* Estilos para o novo formulário de filtro */
.filter-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.form-row {
    display: flex;
    gap: 1.5rem;
}
.form-group {
    display: flex;
    flex-direction: column;
    flex: 1; /* Faz os grupos na mesma linha terem larguras iguais */
}
.form-group label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #2d3748;
}
.form-group select,
.form-group input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    background-color: #fff;
}
.form-group select:disabled {
    background-color: #edf2f7;
    cursor: not-allowed;
}

/* Estilos específicos para a barra de busca */
.search-bar {
    display: flex;
}
.search-bar input {
    flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
}
.search-bar button {
    padding: 0.75rem 1.5rem;
    border: 1px solid #3182ce;
    background-color: #3182ce;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: background-color 0.2s ease;
}
.search-bar button:hover {
    background-color: #2b6cb0;
}

/* --- Responsividade para o novo card --- */
@media (max-width: 768px) {
    .card-grande {
        margin: 1rem auto;
    }
    .cardBody {
        padding: 1.5rem;
    }
    .form-row {
        flex-direction: column;
        gap: 1.5rem;
    }
}
</style>