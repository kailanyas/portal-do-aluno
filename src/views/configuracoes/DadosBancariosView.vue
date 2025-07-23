<template>
  <div class="bancarios-container">
    <h2>Alterar Dados Bancários</h2>

    <div class="orientacoes-container">
      <h2>📌 Orientações</h2>
      <ol class="lista-orientacoes">
        <li>Informe a conta bancária para receber bolsas e auxílios.</li>
        <li>Mantenha os dados sempre atualizados.</li>
        <li>Somente uma conta pode ser cadastrada por aluno(a).</li>
        <li>Alterações feitas até o dia 15 serão válidas no mês vigente.</li>
        <li>A conta deve estar no mesmo CPF do estudante.</li>
        <li>Não aceitamos conta salário, CAIXA TEM, nem poupança (exceto da Caixa).</li>
        <li>Se o banco/agência não estiver disponível, contate a Unidade Gestora.</li>
      </ol>
    </div>

    <div class="banco-atual">
      <h3>Banco Atual</h3>
      <div class="campo-grupo">
        <label>Banco</label>
        <input type="text" :value="dadosBancarios.banco" readonly />
      </div>
      <div class="campo-grupo">
        <label>Agência*</label>
        <input type="text" :value="dadosBancarios.agencia" readonly />
      </div>
      <div class="campo-grupo">
        <label>Conta Corrente*</label>
        <input type="text" :value="dadosBancarios.conta" readonly />
      </div>
      <div class="linha">
        <div class="campo-grupo">
          <label>Tipo de Conta</label>
          <input type="text" :value="dadosBancarios.tipoConta" readonly />
        </div>
        <div class="campo-grupo">
          <label>Operação</label>
          <input type="text" :value="dadosBancarios.operacao" readonly />
        </div>
      </div>
      <div class="campo-grupo">
        <label>CPF do titular*</label>
        <input type="text" :value="dadosBancarios.cpf" readonly />
      </div>
      <div class="campo-grupo">
        <label>Nome do titular*</label>
        <input type="text" :value="dadosBancarios.nome" readonly />
      </div>
    </div>

    <hr />

    <div class="banco-novo">
      <h3>Cadastrar Nova Conta Bancária</h3>
      <div class="campo-grupo">
        <label>Banco</label>
        <select v-model="novaConta.banco">
          <option value="">Selecione</option>
          <option value="BANCO DO BRASIL S.A. - 001">BANCO DO BRASIL S.A. - 001</option>
          <option value="CAIXA ECONÔMICA FEDERAL - 104">CAIXA ECONÔMICA FEDERAL - 104</option>
          <option value="ITAÚ UNIBANCO S.A. - 341">ITAÚ UNIBANCO S.A. - 341</option>
        </select>
      </div>
      <div class="campo-grupo">
        <label>Agência*</label>
        <input type="text" v-model="novaConta.agencia" />
      </div>
      <div class="campo-grupo">
        <label>Conta Corrente*</label>
        <input type="text" v-model="novaConta.conta" />
      </div>
      <div class="linha">
        <div class="campo-grupo">
          <label>Tipo de Conta</label>
          <select v-model="novaConta.tipoConta">
            <option value="">Selecione</option>
            <option>Conta Corrente</option>
            <option>Poupança</option>
          </select>
        </div>
        <div class="campo-grupo">
          <label>Operação</label>
          <input type="text" v-model="novaConta.operacao" />
        </div>
      </div>
      <div class="campo-grupo">
        <label>CPF do titular*</label>
        <input type="text" v-model="novaConta.cpf" />
      </div>
      <div class="campo-grupo">
        <label>Nome do titular*</label>
        <input type="text" v-model="novaConta.nome" />
      </div>

      <div class="botoes-edicao">
        <button @click="salvarNovaConta">Salvar Nova Conta</button>
      </div>
    </div>

    <p class="atencao">
      ⚠️ Apenas contas no CPF do(a) estudante são aceitas.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dadosBancarios = ref({
  banco: 'BANCO DO BRASIL S.A. - 001',
  agencia: '1234-5',
  conta: '987654-3',
  tipoConta: 'Conta Corrente',
  operacao: '001',
  cpf: '000.000.000-00',
  nome: 'Nome Exemplo do Estudante'
})

const novaConta = ref({
  banco: '',
  agencia: '',
  conta: '',
  tipoConta: '',
  operacao: '',
  cpf: '',
  nome: ''
})

function salvarNovaConta() {
  const confirmado = confirm(
    'Tem certeza que deseja substituir os dados da conta atual? Essa ação não poderá ser desfeita.'
  )

  if (confirmado) {
    dadosBancarios.value = { ...novaConta.value }
    alert('Conta atualizada com sucesso!')
    novaConta.value = {
      banco: '',
      agencia: '',
      conta: '',
      tipoConta: '',
      operacao: '',
      cpf: '',
      nome: ''
    }
  }
}
</script>

<style scoped>
.bancarios-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.2rem;
}

h3 {
  font-size: 1.15rem;
  color: #004080;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.campo-grupo {
  margin-bottom: 1rem;
}

.linha {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.campo-grupo label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: #222;
}

.campo-grupo input,
.campo-grupo select {
  width: 100%;
  padding: 0.5rem;
  font-size: 0.95rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
}

.campo-grupo input[readonly] {
  background-color: #f0f0f0;
  color: #666;
}

.orientacoes-container {
  background-color: #fff;
  border-left: 5px solid #004080;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.orientacoes-container h2 {
  color: #004080;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.lista-orientacoes {
  padding-left: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
}

.lista-orientacoes li {
  margin-bottom: 0.6rem;
}

.lista-orientacoes strong {
  color: #c0392b;
  font-weight: 600;
}

.botoes-edicao {
  margin-top: 1rem;
  display: flex;
  gap: 0.8rem;
}

.botoes-edicao button {
  padding: 0.5rem 1.2rem;
  font-size: 0.95rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #28a745;
  color: white;
  transition: background-color 0.2s ease;
}

.botoes-edicao button:hover {
  background-color: #218838;
}

.atencao {
  margin-top: 1.5rem;
  font-size: 0.92rem;
  background-color: #fff3cd;
  color: #856404;
  padding: 0.75rem 1rem;
  border-left: 4px solid #ffc107;
  border-radius: 6px;
}
</style>
