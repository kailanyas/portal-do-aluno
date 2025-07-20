<template>
  <div class="faq-container">
    <div class="faq">
      <div class="header-with-back-arrow">
        <i class="fa-solid fa-circle-chevron-left back-arrow" @click="goBack"></i>
        <h1>Tutoriais</h1>
      </div>

      <div class="faq-item">
        <Dropdown titulo="Atualização de Dados Obrigatórios">
            <iframe src="https://aluno.ufes.br/Tutoriais/Cadastro%20Obrigatorio.pdf" width="100%" height="600px"></iframe>
        </Dropdown>

        <Dropdown titulo="Atividades Complementares">
            <iframe src="https://aluno.ufes.br/Tutoriais/Atividades%20Complementares%20Tutorial%20Aluno.pdf" width="100%" height="600px"></iframe>
        </Dropdown>

        <Dropdown titulo="Acesso ao Portal">
            <iframe src="https://aluno.ufes.br/Tutoriais/Manual%20de%20acesso%20ao%20portal%20do%20aluno_new.pdf" width="100%" height="600px"></iframe>
        </Dropdown>

        <Dropdown titulo="Avaliação dos Docentes">
            <iframe src="https://aluno.ufes.br/Tutoriais/Avaliacao%20-%20Portal%20do%20Aluno.pdf" width="100%" height="600px"></iframe>
        </Dropdown>

        <Dropdown titulo="Solicitação de Matrícula">
            <iframe src="https://aluno.ufes.br/Tutoriais/Avaliacao%20-%20Portal%20do%20Aluno.pdf" width="100%" height="600px"></iframe>
        </Dropdown>
        
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from '../components/DropDown.vue'; // Verifique o caminho para o seu componente Dropdown

export default {
  name: 'FAQView',
  components: {
    Dropdown,
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
.faq-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box; 
  overflow-y: auto;
}


.faq {
  width: 100%;
  max-width: 1000px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-with-back-arrow {
  display: flex;
  align-items: center; 
  justify-content: center; 
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  flex-shrink: 0;
  z-index: 10; 
  background-color: white; 
}

.faq h1 {
  margin: 0; 
  text-align: center;
  color: #144575;
  flex-grow: 1; 
  padding-left: 20px;
  padding-right: 20px; 
}

.back-arrow {
  font-size: 2.5rem; 
  color: #144575; 
  cursor: pointer; 
  position: absolute;
  left: 0;
  padding-left: 10px;
  transition: color 0.2s ease; 
}

.back-arrow:hover {
  color: #0d2e4d; 
}

.faq-item {
  width: 100%;
  display: flex;
  flex-direction: column;

}

span {
  font-weight: 600;
  color: #222222;
}

li {
  margin-left: 2rem;
}

@media (max-width: 600px) {
  .header-with-back-arrow {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 10px;
  }

  .faq h1 {
    font-size: 1.2rem;
    padding: 0 1rem;
    text-align: left;
  }

  .back-arrow {
    font-size: 2rem;
    padding-left: 0;
    position: static; 
    margin-right: 10px; 
  }
}
</style>