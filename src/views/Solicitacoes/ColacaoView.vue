<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="" />

      <main class="main-content">
        <CardQuadrado class="form-card" maxWidth="200rem">
          <h2>Colação de Grau / Diploma</h2>

          <div class="instructions-section">
            <p class="centered-paragraph">
              Os dados a seguir serão usados para sua Colação de Grau e para a confecção do seu Diploma Digital.
            </p>

            <h3>Conferência de Dados:</h3>
             <div class="important-note">
            <strong>CONFIRA ATENTAMENTE CADA UM DELES.</strong> Erros cadastrais são de responsabilidade do estudante e implicam no pagamento de taxa para reemissão do diploma.
            </div>
             <div class="important-note">
            Caso precise corrigir algo, acesse os links no menu ao lado ou envie um e-mail para <strong>drca.prograd@ufes.br</strong> com o documento comprobatório.
          </div>
          </div>

          <div class="table-section">
            <div class="table-wrapper">
              <table class="solicitacoes-table">
                <thead>
                  <tr>
                    <th>Validação</th>
                    <th>Descrição</th>
                    <th>Atividade</th>
                    <th>Período</th>
                    <th>CH Solicitado</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="solicitacoes.length === 0">
                    <td colspan="6" class="no-solicitations">Você ainda não fez nenhuma solicitação.</td>
                  </tr>
                  <tr v-for="solicitacao in solicitacoes" :key="solicitacao.id">
                    <td>{{ solicitacao.validacao }}</td>
                    <td>{{ solicitacao.descricao }}</td>
                    <td>{{ solicitacao.atividade }}</td>
                    <td>{{ solicitacao.periodo }}</td>
                    <td>{{ solicitacao.chSolicitado }}</td>
                    <td class="table-actions">
                      <button @click="abrirModalParaEditar(solicitacao)" class="edit-button" :disabled="solicitacao.validacao !== 'Pendente'">Editar</button>
                      <button @click="deleteSolicitacao(solicitacao.id)" class="delete-button" :disabled="solicitacao.validacao !== 'Pendente'">Excluir</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="submit-section">
            <button @click="abrirModalParaInserir" class="btn-open" >Inserir Solicitação</button>
          </div>
        </CardQuadrado>
      </main>

      <FooterR />
    </div>
  </div>

  <input type="checkbox" id="modal-toggle" class="modal-toggle" ref="checkboxModal">

  <div class="modal">
    <div class="modal-content">
      <h2>Formulário de Atividade Complementar</h2>
      <p>Solicite o cadastro preenchendo os campos e, em seguida, apresente os documentos ao coordenador do seu curso para análise e validação.</p>
      
      <form @submit.prevent="salvarDados">

    <div class="form-group">
      <label for="descricao_atividade">Descrição da Atividade:</label>
      <input type="text" id="descricao_atividade" name="descricao_atividade" placeholder="Ex: Participação na Semana de Tecnologia" v-model="solicitacaoParaFormulario.descricao" required>
    </div>

    <div class="form-group">
      <label for="atividade">Atividade:</label>
      <input type="text" id="atividade" name="atividade" placeholder="Ex: Semana de TI" v-model="solicitacaoParaFormulario.atividade" required>
    </div>

    <div class="form-group">
      <label for="periodo">Período:</label>
      <input type="text" id="periodo" name="periodo" placeholder="Ex: 2025.1" v-model="solicitacaoParaFormulario.periodo" required>
    </div>

    <div class="form-group">
      <label for="tipo_atividade">Tipo de Atividade:</label>
      <select name="tipo_atividade" id="tipo_atividade" v-model="solicitacaoParaFormulario.tipoAtividade" required>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="curso">Curso ou Minicurso</option>
        <option value="palestra">Palestra ou Seminário</option>
        <option value="projeto">Projeto de Pesquisa/Extensão</option>
        <option value="publicacao">Publicação de Artigo</option>
        <option value="voluntariado">Trabalho Voluntário</option>
        <option value="outro">Outro</option>
      </select>
    </div>

    <div class="form-group">
      <label for="carga_horaria">Carga Horária (horas):</label>
      <input type="number" id="carga_horaria" name="carga_horaria" min="1" placeholder="Ex: 20" v-model="solicitacaoParaFormulario.chSolicitado" required>
    </div>

    <div class="form-group">
      <label for="data_inicio">Data de Início:</label>
      <input type="date" id="data_inicio" name="data_inicio" v-model="solicitacaoParaFormulario.dataInicio" required>
    </div>

    <div class="form-group">
      <label for="data_termino">Data de Término:</label>
      <input type="date" id="data_termino" name="data_termino" v-model="solicitacaoParaFormulario.dataTermino" required>
    </div>

    <div class="form-group">
      <label for="comprovante">Anexar Comprovante (PDF, JPG):</label>
      <input type="file" id="comprovante" name="comprovante" accept=".pdf,.jpg,.jpeg,.png">
    </div>
    
    <div class="form-buttons">
      <button type="button" @click="fecharModal" class="btn btn-cancel">Cancelar</button>
      <button type="submit" class="btn btn-submit">Salvar</button>
    </div>
