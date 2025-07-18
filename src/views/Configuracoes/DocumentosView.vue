<script setup>
import { ref } from "vue";

// Refs para os dados do novo documento
const tipo = ref("");
const numero = ref("");
const uf = ref("");
const orgao = ref("");
const expedicao = ref("");
const validade = ref("");

// Submissão do formulário
const enviarFormulario = () => {
  const dados = {
    tipo: tipo.value,
    numero: numero.value,
    uf: uf.value,
    orgao: orgao.value,
    expedicao: expedicao.value,
    validade: validade.value,
  };
  console.log("Dados enviados:", dados);
  // aqui você pode adicionar lógica para enviar para backend ou API
};
</script>

<template>
  <div class="container">
    <h2>Alterar Documentos Pessoais</h2>

    <div class="documento">
      <h3>Documento Atual</h3>

      <div class="campo-grupo">
        <label>Tipo de documento</label>
        <input type="text" value="Cadastro de Pessoas Físicas" readonly />
      </div>

      <div class="campo-grupo">
        <label>Número*</label>
        <input type="text" value="169.521.107-39" readonly />
      </div>

      <div class="linha">
        <div class="campo-grupo">
          <label>UF</label>
          <input type="text" value="**" readonly />
        </div>

        <div class="campo-grupo">
          <label>Órgão Emissor</label>
          <input type="text" readonly />
        </div>
      </div>

      <div class="linha">
        <div class="campo-grupo">
          <label>Data Expedição</label>
          <input type="date" readonly />
        </div>

        <div class="campo-grupo">
          <label>Data Validade</label>
          <input type="date" readonly />
        </div>
      </div>
    </div>

    <div class="documento">
      <h3>Documento Atual</h3>

      <div class="campo-grupo">
        <label>Tipo de documento</label>
        <input type="text" value="Carteira de Identidade" readonly />
      </div>

      <div class="campo-grupo">
        <label>Número*</label>
        <input type="text" value="4225237" readonly />
      </div>

      <div class="linha">
        <div class="campo-grupo">
          <label>UF*</label>
          <input type="text" value="ES" readonly />
        </div>

        <div class="campo-grupo">
          <label>Órgão Emissor*</label>
          <input type="text" value="SSP" readonly />
        </div>
      </div>

      <div class="linha">
        <div class="campo-grupo">
          <label>Data Expedição*</label>
          <input type="date" value="2017-06-19" readonly />
        </div>

        <div class="campo-grupo">
          <label>Data Validade</label>
          <input type="date" readonly />
        </div>
      </div>
    </div>

    <hr />

    <!-- FORMULÁRIO COMEÇA AQUI -->
    <form @submit.prevent="enviarFormulario" class="documento">
      <h3>Cadastrar Novo Documento</h3>

      <div class="campo-grupo">
        <label>Tipo de documento</label>
        <select v-model="tipo">
          <option value="">Selecione</option>
          <option>Carteira de Identidade Nacional</option>
          <option>Passaporte</option>
          <!-- outros tipos -->
        </select>
      </div>

      <div class="campo-grupo">
        <label>Número*</label>
        <input type="text" v-model="numero" required />
      </div>

      <div class="linha">
        <div class="campo-grupo">
          <label>UF</label>
          <input type="text" v-model="uf" />
        </div>

        <div class="campo-grupo">
          <label>Órgão Emissor</label>
          <input type="text" v-model="orgao" />
        </div>
      </div>

      <div class="linha">
        <div class="campo-grupo">
          <label>Data Expedição</label>
          <input type="date" v-model="expedicao" />
        </div>

        <div class="campo-grupo">
          <label>Data Validade</label>
          <input type="date" v-model="validade" />
        </div>
      </div>

      <button type="submit" class="botao">Salvar Documento</button>
    </form>

    <p class="atencao">
      <strong>ATENÇÃO:</strong> Os dados bloqueados para alteração deverão ser
      alterados diretamente pela PROGRAD.
    </p>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 700px;
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #444;
}

.container h3 {
  font-size: 16px;
  color: #006699;
  margin-top: 24px;
  margin-bottom: 12px;
}

.campo-grupo {
  margin-bottom: 12px;
}

.linha {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.campo-grupo label {
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  color: #333;
}

.campo-grupo input,
.campo-grupo select {
  width: 100%;
  padding: 6px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
}

.campo-grupo input[readonly] {
  background-color: #eee;
  color: #666;
  border-color: #ddd;
}

.botao {
  margin-top: 16px;
  padding: 10px 18px;
  background-color: #006699;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.botao:hover {
  background-color: #004c73;
}

.atencao {
  margin-top: 20px;
  font-size: 14px;
  color: #b22222;
  font-weight: bold;
}
</style>
