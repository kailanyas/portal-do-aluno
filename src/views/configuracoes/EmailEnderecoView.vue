<script setup>
import { ref } from "vue";

// --- ESTADO INICIAL E DADOS ---

// Lista de estados brasileiros para o select
const UFS_BRASIL = [
  { sigla: 'AC', nome: 'Acre' }, { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' }, { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' }, { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' }, { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' }, { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' }, { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' }, { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' }, { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' }, { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' }, { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' }, { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' }, { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' }, { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' }
];

// Lista reativa de endereços com dados de exemplo
const enderecos = ref([
  {
    id: 1,
    principal: true,
    logradouro: "Avenida Rio Branco",
    numero: "156",
    complemento: "Sala 2001",
    bairro: "Centro",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "20040-903",
    email: "contato@empresa.com"
  },
  {
    id: 2,
    principal: false,
    logradouro: "Rua Exemplo",
    numero: "123",
    complemento: "Apto 101",
    bairro: "Centro",
    cidade: "Vitória",
    estado: "ES",
    cep: "29010-002",
    email: "pessoal@email.com"
  }
]);

// Objeto reativo para o formulário (data binding)
const novoEndereco = ref({
  logradouro: "", numero: "", complemento: "", bairro: "",
  cidade: "", estado: "", cep: "", email: "", principal: false
});

// --- CONTROLE DE ESTADO DA UI ---
const showForm = ref(false);
const enderecoEditando = ref(null);
const isLoadingCep = ref(false);
const notificacao = ref({ show: false, message: '', type: 'success' });

// --- FUNÇÕES ---

// Exibe a notificação e a esconde após 3 segundos
function mostrarNotificacao(message, type = 'success') {
  notificacao.value = { show: true, message, type };
  setTimeout(() => {
    notificacao.value.show = false;
  }, 3000);
}

// Alterna a exibição do formulário
function toggleForm() {
  showForm.value = !showForm.value;
  enderecoEditando.value = null;
  resetNovoEndereco();
}

// Limpa os campos do formulário
function resetNovoEndereco() {
  novoEndereco.value = {
    logradouro: "", numero: "", complemento: "", bairro: "",
    cidade: "", estado: "", cep: "", email: "", principal: false
  };
}

// [NOVO] Busca o endereço na API ViaCEP
async function buscarCep() {
  const cep = novoEndereco.value.cep.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (cep.length !== 8) return;

  isLoadingCep.value = true;
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    
    if (data.erro) {
      mostrarNotificacao('CEP não encontrado.', 'error');
    } else {
      novoEndereco.value.logradouro = data.logradouro;
      novoEndereco.value.bairro = data.bairro;
      novoEndereco.value.cidade = data.localidade;
      novoEndereco.value.estado = data.uf;
      mostrarNotificacao('Endereço preenchido automaticamente!', 'success');
    }
  } catch (error) {
    mostrarNotificacao('Não foi possível buscar o CEP.', 'error');
  } finally {
    isLoadingCep.value = false;
  }
}

// Salva um novo endereço ou atualiza um existente
function salvarEndereco() {
  if (enderecoEditando.value !== null) {
    const index = enderecos.value.findIndex(e => e.id === enderecoEditando.value);
    if (index !== -1) {
      enderecos.value[index] = { ...novoEndereco.value, id: enderecoEditando.value };
      mostrarNotificacao('Endereço atualizado com sucesso!');
    }
  } else {
    const novoId = Date.now();
    enderecos.value.push({ ...novoEndereco.value, id: novoId });
    if (novoEndereco.value.principal) {
        definirComoPrincipal(novoId);
    }
    mostrarNotificacao('Endereço adicionado com sucesso!');
  }
  
  if (novoEndereco.value.principal) {
    definirComoPrincipal(enderecoEditando.value ?? enderecos.value[enderecos.value.length - 1].id);
  }
  
  toggleForm();
}

// Prepara o formulário para edição
function editarEndereco(id) {
  const endereco = enderecos.value.find(e => e.id === id);
  if (endereco) {
    novoEndereco.value = { ...endereco };
    enderecoEditando.value = id;
    showForm.value = true;
  }
}

// Remove um endereço
function removerEndereco(id) {
  if (confirm("Tem certeza que deseja remover este endereço?")) {
    enderecos.value = enderecos.value.filter(e => e.id !== id);
    mostrarNotificacao('Endereço removido.', 'success');
  }
}

