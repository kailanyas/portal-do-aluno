<template>
  <div class="cards-container">
    <div class="card" v-for="card in cards" :key="card.title">
      <div class="card-header">
        <h3>{{ card.title }}</h3>
      </div>
      <p class="card-explanation">
        {{ card.description }}
      </p>
      <ul class="event-items">
        <li class="event-item">
        </li>
      </ul>
      
      <div class="button-wrapper">
        <button 
          class="card-button" 
          :disabled="card.disabled" 
          @click="navigateTo(card.routeName)"
        >
          Acessar
        </button>
        <span v-if="card.disabled" class="tooltip">{{ card.disabledReason }}</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // ✨ ALTERAÇÃO: Importe o ref
import { useRouter } from 'vue-router';

const router = useRouter();

// ✨ ALTERAÇÃO: Toda a informação dos cards agora vive aqui no script ✨
const cards = ref([
  {
    title: 'Atividades Complementares',
    description: 'Envie e acompanhe suas atividades complementares para validar no seu histórico escolar.',
    routeName: 'AtividadesComplementares',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Colação de Grau/Diploma',
    description: 'Confira seus dados cadastrais para a colação de grau e emissão do Diploma Digital, evitando taxas futuras.',
    routeName: 'Colacao',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Comprovante de Vacinação',
    description: 'Envie e acompanhe o status do seu comprovante de vacinação para registro acadêmico.',
    routeName: 'ComprovanteVacinacao',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Estágio Obrigatório',
    description: 'Envie os documentos exigidos para o cadastro de seu estágio obrigatório no E-Social, conforme orientação da Coordenação.',
    routeName: 'EstagioObrigatorio',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Desistência do Curso',
    description: 'Solicite o cancelamento definitivo do seu vínculo com a UFES. Atenção: esta ação é irreversível.',
    routeName: 'DesistenciaCurso',
    disabled: false,
    disabledReason: ''
  },
  {
    title: 'Trancamento de Matrícula',
    description: 'Suspenda temporariamente suas atividades acadêmicas sem perder o vínculo, via TMA ou TMJ, conforme prazos.',
    routeName: 'TrancamentoMatricula',
    disabled: true, // Card desabilitado
    disabledReason: 'Prazo para solicitação encerrado em 18/07/2025.' // Mensagem de motivo
  }
]);

const navigateTo = (routeName) => {
  // Adicionamos uma verificação para não navegar se a rota não existir
  if (routeName) {
    router.push({ name: routeName });
  }
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

/* ✨ ALTERAÇÃO: NOVOS ESTILOS ADICIONADOS ABAIXO ✨ */

.button-wrapper {
  position: relative;
  width: 80%;
  margin: 0.75rem auto 0;
}

/* Ajuste no botão para ele preencher o wrapper */
.card-button {
  width: 100%;
  margin: 0;
}

/* Estilo do botão desabilitado */
.card-button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
.card-button:disabled:hover {
  background-color: #cccccc;
}

/* A mensagem (tooltip) */
.tooltip {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  text-align: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
  transition: opacity 0.2s ease;
  z-index: 10;
}

/* Mostra o tooltip ao passar o mouse */
.button-wrapper:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* Media Queries (mantidas como estavam) */
@media (max-width: 1200px) {
  /* ... */
}
@media (max-width: 768px) {
  /* ... */
}
@media (max-width: 480px) {
  /* ... */
}
</style>