<template>
  <div class="container">
    <h2 class="subtitulo">Alteração de Dados Cadastrais</h2>

    <form @submit.prevent="salvarAlteracoes">
      <!-- DADOS PESSOAIS -->
      <div class="secao">
        <h3 class="secao-titulo">Dados Pessoais</h3>
        <div class="grid">
          <div class="campo-container">
            <label>Nome Civil:</label>
            <div class="campo-editavel">
              <input
                type="text"
                v-model="dados.nomeCivil"
                :disabled="!editando.nomeCivil"
              />
            </div>
          </div>

          <div class="campo-container">
            <label>Nome da mãe ou 1º parental:</label>
            <div class="campo-editavel">
              <input
                type="text"
                v-model="dados.nomeMae"
                :disabled="!editando.nomeMae"
              />
            </div>
          </div>

          <div class="campo-container">
            <label>Nome do pai ou 2º parental:</label>
            <div class="campo-editavel">
              <input
                type="text"
                v-model="dados.nomePai"
                :disabled="!editando.nomePai"
              />
            </div>
          </div>

          <div class="campo-container">
            <label>Data de Nascimento:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.dataNascimento" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Sexo:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.sexo" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Estado Civil:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.estadoCivil" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Etnia:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.etnia" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Tipo Sanguíneo:</label>
            <div class="campo-editavel">
              <select
                v-model="dados.tipoSanguineo"
                :disabled="!editando.tipoSanguineo"
              >
                <option value="">Selecione</option>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
                <option>Não Informado</option>
              </select>
              <button
                type="button"
                class="btn-editar"
                @click="toggleEdicao('tipoSanguineo')"
              >
                {{ editando.tipoSanguineo ? "Cancelar" : "Editar" }}
              </button>
              <button
                v-if="editando.tipoSanguineo"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('tipoSanguineo')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label>Fator RH:</label>
            <div class="campo-editavel">
              <select v-model="dados.fatorRH" :disabled="!editando.fatorRH">
                <option value="">Selecione</option>
                <option>+</option>
                <option>-</option>
                <option>Não Informado</option>
              </select>
              <button
                type="button"
                class="btn-editar"
                @click="toggleEdicao('fatorRH')"
              >
                {{ editando.fatorRH ? "Cancelar" : "Editar" }}
              </button>
              <button
                v-if="editando.fatorRH"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('fatorRH')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label>Ano de conclusão do Ensino Médio:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.anoConclusaoEM" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Deficiência(s):</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.deficiencia" disabled />
              <button
                type="button"
                class="btn-solicitar"
                @click="solicitarAlteracao('Deficiência')"
              >
                Solicitar Alteração
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label>Identidade de Gênero:</label>
            <div class="campo-editavel">
              <input
                type="text"
                v-model="dados.identidadeGenero"
                :disabled="!editando.identidadeGenero"
              />
              <button
                type="button"
                class="btn-editar"
                @click="toggleEdicao('identidadeGenero')"
              >
                {{ editando.identidadeGenero ? "Cancelar" : "Editar" }}
              </button>
              <button
                v-if="editando.identidadeGenero"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('identidadeGenero')"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
        <p class="aviso">
          IMPORTANTE: a identidade de gênero será usada no Diploma Digital. Caso
          não informe, será usado o sexo cadastrado.
        </p>
      </div>

      <!-- NOME SOCIAL -->
      <div class="secao">
        <h3 class="secao-titulo">Nome Social</h3>
        <div class="grid">
          <div class="campo-container">
            <label>Nome Social:</label>
            <div class="campo-editavel">
              <input
                type="text"
                v-model="dados.nomeSocial"
                :disabled="!editando.nomeSocial"
              />
              <button
                type="button"
                class="btn-editar"
                @click="toggleEdicao('nomeSocial')"
              >
                {{ editando.nomeSocial ? "Cancelar" : "Editar" }}
              </button>
              <button
                v-if="editando.nomeSocial"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('nomeSocial')"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CONTATO EMERGÊNCIA -->
      <div class="secao">
        <h3 class="secao-titulo">Contato para casos de emergência</h3>
        <div class="grid">
          <div class="campo-container">
            <label>Nome do Contato:</label>
            <div class="campo-editavel">
              <input
                type="text"
                v-model="dados.contatoNome"
                :disabled="!editando.contatoNome"
              />
              <button
                type="button"
                class="btn-editar"
                @click="toggleEdicao('contatoNome')"
              >
                {{ editando.contatoNome ? "Cancelar" : "Editar" }}
              </button>
              <button
                v-if="editando.contatoNome"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('contatoNome')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label>Telefone do Contato:</label>
            <div class="campo-editavel">
              <input
                type="text"
                v-model="dados.contatoTelefone"
                :disabled="!editando.contatoTelefone"
              />
              <button
                type="button"
                class="btn-editar"
                @click="toggleEdicao('contatoTelefone')"
              >
                {{ editando.contatoTelefone ? "Cancelar" : "Editar" }}
              </button>
              <button
                v-if="editando.contatoTelefone"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('contatoTelefone')"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- NATURALIDADE -->
      <div class="secao">
        <h3 class="secao-titulo">Naturalidade</h3>
        <div class="grid-naturalidade">
          <div class="campo-container">
            <label>País:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.pais" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Estado:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.estado" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Naturalidade (Município):</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.naturalidade" disabled />
            </div>
          </div>

          <div class="campo-container">
            <label>Nacionalidade:</label>
            <div class="campo-editavel">
              <input type="text" v-model="dados.nacionalidade" disabled />
            </div>
          </div>
        </div>

        <div class="botoes-naturalidade">
          <button
            type="button"
            class="btn-solicitar-tudo"
            @click="solicitarAlteracaoNaturalidade"
          >
            Solicitar Alteração de Todos os Campos
          </button>
        </div>
      </div>
    </form>

    <p class="aviso-final">
      Favor preencher os campos vazios ou não informados.<br />
      ATENÇÃO: Dados bloqueados devem ser alterados diretamente pela PROGRAD.
    </p>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