// Define um endereço como o principal
function definirComoPrincipal(id) {
  enderecos.value.forEach(e => {
    e.principal = e.id === id;
  });
  mostrarNotificacao('Endereço principal definido!');
}
</script>

<template>
  <div class="container">
    <div v-if="notificacao.show" class="notificacao" :class="notificacao.type">
      {{ notificacao.message }}
    </div>

    <h2 class="subtitulo">Gerenciamento de Endereços</h2>

    <div class="secao">
      <div class="lista-enderecos">
        <div v-for="endereco in enderecos" :key="endereco.id" class="card-endereco">
          <div class="card-header">
            <div>
              <span v-if="endereco.principal" class="badge-principal">Principal</span>
            </div>
            <div class="acoes">
              <button class="btn-editar" @click="editarEndereco(endereco.id)" title="Editar">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn-remover" @click="removerEndereco(endereco.id)" title="Remover">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
          
          <div class="card-body">
            <p><i class="fas fa-map-marker-alt"></i> <strong>{{ endereco.logradouro }}, {{ endereco.numero }}</strong></p>
            <p v-if="endereco.complemento" class="detalhe"><i class="fas fa-building"></i> {{ endereco.complemento }}</p>
            <p class="detalhe"><i class="fas fa-map-pin"></i> {{ endereco.bairro }}, {{ endereco.cidade }}/{{ endereco.estado }}</p>
            <p class="detalhe"><i class="fas fa-location-arrow"></i> CEP: {{ endereco.cep }}</p>
            <p class="detalhe"><i class="fas fa-envelope"></i> E-mail: {{ endereco.email }}</p>
          </div>
          
          <div class="card-footer">
            <button 
              v-if="!endereco.principal" 
              class="btn-principal" 
              @click="definirComoPrincipal(endereco.id)"
            >
              <i class="fas fa-star"></i> Tornar Principal
            </button>
          </div>
        </div>
      </div>

      <div class="botoes-formulario">
        <button class="btn-adicionar" @click="toggleForm">
          <i :class="showForm ? 'fas fa-times' : 'fas fa-plus'"></i> {{ showForm ? 'Cancelar' : 'Adicionar Endereço' }}
        </button>
      </div>

      <div v-if="showForm" class="form-container">
        <h3 class="secao-titulo">
          {{ enderecoEditando ? 'Editar Endereço' : 'Novo Endereço' }}
        </h3>
        
        <form @submit.prevent="salvarEndereco" class="form-endereco">
          <div class="form-grid">
            <div class="form-group">
              <label for="cep">
                CEP:
                <i v-if="isLoadingCep" class="fas fa-spinner fa-spin loading-icon"></i>
              </label>
              <input type="text" id="cep" v-model="novoEndereco.cep" required class="input-caixa"
                     maxlength="9" @blur="buscarCep"
                     @input="novoEndereco.cep = $event.target.value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2')"
              >
            </div>
            
            <div class="form-group full-width">
              <label for="logradouro">Logradouro:</label>
              <input type="text" id="logradouro" v-model="novoEndereco.logradouro" required class="input-caixa">
            </div>
            
            <div class="form-group">
              <label for="numero">Número:</label>
              <input type="text" id="numero" v-model="novoEndereco.numero" required class="input-caixa">
            </div>
            
            <div class="form-group">
              <label for="complemento">Complemento:</label>
              <input type="text" id="complemento" v-model="novoEndereco.complemento" class="input-caixa">
            </div>

            <div class="form-group">
              <label for="bairro">Bairro:</label>
              <input type="text" id="bairro" v-model="novoEndereco.bairro" required class="input-caixa">
            </div>

            <div class="form-group">
              <label for="cidade">Cidade:</label>
              <input type="text" id="cidade" v-model="novoEndereco.cidade" required class="input-caixa">
            </div>
            
            <div class="form-group">
              <label for="estado">Estado:</label>
              <select id="estado" v-model="novoEndereco.estado" required class="input-caixa">
                <option disabled value="">Selecione um Estado</option>
                <option v-for="uf in UFS_BRASIL" :key="uf.sigla" :value="uf.sigla">{{ uf.nome }}</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="email">E-mail de contato:</label>
              <input type="email" id="email" v-model="novoEndereco.email" required class="input-caixa">
            </div>
            
            <div class="form-group-check full-width">
              <label class="checkbox-container">
                <input type="checkbox" v-model="novoEndereco.principal" class="input-checkbox">
                <span class="checkmark"></span>
                Definir como endereço principal
              </label>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn-cancelar" @click="toggleForm">
              <i class="fas fa-times"></i> Cancelar
            </button>
            <button type="submit" class="btn-salvar">
              <i class="fas fa-save"></i> {{ enderecoEditando ? 'Atualizar' : 'Salvar' }}
            </button>
          </div>
        </form>
      </div>

      <p class="aviso-final">
        O endereço principal será usado como padrão para correspondências e entregas.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos herdados e novos */
