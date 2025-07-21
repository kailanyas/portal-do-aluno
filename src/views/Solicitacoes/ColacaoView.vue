<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="" />

      <main class="main-content">
        <CardQuadrado class="form-card">
          <h2>Conferência de Dados</h2>
          <p class="section-intro">
            Os dados a seguir serão usados para sua Colação de Grau e para a confecção do seu Diploma Digital.
          </p>

          <div class="alert alert-warning">
            <strong>CONFIRA ATENTAMENTE CADA UM DELES.</strong> Erros cadastrais são de responsabilidade do estudante.
          </div>
          
          <div class="data-section">
            <h3>Dados Pessoais</h3>
            <p class="section-description">
              A identidade de gênero será usada no seu Diploma. Caso não informe, será utilizado seu sexo cadastrado.
            </p>
            <dl class="data-list">
              <dt>Nome Civil do Diplomado:</dt>
              <dd>{{ dadosEstudante.nomeCivil }} <small class="helper-text">(Conferir nome, acentuação e cedilha)</small></dd>

              <dt>Nome Social do Diplomado:</dt>
              <dd>{{ dadosEstudante.nomeSocial }} <small class="helper-text">(Conferir nome, acentuação e cedilha)</small></dd>
              
              <dt>Data de Nascimento:</dt>
              <dd>{{ dataNascimentoFormatada }} <small class="helper-text">(Conferir dia/mês)</small></dd>

              <dt>Nacionalidade:</dt>
              <dd>{{ dadosEstudante.nacionalidade }}</dd>

              <dt>Estado de Nascimento / Naturalidade:</dt>
              <dd>{{ dadosEstudante.estadoNascimento }} / {{ dadosEstudante.naturalidade }}</dd>
            </dl>
          </div>

          <div class="data-section">
            <h3>Documento para o Diploma</h3>
             <dl class="data-list">
              <dt>Documento / Número:</dt>
              <dd>{{ dadosEstudante.docTipo }} / {{ dadosEstudante.docNumero }} <small class="helper-text">(Verificar pontuação)</small></dd>

              <dt>Órgão Emissor / UF:</dt>
              <dd>{{ dadosEstudante.docOrgao }} / {{ dadosEstudante.docUF }} <small class="helper-text">(Não pode estar em branco)</small></dd>
            </dl>
          </div>

          <div class="submit-section">
            <button @click="redirecionarParaEdicao" class="btn-open">Corrigir / Atualizar Dados</button>
          </div>
        </CardQuadrado>
      </main>

      <FooterR />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import SideBar from '@/components/SideBar.vue';
import HeaderC from '@/components/Header.vue';
import FooterR from '@/components/Footer.vue';
import CardQuadrado from '@/components/CardQuadrado.vue';

const isSidebarOpen = ref(false);
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

const router = useRouter();

const dadosEstudante = ref({
  nomeCivil: 'RYAN CARLOS SARCINELLI',
  nomeSocial: 'RYAN CARLOS SARCINELLI',
  dataNascimento: '2003-05-03',
  estadoNascimento: 'Espírito Santo',
  naturalidade: 'JOÃO NEIVA',
  nacionalidade: 'Brasileira',
  docTipo: 'RG',
  docNumero: '4225237',
  docOrgao: 'SSP',
  docUF: 'ES'
});

const dataNascimentoFormatada = computed(() => {
  const data = new Date(dadosEstudante.value.dataNascimento + 'T03:00:00Z');
  return data.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
});

function redirecionarParaEdicao() {
  router.push({ name: 'dados-cadastrais' }); 
}
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
.section-intro {
  text-align: center;
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
  width: 100%;
}
.section-description {
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
  width: 100%;
  text-align: left;
}
.alert {
  padding: 15px;
  margin-top: 15px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
}
.alert-warning { 
  color: #856404; 
  background-color: #fff3cd; 
  border: 1px solid #ffeeba;
}
.data-section {
  width: 100%;
  margin-top: 25px;
}
.data-list {
  margin: 0;
  padding: 0;
}
.data-list dt {
  font-weight: bold;
  color: #555;
  font-size: 0.9em;
  margin-top: 15px;
}
.data-list dd {
  margin-left: 0;
  margin-bottom: 15px;
  font-size: 1.1em;
  color: #333;
  padding-bottom: 15px;
  border-bottom: 1px solid #e9ecef;
}
.helper-text {
  color: #d33;
  font-size: 0.85em;
  font-style: italic;
  margin-left: 8px;
}
.submit-section { 
  text-align: center; 
  margin-top: 30px; 
  width: 100%; 
}
.btn-open { 
  background-color: #144575; 
  color: white; 
  border: none; 
  padding: 12px 25px; 
  border-radius: 6px; 
  cursor: pointer; 
  font-weight: bold; 
  font-size: 1.1em;
  transition: background-color 0.2s;
}
.btn-open:hover { 
  background-color: #103a60; 
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }

  h2 {
    font-size: 1.6em;
  }

  h3 {
    font-size: 1.15em;
  }
  
  .data-list dd {
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-open {
    font-size: 1em;
    padding: 12px 20px;
  }

  .helper-text {
    margin-left: 0;
    margin-top: 4px;
  }
}
</style>