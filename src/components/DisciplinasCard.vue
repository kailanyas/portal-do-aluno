<template>
  <div class="cards-container">
    <div class="card">
      <div class="card-header">
        <h3>Acompanhamento Acadêmico</h3>
      </div>
      <p class="card-explanation">
        Envie e acompanhe suas atividades complementares para validar no seu histórico escolar.
      </p>
      <ul class="event-items">
        <li class="event-item">
          </li>
      </ul>
      <button class="card-button" @click="navigateTo('AcompanhamentoAcademico')">Acessar</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Ementas Disciplinas</h3>
      </div>
      <p class="card-explanation">
        Confira sua ementa disciplinar.
      </p>
      <ul class="event-items">
        <li class="event-item">
          </li>
      </ul>
      <button class="card-button" @click="$emit('abrirEmentaModal')">Acessar</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Minhas Disciplinas</h3>
      </div>
      <p class="card-explanation">
        Acompanhe suas disciplinas.
      </p>
      <ul class="event-items">
        <li class="event-item">
          </li>
      </ul>
      <button class="card-button" @click="navigateTo('MinhasDisciplinas')">Acessar</button>
    </div>

    <div class="card">
      <div class="card-header">
        <h3>Programa de Disciplina</h3>
      </div>
      <p class="card-explanation">
        Veja o programa de disciplinas.
      </p>
      <ul class="event-items">
        <li class="event-item">
          </li>
      </ul>
      <button class="card-button" @click="navigateTo('ProgramaDeDisciplina')">Acessar</button>
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1.5rem;
  height: auto;
}

.card {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 1.25rem;
  text-align: left;
  font-weight: normal;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  height: auto;
  min-height: 250px;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  box-sizing: border-box;
}

.card-header h3 {
  margin-bottom: 0.75rem;
  color: #144575;
  font-size: 1.05rem;
  text-align: center;
}

.card-explanation {
  font-size: 0.9em;
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-items {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-height: 150px;
  font-size: 0.9em;
}

.event-item {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid #ddd;
}

.event-name {
  font-weight: 600;
  color: #102a54;
}

.event-date {
  color: #2563eb;
  font-style: normal;
}

.card-button {
  background-color: #144575;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1em;
  transition: background-color 0.2s ease;
  width: 80%;
  margin: 0.75rem auto 0;
  display: block;
}

.card-button:hover {
  background-color: #103a60;
}

@media (max-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    max-width: 900px;
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  .card {
    min-height: 200px;
    padding: 1rem;
  }
  .card-header h3 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .cards-container {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>