.notificacao {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: fadeInOut 3s forwards;
}
.notificacao.success { background-color: #4CAF50; }
.notificacao.error { background-color: #f44336; }

@keyframes fadeInOut {
  0%, 100% { opacity: 0; transform: translate(-50%, -20px); }
  10%, 90% { opacity: 1; transform: translate(-50%, 0); }
}

.container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
.subtitulo { font-size: 1.5rem; color: #144575; margin-bottom: 1.5rem; text-align: center; font-weight: 600; }
.secao { background: white; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
.lista-enderecos { display: grid; gap: 1rem; margin-bottom: 1.5rem; }
.card-endereco { border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; transition: all 0.3s ease; display: flex; flex-direction: column; }
.card-endereco:hover { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-color: #144575; }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
.badge-principal { background-color: #144575; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: bold; }
.acoes { display: flex; gap: 0.5rem; }
.acoes button { padding: 0.4rem; line-height: 1; font-size: 0.8rem; }
.card-body { flex-grow: 1; margin-bottom: 1rem; }
.card-body p { margin: 0.4rem 0; color: #555; display: flex; align-items: center; gap: 8px; }
.card-body .detalhe { color: #777; font-size: 0.9rem; }
.card-body i { color: #144575; width: 16px; text-align: center; }
.card-footer { display: flex; justify-content: flex-end; }
.form-container { margin-top: 1.5rem; padding: 1.5rem; background-color: #f8f9fa; border-radius: 8px; }
.secao-titulo { font-size: 1.25rem; color: #144575; margin-bottom: 1rem; font-weight: 500; }
.form-endereco { display: flex; flex-direction: column; }
.form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 1.5rem; }
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-group.full-width { grid-column: 1 / -1; }
.form-group label { font-size: 0.875rem; color: #333; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.loading-icon { color: #144575; }
.input-caixa { padding: 0.75rem; border: 2px solid #ddd; border-radius: 6px; font-size: 0.875rem; width: 100%; box-sizing: border-box; transition: all 0.3s ease; background-color: white; }
.input-caixa:focus { outline: none; border-color: #144575; box-shadow: 0 0 0 3px rgba(20, 69, 117, 0.1); }
select.input-caixa { appearance: none; background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 1rem; }
.form-group-check { grid-column: 1 / -1; }
.checkbox-container { display: flex; align-items: center; position: relative; padding-left: 2rem; cursor: pointer; user-select: none; font-size: 0.875rem; }
.input-checkbox { position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0; }
.checkmark { position: absolute; top: 0; left: 0; height: 1.25rem; width: 1.25rem; background-color: white; border: 2px solid #144575; border-radius: 4px; }
.checkbox-container:hover .input-checkbox ~ .checkmark { background-color: #f0f6ff; }
.input-checkbox:checked ~ .checkmark { background-color: #144575; }
.checkmark:after { content: ""; position: absolute; display: none; }
.input-checkbox:checked ~ .checkmark:after { display: block; }
.checkbox-container .checkmark:after { left: 6px; top: 2px; width: 5px; height: 10px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
.form-actions { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; }
.botoes-formulario { display: flex; justify-content: center; }
button { padding: 0.75rem 1.25rem; border-radius: 6px; font-size: 0.875rem; cursor: pointer; transition: all 0.3s ease; border: none; display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 500; }
.btn-editar, .btn-principal, .btn-adicionar, .btn-salvar { background-color: #144575; color: white; }
.btn-editar:hover, .btn-principal:hover, .btn-adicionar:hover, .btn-salvar:hover { background-color: #103a60; }
.btn-remover, .btn-cancelar { background-color: #f44336; color: white; }
.btn-remover:hover, .btn-cancelar:hover { background-color: #d32f2f; }
.btn-principal { padding: 0.5rem 1rem; }
.aviso-final { margin-top: 1.5rem; font-size: 0.875rem; color: #666; text-align: center; font-style: italic; }
@media (max-width: 768px) {
  .form-grid { grid-template-columns: 1fr; }
  .form-actions { flex-direction: column; }
  button { width: 100%; justify-content: center; }
}
</style>