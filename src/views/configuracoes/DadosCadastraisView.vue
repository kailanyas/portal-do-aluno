<template>
  <div class="container">
    <h2 class="subtitulo">Alteração de Dados Cadastrais</h2>

    <form @submit.prevent="salvarAlteracoes">
      <!-- DADOS PESSOAIS -->
      <div class="secao">
        <h3 class="secao-titulo">Dados Pessoais</h3>
        <div class="grid">
          <div class="campo-container">
            <label for="nomeCivil">Nome Civil:</label>
            <div class="campo-editavel">
              <input
                id="nomeCivil"
                type="text"
                v-model="dados.nomeCivil"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('nomeCivil') }"
                :disabled="campoBloqueado('nomeCivil')"
                @input="campoAlterado('nomeCivil')"
              />
              <button
                v-if="campoModificado('nomeCivil') && !campoBloqueado('nomeCivil')"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('nomeCivil')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label for="nomeMae">Nome da mãe ou 1º parental:</label>
            <div class="campo-editavel">
              <input
                id="nomeMae"
                type="text"
                v-model="dados.nomeMae"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('nomeMae') }"
                :disabled="campoBloqueado('nomeMae')"
                @input="campoAlterado('nomeMae')"
              />
              <button
                v-if="campoModificado('nomeMae') && !campoBloqueado('nomeMae')"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('nomeMae')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label for="nomePai">Nome do pai ou 2º parental:</label>
            <div class="campo-editavel">
              <input
                id="nomePai"
                type="text"
                v-model="dados.nomePai"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('nomePai') }"
                :disabled="campoBloqueado('nomePai')"
                @input="campoAlterado('nomePai')"
              />
              <button
                v-if="campoModificado('nomePai') && !campoBloqueado('nomePai')"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('nomePai')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label>Data de Nascimento:</label>
            <div class="campo-bloqueado">
              {{ dados.dataNascimento }}
            </div>
          </div>

          <div class="campo-container">
            <label>Sexo:</label>
            <div class="campo-bloqueado">
              {{ dados.sexo }}
            </div>
          </div>

          <div class="campo-container">
            <label>Estado Civil:</label>
            <div class="campo-bloqueado">
              {{ dados.estadoCivil }}
            </div>
          </div>

          <div class="campo-container">
            <label>Etnia:</label>
            <div class="campo-bloqueado">
              {{ dados.etnia }}
            </div>
          </div>

          <div class="campo-container">
            <label for="tpSangue">Tipo Sanguíneo:</label>
            <div class="campo-editavel">
              <select
                v-model="dados.tipoSanguineo"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('tipoSanguineo') }"
                :disabled="campoBloqueado('tipoSanguineo')"
                @change="campoAlterado('tipoSanguineo')"
              >
                <option value="">Selecione</option>
                <option class="tpSangue">A</option>
                <option class="tpSangue">B</option>
                <option class="tpSangue">AB</option>
                <option class="tpSangue">O</option>
                <option class="tpSangue">Não Informado</option>
              </select>
              <button
                v-if="campoModificado('tipoSanguineo') && !campoBloqueado('tipoSanguineo')"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('tipoSanguineo')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label for="RH">Fator RH:</label>
            <div class="campo-editavel">
              <select
                v-model="dados.fatorRH"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('fatorRH') }"
                :disabled="campoBloqueado('fatorRH')"
                @change="campoAlterado('fatorRH')"
              >
                <option value="">Selecione</option>
                <option class="RH">">+</option>
                <option class="RH">-</option>
                <option class="RH">Não Informado</option>
              </select>
              <button
                v-if="campoModificado('fatorRH') && !campoBloqueado('fatorRH')"
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
            <div class="campo-bloqueado">
              {{ dados.anoConclusaoEM }}
            </div>
          </div>

          <div class="campo-container">
            <label>Deficiência(s):</label>
            <div class="campo-bloqueado">
              {{ dados.deficiencia }}
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
            <label for="genero">Identidade de Gênero:</label>
            <div class="campo-editavel">
              <select
                v-model="dados.identidadeGenero"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('identidadeGenero') }"
                :disabled="campoBloqueado('identidadeGenero')"
                @change="campoAlterado('identidadeGenero')"
              >
                <option value="Não declarado"class="genero">Não declarado</option>
                <option value="Mulher cisgênero"class="genero">Mulher cisgênero</option>
                <option value="Homem cisgênero"class="genero">Homem cisgênero</option>
                <option value="Mulher transgênero" class="genero">Mulher transgênero</option>
                <option value="Homem transgênero" class="genero">Homem transgênero</option>
                <option value="Não-binário" class="genero">Não-binário</option>
                <option value="Outro" class="genero">Outro</option>
              </select>
              <button
                v-if="campoModificado('identidadeGenero') && !campoBloqueado('identidadeGenero')"
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
            <label for="nomeSocial">Nome Social:</label>
            <div class="campo-editavel">
              <input
                id="nomeSocial"
                type="text"
                v-model="dados.nomeSocial"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('nomeSocial') }"
                :disabled="campoBloqueado('nomeSocial')"
                @input="campoAlterado('nomeSocial')"
              />
              <button
                v-if="campoModificado('nomeSocial') && !campoBloqueado('nomeSocial')"
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
            <label for="nomeContato">Nome do Contato:</label>
            <div class="campo-editavel">
              <input
                id="nomeContato"
                type="text"
                v-model="dados.contatoNome"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('contatoNome') }"
                :disabled="campoBloqueado('contatoNome')"
                @input="campoAlterado('contatoNome')"
              />
              <button
                v-if="campoModificado('contatoNome') && !campoBloqueado('contatoNome')"
                type="button"
                class="btn-salvar"
                @click="salvarCampo('contatoNome')"
              >
                Salvar
              </button>
            </div>
          </div>

          <div class="campo-container">
            <label for="telContato">Telefone do Contato:</label>
            <div class="campo-editavel">
              <input
                id="telContato"
                type="text"
                v-model="dados.contatoTelefone"
                v-maska="'(##) #####-####'"
                :class="{ 'campo-editavel-input': true, 'campo-modificado': campoModificado('contatoTelefone') }"
                :disabled="campoBloqueado('contatoTelefone')"
                @input="campoAlterado('contatoTelefone')"
                placeholder="(00) 00000-0000"
              />
              <button
                v-if="campoModificado('contatoTelefone') && !campoBloqueado('contatoTelefone')"
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
            <div class="campo-bloqueado">
              {{ dados.pais }}
            </div>
          </div>

          <div class="campo-container">
            <label>Estado:</label>
            <div class="campo-bloqueado">
              {{ dados.estado }}
            </div>
          </div>

          <div class="campo-container">
            <label>Naturalidade (Município):</label>
            <div class="campo-bloqueado">
              {{ dados.naturalidade }}
            </div>
          </div>

          <div class="campo-container">
            <label>Nacionalidade:</label>
            <div class="campo-bloqueado">
              {{ dados.nacionalidade }}
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
import { reactive } from "vue";

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
const camposModificados = reactive({});