</form>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import HeaderC from '@/components/Header.vue';
import FooterR from '@/components/Footer.vue';
import CardQuadrado from '@/components/CardQuadrado.vue';


const isSidebarOpen = ref(false);
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

const solicitacoes = ref([
  { id: 1, validacao: 'Pendente', descricao: 'Participação em evento X', atividade: 'Congresso de TI', periodo: '2024.2', chSolicitado: 40, dataInicio: '2024-10-20', dataTermino: '2024-10-22' },
  { id: 2, validacao: 'Validado', descricao: 'Curso online de Python', atividade: 'Udemy - Python Avançado', periodo: '2024.1', chSolicitado: 20, dataInicio: '2024-01-15', dataTermino: '2024-03-15' },
]);


const checkboxModal = ref(null); 
const modoEdicao = ref(false); 
const solicitacaoParaFormulario = ref({}); 


function abrirModalParaInserir() {
  modoEdicao.value = false;
  
  solicitacaoParaFormulario.value = {
    descricao: '',
    tipoAtividade: '',
    carga_horaria: null,
    dataInicio: '',
    dataTermino: ''
  };
  
  checkboxModal.value.checked = true;
}


function abrirModalParaEditar(solicitacao) {
  modoEdicao.value = true;
  
  solicitacaoParaFormulario.value = { ...solicitacao };
  
  checkboxModal.value.checked = true;
}


function fecharModal() {
  
  checkboxModal.value.checked = false;
}


function salvarDados() {
  if (modoEdicao.value) {
    
    const index = solicitacoes.value.findIndex(s => s.id === solicitacaoParaFormulario.value.id);
    if (index !== -1) {
      solicitacoes.value[index] = solicitacaoParaFormulario.value;
    }
  } else {
    
    const novoId = solicitacoes.value.length > 0 ? Math.max(...solicitacoes.value.map(s => s.id)) + 1 : 1;
    solicitacoes.value.push({
      ...solicitacaoParaFormulario.value,
      id: novoId,
      validacao: 'Pendente'
    });
  }
  
  fecharModal();
}


const deleteSolicitacao = (id) => {
  if (confirm(`Tem certeza que deseja excluir a solicitação com ID: ${id}?`)) {
    solicitacoes.value = solicitacoes.value.filter(s => s.id !== id);
  }
};
</script>

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
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
}

.instructions-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.centered-paragraph {
  text-align: center;
  width: 100%;
}

h2 {
  color: #144575;
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
}

h3 {
  color: #103a60;
  font-size: 1.3em;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
}

p {
  font-size: 1em;
  line-height: 1.6;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
}

ul {
  list-style: disc;
  margin-left: 25px;
  color: #333;
  width: 100%;
}

li {
  margin-bottom: 8px;
  line-height: 1.5;
}