// Dados iniciais
const dadosIniciais = {
  nomeCivil: "Exemplo Nome Civil",
  nomeMae: "Maria Exemplo",
  nomePai: "João Exemplo",
  dataNascimento: "01/01/2000",
  sexo: "Masculino",
  estadoCivil: "Solteiro(a)",
  etnia: "Parda",
  tipoSanguineo: "",
  fatorRH: "",
  anoConclusaoEM: "2020",
  deficiencia: "Sem deficiência",
  identidadeGenero: "Não declarado",
  nomeSocial: "Exemplo Nome Social",
  contatoNome: "Contato Exemplo",
  contatoTelefone: "(27)99999-9999",
  pais: "Brasil",
  estado: "Espírito Santo",
  naturalidade: "João Neiva",
  nacionalidade: "Brasileira",
};

const dados = reactive({ ...dadosIniciais });
const dadosOriginais = reactive({ ...dadosIniciais });

// Estado de edição para cada campo
const editando = reactive({
  nomeCivil: false,
  nomeMae: false,
  nomePai: false,
  tipoSanguineo: false,
  fatorRH: false,
  identidadeGenero: false,
  nomeSocial: false,
  contatoNome: false,
  contatoTelefone: false,
});

// Verifica se há alterações pendentes
const alteracoesPendentes = computed(() => {
  return Object.keys(dados).some((key) => dados[key] !== dadosOriginais[key]);
});

// Alternar modo de edição
const toggleEdicao = (campo) => {
  editando[campo] = !editando[campo];
  if (!editando[campo]) {
    dados[campo] = dadosOriginais[campo];
  }
};

// Salvar um campo individual
const salvarCampo = (campo) => {
  editando[campo] = false;
  dadosOriginais[campo] = dados[campo];
  alert(`Campo "${campo}" salvo com sucesso!`);
};

// Salvar todas as alterações
const salvarAlteracoes = () => {
  Object.assign(dadosOriginais, dados);
  Object.keys(editando).forEach((key) => (editando[key] = false));
  alert("Todas as alterações foram salvas com sucesso!");
};

// Resetar formulário
const resetarFormulario = () => {
  Object.assign(dados, dadosOriginais);
  Object.keys(editando).forEach((key) => (editando[key] = false));
};

// Solicitar alteração de campo bloqueado
const solicitarAlteracao = (campo) => {
  alert(
    `Solicitação de alteração para o campo: "${campo}" enviada para a PROGRAD.`
  );
};

// Solicitar alteração de todos os campos de naturalidade
const solicitarAlteracaoNaturalidade = () => {
  const campos = [
    "País",
    "Estado",
    "Naturalidade (Município)",
    "Nacionalidade",
  ];
  alert(
    `Solicitação de alteração para os seguintes campos enviada para a PROGRAD:\n\n- ${campos.join(
      "\n- "
    )}`
  );
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.subtitulo {
  font-size: 20px;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.secao {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.secao-titulo {
  font-size: 18px;
  margin-bottom: 16px;
  color: #006699;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.campo-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.campo-editavel {
  display: flex;
  gap: 8px;
  align-items: center;
}

label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

input[type="text"],
select {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input[disabled],
select[disabled] {
  background-color: #f5f5f5;
  color: #666;
}

button {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.btn-editar {
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  color: #333;
}

.btn-editar:hover {
  background-color: #d0d0d0;
}

.btn-salvar {
  background-color: #4caf50;
  border: 1px solid #388e3c;
  color: white;
}

.btn-salvar:hover {
  background-color: #388e3c;
}

.btn-solicitar {
  background-color: #ff9800;
  border: 1px solid #f57c00;
  color: white;
}

.btn-solicitar:hover {
  background-color: #f57c00;
}

.btn-cancelar {
  background-color: #f44336;
  border: 1px solid #d32f2f;
  color: white;
}

.btn-cancelar:hover {
  background-color: #d32f2f;
}

.btn-salvar-tudo {
  background-color: #2196f3;
  border: 1px solid #1976d2;
  color: white;
}

.btn-salvar-tudo:hover {
  background-color: #1976d2;
}

.btn-salvar-tudo:disabled {
  background-color: #b0bec5;
  border-color: #90a4ae;
  cursor: not-allowed;
}

.botoes-formulario {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.aviso,
.aviso-final {
  margin-top: 12px;
  font-size: 13px;
  color: #b22222;
  background: #fff3f3;
  padding: 10px;
  border-left: 4px solid #b22222;
  border-radius: 4px;
}

.aviso-final {
  margin-top: 24px;
  text-align: center;
}

.grid-naturalidade {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.botoes-naturalidade {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

.btn-solicitar-tudo {
  background-color: #ff9800;
  border: 1px solid #f57c00;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-solicitar-tudo:hover {
  background-color: #f57c00;
}

@media (max-width: 600px) {
  .grid,
  .grid-naturalidade {
    grid-template-columns: 1fr;
  }

  .campo-editavel {
    flex-direction: column;
    align-items: flex-start;
  }

  .botoes-formulario,
  .botoes-naturalidade {
    flex-direction: column;
  }

  button,
  .btn-solicitar-tudo {
    width: 100%;
  }
}
</style>
