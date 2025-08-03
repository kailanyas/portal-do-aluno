<template>
  <div class="cards-container">
    <div class="card">
      <div class="card-header">
        <h3>Acompanhamento Acadêmico</h3>
      </div>
      <p class="card-explanation">
        Acesse seu histórico, notas e frequência detalhados.
      </p>
      <button class="card-button" @click="navigateTo('AcompanhamentoAcademico')">Acessar</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Ementas Disciplinas</h3>
      </div>
      <p class="card-explanation">
        Consulte as ementas de todas as disciplinas do seu curso.
      </p>
      <button class="card-button" @click="$emit('abrirEmentaModal')">Acessar</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Minhas Disciplinas</h3>
      </div>
      <p class="card-explanation">
        Veja detalhes e avalie os docentes das suas disciplinas atuais.
      </p>
      <button class="card-button" @click="navigateTo('MinhasDisciplinas')">Acessar</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Programa de Disciplina</h3>
      </div>
      <p class="card-explanation">
        Busque e visualize o plano de ensino de qualquer disciplina.
      </p>
      <button class="card-button" @click="navigateTo('ProgramaDeDisciplina')">Acessar</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Grade de Horário</h3>
      </div>
      <p class="card-explanation">
        Visualize sua grade de horários semanal completa.
      </p>
      <button class="card-button" @click="$emit('abrirHorarioModal')">Acessar</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<style scoped>
.cards-container {
  display: grid;
  /* ✨ ALTERAÇÃO AQUI: Força a grade a ter 3 colunas iguais ✨ */
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.card {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}
.card-header h3 {
  margin: 0 0 0.75rem 0;
  color: #144575;
  font-size: 1.1rem;
  text-align: center;
}
.card-explanation {
  font-size: 0.9em;
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
  flex-grow: 1;
}
.card-button {
  background-color: #144575;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.2s ease;
  width: 100%;
  margin-top: 0.75rem;
}
.card-button:hover {
  background-color: #103a60;
}


@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>