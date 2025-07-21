<script setup>
import { ref } from 'vue'

const senhaAtual = ref('')
const novaSenha = ref('')
const confirmarSenha = ref('')

function salvarSenha() {
  if (!senhaAtual.value || !novaSenha.value || !confirmarSenha.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }
  if (novaSenha.value !== confirmarSenha.value) {
    alert('A nova senha e a confirmação não coincidem.')
    return
  }
  alert('Função salvar senha ainda não implementada')
}
</script>

<template>
  <div class="layout-container">
    <div class="content-area">
      <main class="main-content">
        <h1>Alterar Senha</h1>

        <form @submit.prevent="salvarSenha" class="form-senha">
          <div class="form-group">
            <label for="senhaAtual">Senha Atual</label>
            <input type="password" id="senhaAtual" v-model="senhaAtual" required />
          </div>

          <div class="form-group">
            <label for="novaSenha">Nova Senha</label>
            <input type="password" id="novaSenha" v-model="novaSenha" required />
          </div>

          <div class="form-group">
            <label for="confirmarSenha">Confirmar Nova Senha</label>
            <input type="password" id="confirmarSenha" v-model="confirmarSenha" required />
          </div>

          <div class="center">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem;
  box-sizing: border-box;
  width: 100%;
}

.content-area {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-content {
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  background-color: #004080;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

/* Formulário */
.form-senha {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 6px;
  font-weight: bold;
  color: #004080;
}

input {
  padding: 10px;
  border: 1px solid #004080;
  border-radius: 6px;
  font-size: 1rem;
}

/* Botão */
button {
  background-color: #004080;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0059b3;
}

.center {
  text-align: center;
}

/* Responsivo */
@media (max-width: 600px) {
  .main-content {
    padding: 1rem;
  }

  input {
    font-size: 0.95rem;
  }

  h1 {
    font-size: 1.2rem;
    padding: 8px 16px;
  }

  button {
    width: 100%;
  }
}
</style>
