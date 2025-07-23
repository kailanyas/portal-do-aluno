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
  
  // Simulação de envio para o backend
  alert('Senha alterada com sucesso!')
  
  // Limpar os campos após o sucesso
  senhaAtual.value = ''
  novaSenha.value = ''
  confirmarSenha.value = ''
}
</script>

<template>
  <div class="container">
    <h2 class="subtitulo">Alteração de Senha</h2>

    <div class="secao">
      <form @submit.prevent="salvarSenha" class="form-senha">
        <div class="grid">
          <div class="campo-container">
            <label>Senha Atual:</label>
            <input 
              type="password" 
              v-model="senhaAtual" 
              required 
              class="campo-input"
            />
          </div>

          <div class="campo-container">
            <label>Nova Senha:</label>
            <input 
              type="password" 
              v-model="novaSenha" 
              required 
              class="campo-input"
            />
          </div>

          <div class="campo-container">
            <label>Confirmar Nova Senha:</label>
            <input 
              type="password" 
              v-model="confirmarSenha" 
              required 
              class="campo-input"
            />
          </div>
        </div>

        <div class="botoes-formulario">
          <button type="submit" class="btn-salvar">
            Salvar Alterações
          </button>
        </div>
      </form>

      <p class="aviso-final">
        A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.
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
  max-width: 600px;
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

.form-senha {
  margin-top: 16px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.campo-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.campo-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
}

.campo-input:focus {
  outline: none;
  border-color: #006699;
  box-shadow: 0 0 0 2px rgba(0, 102, 153, 0.2);
}

.botoes-formulario {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.btn-salvar {
  background-color: #006699;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-salvar:hover {
  background-color: #388e3c;
}

.btn-salvar:disabled {
  background-color: #b0bec5;
  cursor: not-allowed;
}

.aviso-final {
  margin-top: 24px;
  font-size: 13px;
  color: #666;
  text-align: center;
  font-style: italic;
}

@media (max-width: 600px) {
  .container {
    padding: 15px;
  }
  
  .botoes-formulario {
    justify-content: center;
  }
  
  .btn-salvar {
    width: 100%;
    padding: 12px;
  }
}
</style>