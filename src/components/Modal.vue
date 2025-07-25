<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'


const isModalOpen = ref(false)


const avaliacao = ref({
  q1: 5, q2: 5, q3: 5, q4: 5, q5: 5, q6: 5, q7: 5, q8: 5, q9: 5
});

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

function submitEvaluation() {
  
  console.log('Notas da avaliação:', avaliacao.value);

  Swal.fire({
    title: 'Avaliação enviada com sucesso!',
    text: 'Obrigado por sua participação.',
    icon: 'success',
    confirmButtonColor: '#144575',
    confirmButtonText: 'OK',
    width: '500px'
  }).then(() => {
    closeModal()
  })
}

function confirmarEnvio() {
  Swal.fire({
    title: 'Tem certeza que deseja enviar a avaliação?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#144575',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar',
    width: '500px'
  }).then((result) => {
    if (result.isConfirmed) {
      submitEvaluation()
    }
  })
}
</script>

<template>
  <button @click="openModal" class="btn-open">Avaliar Docente</button>

  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isModalOpen" class="modal" @click.self="closeModal">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Formulário de Avaliação</h2>
            <p>Avalie os critérios abaixo com uma nota de 1 a 10.</p>
          </div>

          <div class="evaluation-scale">
            <div class="barra">
              <div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div>
              <div class="item">6</div><div class="item">7</div><div class="item">8</div><div class="item">9</div><div class="item">10</div>
            </div>
            <div class="legenda">
              <span>Péssimo</span>
              <span>Excelente</span>
            </div>
          </div>
          
          <form @submit.prevent="confirmarEnvio" class="evaluation-form">
            <div class="form-group">
              <label for="q1">1. Apresentou e discutiu o programa da disciplina (objetivos, estratégias, conteúdos, recursos, etc.)</label>
              <select id="q1" v-model="avaliacao.q1">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q2">2. Utilizou metodologia e recursos de ensino motivadores e condizentes com os objetivos e conteúdos propostos</label>
              <select id="q2" v-model="avaliacao.q2">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q3">3. Estabeleceu conexão entre os conteúdos teóricos e as práticas profissionais ou com o contexto social concreto</label>
              <select id="q3" v-model="avaliacao.q3">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q4">4. Demonstrou disponibilidade para atendimento individual ao aluno</label>
              <select id="q4" v-model="avaliacao.q4">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q5">5. Foi pontual, assíduo e cumpriu a carga horária prevista para a disciplina</label>
              <select id="q5" v-model="avaliacao.q5">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q6">6. Demonstrou disponibilidade para atendimento individual ao aluno</label>
              <select id="q6" v-model="avaliacao.q6">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q7">7. Elabora avaliações compatíveis e coerentes com o conteúdo desenvolvido, discute e analisa os resultados com os alunos</label>
              <select id="q7" v-model="avaliacao.q7">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q8">8. Promoveu ambiente de aprendizagem com predomínio do respeito mútuo e interação</label>
              <select id="q8" v-model="avaliacao.q8">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="q9">9. Em resumo, em que medida o professor contribuiu para a aquisição de seus conhecimentos na disciplina ministrada</label>
              <select id="q9" v-model="avaliacao.q9">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            
            <div class="form-buttons">
              <button type="button" @click="closeModal" class="btn btn-cancel">Cancelar</button>
              <button type="submit" class="btn btn-submit">Enviar Avaliação</button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  z-index: 1000;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: translateY(20px);
}
.modal-content {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  overflow-y: auto;
  max-height: 90vh;
}
.modal-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.modal-header h2 {
    margin: 0 0 0.5rem 0;
    color: #1a202c;
    font-size: 1.75rem;
}
.modal-header p {
    margin: 0;
    color: #4a5568;
    font-size: 1rem;
}
.evaluation-scale {
    margin-bottom: 2rem;
}
.barra {
    display: flex;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    background-color: #0d47a1;
}
.item {
    flex: 1;
    padding: 0.75rem 0;
    text-align: center;
    color: white;
    font-weight: 700;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    transition: transform 0.2s ease, filter 0.2s ease;
}
.item:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
    z-index: 2;
}
.legenda {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0.25rem 0 0.25rem;
    font-size: 0.8rem;
    color: #718096;
    font-weight: 500;
}
.item:nth-child(1) { background-color: #ef5350; }
.item:nth-child(2) { background-color: #f78c5a; }
.item:nth-child(3) { background-color: #ffc107; }
.item:nth-child(4) { background-color: #cddc39; }
.item:nth-child(5) { background-color: #8bc34a; }
.item:nth-child(6) { background-color: #4caf50; }
.item:nth-child(7) { background-color: #388e3c; }
.item:nth-child(8) { background-color: #2e7d32; }
.item:nth-child(9) { background-color: #1b5e20; }
.item:nth-child(10) { background-color: #0d47a1; }
.form-group {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e2e8f0;
}
.form-group:last-of-type {
    border-bottom: none;
}
.form-group label {
    flex: 1;
    color: #2d3748;
    font-weight: 500;
}
.form-group input,
.form-group select {
    flex-basis: 85px;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0.5rem;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    background-color: #fff;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.form-group input:focus, .form-group input:focus-visible,
.form-group select:focus, .form-group select:focus-visible {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
.btn-open, .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
}
.btn-open {
    margin: 6px;
    font-size: 0.8rem;
    background-color: #5A82AA;
    color: #f5f5f5;
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease;
}
.btn-open:hover {
   background-color: #5A82AA;
}
.form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
}
.btn-cancel {
    background-color: #edf2f7;
    color: #4a5568;
    border: 1px solid #e2e8f0;
}
.btn-cancel:hover {
    background-color: #e2e8f0;
}
.btn-submit {
    background-color: #38a169;
    color: white;
}
.btn-submit:hover {
    background-color: #2f855a;
}
@media (max-width: 768px) {
    .modal-content {
        padding: 1.5rem;
    }
    .modal-header h2 {
        font-size: 1.5rem;
    }
    .modal-header p {
        font-size: 0.9rem;
    }
    .form-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 1rem 0;
    }
    .form-group input,
    .form-group select {
        width: 100%;
        text-align: left;
        padding: 0.75rem;
    }
    .form-buttons {
        flex-direction: column-reverse;
        gap: 0.75rem;
    }
    .btn {
        width: 100%;
        justify-content: center;
    }
}
</style>