// Verifica se um campo foi modificado
const campoModificado = (campo) => {
  return camposModificados[campo] || false;
};

// Verifica se um campo está bloqueado (não editável)
const campoBloqueado = (campo) => {
  const camposBloqueados = [
    'nomeCivil',
    'nomeMae',
    'nomePai',
    'dataNascimento',
    'sexo',
    'estadoCivil',
    'etnia',
    'anoConclusaoEM',
    'deficiencia',
    'pais',
    'estado',
    'naturalidade',
    'nacionalidade'
  ];
  return camposBloqueados.includes(campo);
};

// Marca um campo como modificado quando alterado
const campoAlterado = (campo) => {
  camposModificados[campo] = dados[campo] !== dadosOriginais[campo];
};

// Salvar um campo individual
const salvarCampo = (campo) => {
  dadosOriginais[campo] = dados[campo];
  camposModificados[campo] = false;
  alert(`Campo "${campo}" salvo com sucesso!`);
};

// Salvar todas as alterações
const salvarAlteracoes = () => {
  Object.assign(dadosOriginais, dados);
  Object.keys(camposModificados).forEach(key => camposModificados[key] = false);
  alert("Todas as alterações foram salvas com sucesso!");
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
  color: #144575;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.grid-naturalidade {
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

.campo-editavel {
  display: flex;
  gap: 8px;
  align-items: center;
}

.campo-bloqueado {
  padding: 8px 0;
  color: #666;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.campo-editavel-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
  transition: all 0.3s ease;
}

.campo-editavel-input:not([disabled]) {
  border-color: #4a89dc;
  background-color: #ffffff;
  box-shadow: 0 0 0 2px rgba(74, 137, 220, 0.1);
}

.campo-editavel-input[disabled] {
  background-color: #f5f5f5;
  color: #666;
  cursor: not-allowed;
}


select.campo-editavel-input {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 32px;
}

input[type="text"][v-maska] {
  letter-spacing: 0.5px;
}

button {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  white-space: nowrap;
}

.btn-salvar {
  background-color: #37bc9b;
  color: white;
}

.btn-salvar:hover {
  background-color: #2e9c81;
}

.btn-solicitar {
  background-color: #144575;
  color: white;
}

.btn-solicitar:hover {
  background-color: #144575;
}

.btn-solicitar-tudo {
  background-color: #144575;
  color: white;
  padding: 10px 20px;
  font-size: 15px;
}

.btn-solicitar-tudo:hover {
  background-color: #144575;
}

.botoes-naturalidade {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
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

@media (max-width: 600px) {
  .grid,
  .grid-naturalidade {
    grid-template-columns: 1fr;
  }

  .campo-editavel {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    width: 100%;
    margin-top: 8px;
  }

  .botoes-naturalidade {
    flex-direction: column;
  }

  .btn-solicitar-tudo {
    width: 100%;
  }
}
</style>