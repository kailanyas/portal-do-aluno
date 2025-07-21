<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Solicitação de Desistência do Curso" />

      <main class="main-content">
        <CardQuadrado class="form-card">
          <h2>Solicitação de Desistência do Curso</h2>

          <div class="instructions-section">
            <p class="centered-paragraph">
              <strong>Prezado(a) Estudante:</strong> Ao solicitar a desistência de curso, você está pedindo o <strong>CANCELAMENTO</strong> do seu vínculo ativo com a UFES. <br>
              Uma vez concluído, o desligamento é <strong>IRREVERSÍVEL</strong>. Por isso, antes de solicitar, reflita um pouco mais.
            </p>

            <h3>Atenção:</h3>
            <ul>
              <li>Abaixo, solicitamos que aponte e/ou descreva os motivos que a/o levaram a solicitar a sua desistência de curso.</li>
              <li>Se os motivos forem relacionados ao curso, sua solicitação passará pelo Colegiado e, em seguida, será concluída pela Prograd.</li>
              <li>Se os motivos forem outros, sua solicitação será enviada diretamente à Prograd, para conclusão.</li>
            </ul>
            <div class="important-note">
              <strong>IMPORTANTE:</strong> Para conclusão da solicitação de desistência de curso, sua situação deve estar REGULAR junto à Biblioteca Central.
            </div>
          </div>

          <div class="action-section">
            <div class="form-group checkbox-group">
              <input type="checkbox" id="ciencia-checkbox" v-model="isCiente">
              <label for="ciencia-checkbox">
                Estou ciente das informações acima e das implicações da desistência de curso (rompimento definitivo deste vínculo ativo com a Ufes).
              </label>
            </div>

            <div class="form-group">
              <label for="modalidade-select"><strong>Modalidade:</strong></label>
              <select id="modalidade-select" v-model="modalidadeSelecionada">
                <option value="" disabled>Escolha uma opção</option>
                <option value="sociais">Motivos Sociais</option>
                <option value="curso">Relacionados ao Curso</option>
                <option value="outros">Outros Motivos</option>
              </select>
            </div>
            
            <div v-if="modalidadeSelecionada === 'sociais'" class="conditional-options">
              <h4>Selecione os motivos (pode marcar mais de um):</h4>
              <div class="checkbox-group reason-checkbox">
                <input type="checkbox" id="motivo-social" value="Dificuldades sociais/econômicas" v-model="motivosSelecionados">
                <label for="motivo-social">Dificuldades sociais, econômicas, familiares, de saúde ou outros.</label>
              </div>
            </div>

            <div v-if="modalidadeSelecionada === 'curso'" class="conditional-options">
              <h4>Selecione os motivos (pode marcar mais de um):</h4>
              <div class="checkbox-group reason-checkbox">
                <input type="checkbox" id="motivo-academico" value="Dificuldades acadêmicas" v-model="motivosSelecionados">
                <label for="motivo-academico">Dificuldades acadêmicas (reprovação, relacionamento com colegas e docentes, entre outros).</label>
              </div>
              <div class="checkbox-group reason-checkbox">
                <input type="checkbox" id="motivo-ufes" value="Problemas relacionados à Ufes" v-model="motivosSelecionados">
                <label for="motivo-ufes">Outros problemas relacionados à Ufes.</label>
              </div>
            </div>

            <div v-if="modalidadeSelecionada === 'outros'" class="conditional-options">
              <h4>Selecione os motivos (pode marcar mais de um):</h4>
              <div class="checkbox-group reason-checkbox">
                <input type="checkbox" id="motivo-aprovacao-outra" value="Aprovação em outra IES" v-model="motivosSelecionados">
                <label for="motivo-aprovacao-outra">Aprovação em outra Instituição de Ensino Superior ou Prouni.</label>
              </div>
              <div class="checkbox-group reason-checkbox">
                <input type="checkbox" id="motivo-aprovacao-ufes" value="Aprovação em outro curso na Ufes" v-model="motivosSelecionados">
                <label for="motivo-aprovacao-ufes">Aprovação em outro curso, na própria Ufes.</label>
              </div>
              <div class="checkbox-group reason-checkbox">
                <input type="checkbox" id="motivo-impedimentos" value="Impedimentos de trabalho/residência" v-model="motivosSelecionados">
                <label for="motivo-impedimentos">Impedimentos relacionados a trabalho, mudança de residência, etc.</label>
              </div>
            </div>
            
            <div v-if="modalidadeSelecionada" class="form-group conditional-options">
              <label for="maiores-informacoes"><strong>Maiores informações:</strong></label>
              <textarea id="maiores-informacoes" v-model="maioresInformacoes" placeholder="Escreva aqui mais informações sobre o seu pedido de desistência de curso..."></textarea>
            </div>
            
            <div class="submit-section">
              <button @click="solicitarDesistencia" class="submit-button" :disabled="!isFormularioValido">
                Solicitar
              </button>
            </div>
          </div>

        </CardQuadrado>
      </main>

      <FooterR />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import SideBar from '@/components/SideBar.vue';