.important-note {
  background-color: #fff3cd;
  border-left: 5px solid #ffc107;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 4px;
  font-size: 0.95em;
  color: #664d03;
  width: 100%;
  box-sizing: border-box;
}

.table-section {
  padding: 20px 0;
  text-align: center;
  background-color: #f9f9f9;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.table-info-note {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
}

.table-wrapper {
  overflow-x: auto;
  width: 100%;
  margin-top: 15px;
}

.solicitacoes-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
}

.solicitacoes-table th,
.solicitacoes-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
}

.solicitacoes-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.solicitacoes-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.solicitacoes-table tbody tr:hover {
  background-color: #e0f2f7;
}

.no-solicitations {
  text-align: center;
  font-style: italic;
  color: #777;
  padding: 20px;
}

.table-actions {
  text-align: center;
}

.edit-button,
.delete-button {
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: bold;
  transition: background-color 0.2s ease;
  margin: 0 4px;
}

.edit-button {
  background-color: #28a745;
  color: white;
  border: 1px solid #218838;
}

.edit-button:hover:not(:disabled) {
  background-color: #218838;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: 1px solid #c82333;
}

.delete-button:hover:not(:disabled) {
  background-color: #c82333;
}

.edit-button:disabled,
.delete-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  border-color: #bbbbbb;
  color: #666666;
}

.submit-section {
  text-align: center;
  margin-top: 20px;
  width: 100%;
}

.submit-button {
  background-color: #144575;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  transition: background-color 0.2s ease;
  margin: 0 auto;
  display: block;
}

.submit-button:hover {
  background-color: #103a60;
}

.insert-form-section {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e8f5e9;
  border-radius: 8px;
  margin-top: 20px;
}

.solicitacao-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group input[type="date"],
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
}

.form-group-inline {
  display: flex;
  gap: 15px;
  width: 100%;
  flex-wrap: wrap;
}

.form-group-inline .form-group {
  flex: 1;
  min-width: 120px;
}

.form-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.cancel-button,
.insert-form-button {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.2s ease;
  border: none;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
}

.cancel-button:hover {
  background-color: #5a6268;
}

.insert-form-button {
  background-color: #007bff;
  color: white;
}

.insert-form-button:hover {
  background-color: #0056b3;
}

.modal-toggle {
        display: none;
    }

    .btn-open {
        display: inline-block;
        padding: 0.6rem 1rem;
        margin: 6px;
        background-color: #144575;
        color: #f5f5f5;
        border: none;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .btn-open:hover {
        background-color: #103a60;
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        z-index: 999;
    }

    .modal-content {
        background-color: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        width: 90%;
        max-width: 550px;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }

    .modal-toggle:checked ~ .modal {
        opacity: 1;
        visibility: visible;
    }

    .modal-toggle:checked ~ .modal .modal-content {
        transform: scale(1);
    }

    .modal-content h2 {
        margin-top: 0;
        color: #333;
    }

    .modal-content p {
        color: #666;
        margin-bottom: 25px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 6px;
        font-weight: bold;
        color: #555;
    }

    .form-group input[type="text"],
    .form-group input[type="number"],
    .form-group input[type="date"],
    .form-group input[type="file"],
    .form-group select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    .form-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 25px;
    }

    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        font-size: 0.9rem;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.1s ease;
    }

    .btn:active {
        transform: scale(0.98);
    }

    .btn-cancel {
        background-color: #f1f1f1;
        color: #333;
        border: 1px solid #ccc;
    }

    .btn-cancel:hover {
        background-color: #e0e0e0;
    }

    .btn-submit {
        background-color: #28a745;
        color: white;
    }

    .btn-submit:hover {
        background-color: #218838;
    }

    .solicitacoes-table td:nth-child(4),
    .solicitacoes-table td:nth-child(5),
    .solicitacoes-table td:nth-child(6) {
    text-align: center;
    }

    @media (max-width: 600px) {
  
  .main-content {
    padding: 0.8rem;
  }


  h2 {
    font-size: 1.6em;
  }

  h3 {
    font-size: 1.2em;
  }
  
  
  .btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}
</style>