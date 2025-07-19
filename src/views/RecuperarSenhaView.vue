<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function recuperarSenha() {
  router.push('/')
}
</script>

<template>
  <div id="content-login">
    <div id="login">
      <div id="header-login">
        <img id="logo" src="../../public/imagens/logo-ufes.png" alt="Logo UFES" />
        <h1>Recuperar Senha</h1>
        <p class="subtitle">Insira seu nome de usuário e enviaremos um link no seu email institucional para alteração de senha</p>
      </div>

      <form id="login-form" @submit.prevent="recuperarSenha">
        <label for="usuario">Usuário</label>
        <input type="text" id="usuario" />

        <button type="submit">Enviar link</button>
      </form>
    </div>
  </div>
    
</template>

<style scoped>
#content-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;
  box-sizing: border-box;
}

#login {
  background-color: white;
  padding: 3.5rem;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  text-align: center;
}

#logo {
  width: 100px;
  height: 70px;
  margin-bottom: 0.2rem;
}

#login h1 {
  font-size: 2rem;
  font-weight: bold;
}

.subtitle {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 1.5rem;
}

#login-form {
  text-align: center;
}

#login-form label {
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  display: block;
}

#login-form input[type="text"]{
  width: 100%;
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}


#login-form button {
  width: 100%;
  background-color: #0e3f73;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

#login-form button:hover {
  background-color: #0a2d52;
}

@media (max-width: 768px) {
  #login {
    padding: 2.5rem;
    margin: 1rem;
  }

  #login h1 {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 0.85rem;
  }

  #login-form input[type="text"]{
    padding: 0.6rem;
    font-size: 0.9rem;
  }

  #login-form button {
    padding: 0.7rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  #login {
    padding: 1.5rem;
    border-radius: 15px;
  }

  #logo {
    width: 80px;
    height: 56px;
  }

  #login h1 {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  #login-form label {
    font-size: 0.8rem;
  }

  #login-form input[type="text"] {
    padding: 0.5rem;
    font-size: 0.85rem;
  }

  #login-form button {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
}
</style>