import HeaderC from '@/components/Header.vue';
import FooterR from '@/components/Footer.vue';
import CardQuadrado from '@/components/CardQuadrado.vue';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const isSidebarOpen = ref(false);
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

const router = useRouter();

const isCiente = ref(false);
const modalidadeSelecionada = ref('');
const motivosSelecionados = ref([]);
const maioresInformacoes = ref('');

const isFormularioValido = computed(() => {
  return isCiente.value && modalidadeSelecionada.value !== '' && motivosSelecionados.value.length > 0;
});

watch(modalidadeSelecionada, () => {
  motivosSelecionados.value = [];
  maioresInformacoes.value = '';
});

function solicitarDesistencia() {
  if (!isFormularioValido.value) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  Swal.fire({
    title: 'Você tem certeza?',
    text: "Esta ação é irreversível e irá cancelar seu vínculo com a Ufes.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sim, quero desistir',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('--- Solicitação de Desistência ---');
      console.log('Modalidade:', modalidadeSelecionada.value);
      console.log('Motivos Marcados:', motivosSelecionados.value);
      console.log('Informações Adicionais:', maioresInformacoes.value);
      
      Swal.fire(
        'Solicitação Enviada!',
        'Sua solicitação de desistência foi enviada para análise.',
        'success'
      );

      router.push('/home');
    }
  });
}
</script>

<style scoped>
.layout-container, .content-area, .main-content, .instructions-section, .centered-paragraph, h2, h3, p, ul, li, .important-note {
  box-sizing: border-box;
}
.layout-container { display: flex; height: 100vh; width: 100vw; }
.content-area { display: flex; flex-direction: column; flex: 1; height: 100vh; overflow: hidden; }
.main-content { flex: 1; overflow-y: auto; padding: 1.5rem; margin-top: 0; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; }
.instructions-section { display: flex; flex-direction: column; align-items: center; width: 100%; margin-bottom: 20px; }
.centered-paragraph { text-align: center; width: 100%; }


h2 {
  color: #144575;
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
}

h3 { color: #103a60; font-size: 1.3em; margin-top: 20px; margin-bottom: 10px; text-align: left; }
p { font-size: 1em; line-height: 1.6; color: #333; margin-bottom: 10px; text-align: left; }
ul { list-style: disc; margin-left: 25px; color: #333; }
li { margin-bottom: 8px; line-height: 1.5; }
.important-note { background-color: #fff3cd; border-left: 5px solid #ffc107; padding: 10px 15px; margin-top: 15px; border-radius: 4px; font-size: 0.95em; color: #664d03; width: 100%; }


.instructions-section h3,
.instructions-section ul {
  width: 100%;
  max-width: 800px;
  text-align: left;
  align-self: flex-start;
}

.action-section {
  border-top: 1px solid #eee;
  padding-top: 25px;
  margin-top: 25px;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
  display: block;
}

.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  width: 100%;
  min-height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
}
.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
}
.checkbox-group label {
  font-weight: normal;
  margin-bottom: 0;
  color: #555;
}

.submit-section {
  text-align: center;
  margin-top: 30px;
}

.submit-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1em;
  transition: background-color 0.2s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: #c82333;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.conditional-options {
  border-top: 1px solid #eee;
  padding-top: 20px;
  margin-top: 20px;
}

.conditional-options h4 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
}

.reason-checkbox {
  margin-bottom: 12px;
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


  .checkbox-group {
    align-items: flex-start; 
  }


  .submit-button {
    width: 100%;
    font-size: 1em;
  }
}

#modalidade-select option {
  white-space: normal;
  word-wrap: break-word;
}
</style>