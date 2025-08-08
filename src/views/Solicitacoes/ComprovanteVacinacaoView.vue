<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Comprovante de Vacinação" />

      <main class="main-content">
        <CardQuadrado class="form-card">
          <h2>Envios de Comprovante de Vacinação</h2>

          <div class="instructions-section">
            <p class="centered-paragraph">
              Prezado(a) aluno(a), consulte abaixo o histórico e a situação de cada comprovante de vacinação enviado
            </p>
          </div>

          <div class="table-section">
            <div class="table-wrapper">
              <table class="solicitacoes-table">
                <thead>
                  <tr>
                    <th>Ano/Período</th>
                    <th>Esquema Vacinal</th>
                    <th>Documento</th>
                    <th>Data Envio</th>
                    <th>Situação Documento</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="enviosVacina.length === 0">
                    <td colspan="6" class="no-solicitations">Nenhum comprovante enviado.</td>
                  </tr>
                  <tr v-for="envio in enviosVacina" :key="envio.id">
                    <td>{{ envio.periodo }}</td>
                    <td>{{ envio.esquemaVacinal }}</td>
                    <td><a :href="envio.documentoUrl" target="_blank">Visualizar</a></td>
                    <td>{{ envio.dataEnvio }}</td>
                    <td>{{ envio.situacao }}</td>
                    <td class="table-actions">
                       <button @click="abrirModalParaEditar(envio)" class="edit-button" :disabled="envio.situacao !== 'Pendente'">Editar</button>
                       <button @click="deleteEnvio(envio.id)" class="delete-button" :disabled="envio.situacao !== 'Pendente'">Excluir</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="submit-section">
            <button @click="abrirModalNovoEnvio" class="btn-open" >Enviar Novo Comprovante</button>
          </div>
        </CardQuadrado>
      </main>

      <FooterR />
    </div>
  </div>

  <input type="checkbox" id="modal-toggle" class="modal-toggle" ref="checkboxModal">
  <div class="modal">
    <div class="modal-content">
      <h2>Enviar Novo Comprovante de Vacinação</h2>
      <p>Preencha os campos abaixo e anexe o seu comprovante.</p>
      
      <form @submit.prevent="salvarEnvio">
        <div class="form-group">
          <label for="periodo">Ano/Período de Referência:</label>
          <input type="text" id="periodo" name="periodo" placeholder="Ex: 2025.1" v-model="envioParaFormulario.periodo" required>
        </div>

        <div class="form-group">
          <label for="esquema_vacinal">Esquema Vacinal:</label>
          <select name="esquema_vacinal" id="esquema_vacinal" v-model="envioParaFormulario.esquemaVacinal" required>
            <option value="" disabled>Selecione uma opção</option>
            <option value="Dose Única">Dose Única</option>
            <option value="Duas Doses">Duas Doses</option>
            <option value="Esquema Completo + Reforço">Esquema Completo + Reforço</option>
          </select>
        </div>

        <div class="form-group">
          <label for="comprovante">Anexar Comprovante (PDF, JPG):</label>
          <input type="file" id="comprovante" @change="handleFileUpload" accept=".pdf,.jpg,.jpeg,.png" required>
        </div>
        
        <div class="form-buttons">
          <button type="button" @click="fecharModal" class="btn btn-cancel">Cancelar</button>
          <button type="submit" class="btn btn-submit">Enviar</button>
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


const enviosVacina = ref([
  { id: 1, periodo: '2024.2', esquemaVacinal: 'Esquema Completo + Reforço', documentoUrl: '#', dataEnvio: '15/07/2024', situacao: 'Validado' },
  { id: 2, periodo: '2025.1', esquemaVacinal: 'Pendente de Envio', documentoUrl: '#', dataEnvio: '--', situacao: 'Pendente' },
]);

const checkboxModal = ref(null);
const envioParaFormulario = ref({});
const modoEdicao = ref(false);

function abrirModalNovoEnvio() {
  modoEdicao.value = false; 
  envioParaFormulario.value = {
    periodo: '',
    esquemaVacinal: ''
  };
  checkboxModal.value.checked = true;
}

function abrirModalParaEditar(envio) {
  modoEdicao.value = true; 
  envioParaFormulario.value = { ...envio }; 
  checkboxModal.value.checked = true;
}

function fecharModal() {
  checkboxModal.value.checked = false;
}

function handleFileUpload(event) {
  
  const file = event.target.files[0];
  if (file) {
    
    envioParaFormulario.value.file = file;
    
    envioParaFormulario.value.documentoUrl = URL.createObjectURL(file);
  }
}

function salvarEnvio() {
  if (modoEdicao.value) {
    
    const index = enviosVacina.value.findIndex(e => e.id === envioParaFormulario.value.id);
    if (index !== -1) {
      enviosVacina.value[index] = envioParaFormulario.value;
    }
  } else {
    
    const dataFormatada = hoje.toLocaleDateString('pt-BR');
    const novoId = enviosVacina.value.length > 0 ? Math.max(...enviosVacina.value.map(e => e.id)) + 1 : 1;
    enviosVacina.value.push({
      ...envioParaFormulario.value,
      id: novoId,
      documentoUrl: '#',
      dataEnvio: dataFormatada,
      situacao: 'Em análise'
    });
  }
  fecharModal();
}


const deleteEnvio = (id) => {
  if (confirm(`Tem certeza que deseja excluir este envio?`)) {
    enviosVacina.value = enviosVacina.value.filter(s => s.id !== id);
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
  background-color: #144575;
  color: white;
  border: 1px solid #144575;
}

.edit-button:hover:not(:disabled) {
  background-color: #144575;
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

    .solicitacoes-table td:nth-child(3),
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