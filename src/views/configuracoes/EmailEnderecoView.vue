<script setup>
import { ref } from "vue";

const enderecos = ref([
  {
    id: 1,
    principal: true,
    logradouro: "Rua Exemplo",
    numero: "123",
    complemento: "Apto 101",
    bairro: "Centro",
    cidade: "Vitória",
    estado: "ES",
    cep: "29000-000",
    email: "exemplo@email.com"
  }
]);

const novoEndereco = ref({
  logradouro: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  estado: "ES",
  cep: "",
  email: "",
  principal: false
});

const showForm = ref(false);
const enderecoEditando = ref(null);

function toggleForm() {
  showForm.value = !showForm.value;
  enderecoEditando.value = null;
  resetNovoEndereco();
}

function resetNovoEndereco() {
  novoEndereco.value = {
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "ES",
    cep: "",
    email: "",
    principal: false
  };
}

function adicionarEndereco() {
  if (enderecoEditando.value !== null) {
    // Atualizar endereço existente
    const index = enderecos.value.findIndex(e => e.id === enderecoEditando.value);
    if (index !== -1) {
      enderecos.value[index] = { ...novoEndereco.value, id: enderecoEditando.value };
    }
  } else {
    // Adicionar novo endereço
    enderecos.value.push({
      ...novoEndereco.value,
      id: Date.now() // ID simples baseado em timestamp
    });
  }
  
  // Se marcou como principal, desmarca os outros
  if (novoEndereco.value.principal) {
    enderecos.value.forEach(e => {
      if (e.id !== (enderecoEditando.value || novoEndereco.value.id)) {
        e.principal = false;
      }
    });
  }
  
  toggleForm();
}

function editarEndereco(id) {
  const endereco = enderecos.value.find(e => e.id === id);
  if (endereco) {
    novoEndereco.value = { ...endereco };
    enderecoEditando.value = id;
    showForm.value = true;
  }
}

function removerEndereco(id) {
  if (confirm("Tem certeza que deseja remover este endereço?")) {
    enderecos.value = enderecos.value.filter(e => e.id !== id);
  }
}

function definirComoPrincipal(id) {
  enderecos.value.forEach(e => {
    e.principal = e.id === id;
  });
}
</script>

<template>
  <div class="container">
    <h2 class="subtitulo">Alteração de E-mail/Endereço</h2>

    <div class="secao">
      <table class="tabela-dados">
        <thead>
          <tr>
            <th>Endereço</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="endereco in enderecos" :key="endereco.id">
            <td>
              <strong v-if="endereco.principal">Endereço Principal</strong>
              <div>{{ endereco.logradouro }}, {{ endereco.numero }}</div>
              <div v-if="endereco.complemento">{{ endereco.complemento }}</div>
              <div>{{ endereco.bairro }}</div>
              <div>{{ endereco.cidade }}/{{ endereco.estado }}</div>
              <div>CEP: {{ endereco.cep }}</div>
            </td>
            <td>{{ endereco.email }}</td>
            <td class="acoes">
              <button class="btn-editar" @click="editarEndereco(endereco.id)">Editar</button>
              <button 
                v-if="!endereco.principal" 
                class="btn-principal" 
                @click="definirComoPrincipal(endereco.id)"
              >
                Tornar Principal
              </button>
              <button class="btn-remover" @click="removerEndereco(endereco.id)">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="botoes-formulario">
        <button class="btn-adicionar" @click="toggleForm">
          {{ showForm ? 'Cancelar' : 'Adicionar Endereço' }}
        </button>
      </div>

      <div v-if="showForm" class="form-endereco">
        <h3 class="secao-titulo">
          {{ enderecoEditando ? 'Editar Endereço' : 'Novo Endereço' }}
        </h3>
        
        <div class="grid">
          <div class="campo-container">
            <label>Logradouro:</label>
            <input type="text" v-model="novoEndereco.logradouro" required>
          </div>
          
          <div class="campo-container">
            <label>Número:</label>
            <input type="text" v-model="novoEndereco.numero" required>
          </div>
          
          <div class="campo-container">
            <label>Complemento:</label>
            <input type="text" v-model="novoEndereco.complemento">
          </div>
          
          <div class="campo-container">
            <label>Bairro:</label>
            <input type="text" v-model="novoEndereco.bairro" required>
          </div>
          
          <div class="campo-container">
            <label>Cidade:</label>
            <input type="text" v-model="novoEndereco.cidade" required>
          </div>
          
          <div class="campo-container">
            <label>Estado:</label>
            <select v-model="novoEndereco.estado" required>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES" selected>Espírito Santo</option>
              <!-- outros estados -->
            </select>
          </div>
          
          <div class="campo-container">
            <label>CEP:</label>
            <input type="text" v-model="novoEndereco.cep" required>
          </div>
          
          <div class="campo-container">
            <label>E-mail:</label>
            <input type="email" v-model="novoEndereco.email" required>
          </div>
          
          <div class="campo-container">
            <label>
              <input type="checkbox" v-model="novoEndereco.principal">
              Definir como endereço principal
            </label>
          </div>
        </div>
        
        <div class="botoes-formulario">
          <button type="button" class="btn-cancelar" @click="toggleForm">
            Cancelar
          </button>
          <button type="button" class="btn-salvar" @click="adicionarEndereco">
            {{ enderecoEditando ? 'Atualizar' : 'Salvar' }}
          </button>
        </div>
      </div>

      <p class="aviso-final">
        Para excluir ou definir um endereço como principal, utilize os botões de ação.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 1000px;
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.subtitulo {
  font-size: 20px;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
}

.secao {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.tabela-dados {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.tabela-dados th {
  background-color: #006699;
  color: white;
  padding: 12px;
  text-align: left;
}

.tabela-dados td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.tabela-dados tr:last-child td {
  border-bottom: none;
}

.acoes {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

button {
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
}

.btn-editar {
  background-color: #e0e0e0;
  color: #333;
}

.btn-editar:hover {
  background-color: #d0d0d0;
}

.btn-principal {
  background-color: #4caf50;
  color: white;
}

.btn-principal:hover {
  background-color: #388e3c;
}

.btn-remover {
  background-color: #f44336;
  color: white;
}

.btn-remover:hover {
  background-color: #d32f2f;
}

.btn-adicionar {
  background-color: #006699;
  color: white;
  padding: 10px 16px;
}

.btn-adicionar:hover {
  background-color: #006699;
}

.form-endereco {
  margin-top: 24px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.campo-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.campo-container label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.botoes-formulario {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
}

.btn-cancelar {
  background-color: #f44336;
  color: white;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
}

.btn-salvar {
  background-color: #4caf50;
  color: white;
}

.btn-salvar:hover {
  background-color: #388e3c;
}

.aviso-final {
  margin-top: 24px;
  font-size: 13px;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .tabela-dados {
    display: block;
    overflow-x: auto;
  }
  
  .acoes {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }
  
  button {
    width: 100%;
  }
  
  .botoes-formulario {
    flex-direction: column;
  }
}
</style>