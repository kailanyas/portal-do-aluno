<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

import SideBar from '@/components/SideBar.vue'
import HeaderC from '@/components/Header.vue'
import FooterR from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
import Dropdown from '@/components/DropDown.vue'

const isSidebarOpen = ref(false)
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

const isModalOpen = ref(false);
const modalTitle = ref(''); 
const modalContent = ref(null);

const disciplinasData = {
  'Desenvolvimento Web': {
    diario: {
      tipo: 'diario', codigo: 'COM12345', cargaHoraria: 60, creditos: 4, docente: 'Giuliano Prado', turma: 'CC1',
      objetivos: ['Construir aplicações web modernas', 'Dominar HTML, CSS e JavaScript', 'Aprender um framework reativo (Vue.js)'],
      ementa: 'Fundamentos do desenvolvimento web. HTML, CSS e JavaScript. Frameworks front-end (Vue.js/React). Noções de back-end com Node.js...',
      aulas: [
        { data: '05/08/2025', conteudo: 'Introdução ao HTML5 e CSS3', horas: 2, faltas: 0 },
        { data: '07/08/2025', conteudo: 'Estruturação com Flexbox e Grid', horas: 2, faltas: 0 },
        { data: '12/08/2025', conteudo: 'JavaScript Moderno (ES6+)', horas: 2, faltas: 2 },
      ]
    },
    programa: {
      tipo: 'programa', codigo: 'COM12345', disciplina: 'DESENVOLVIMENTO WEB', cargaHoraria: 60, creditos: 4,
      preRequisitos: ['COM06992 - ESTRUTURAS DE DADOS I'],
      docente: { nome: 'Giuliano Prado', lattes: 'lattes.cnpq.br/123456789' },
      ementa: 'Fundamentos do desenvolvimento web. HTML, CSS e JavaScript. Frameworks front-end (Vue.js/React). Noções de back-end com Node.js. APIs REST. Bancos de dados para web. Práticas de responsividade e acessibilidade.',
      objetivos: 'Capacitar o aluno a construir aplicações web modernas e responsivas, utilizando as tecnologias mais atuais do mercado.',
      conteudo: [
        { titulo: 'Introdução ao Desenvolvimento Web', carga: 6 }, { titulo: 'HTML5, CSS3 e Responsividade', carga: 12 },
        { titulo: 'JavaScript Moderno (ES6+)', carga: 18 }, { titulo: 'Frameworks Reativos (Vue.js)', carga: 12 },
        { titulo: 'Introdução ao Back-end e APIs', carga: 12 },
      ],
      metodologia: 'Aulas expositivas e práticas, com desenvolvimento de um projeto semestral para aplicação dos conceitos aprendidos.',
      avaliacao: 'Média = (P1 * 0.4) + (P2 * 0.4) + (Trabalho * 0.2). Média para aprovação: 7.0. Caso contrário, prova final obrigatória.',
      bibliografiaBasica: ['Jon Duckett - HTML and CSS: Design and Build Websites', 'David Flanagan - JavaScript: The Definitive Guide'],
      bibliografiaComplementar: ['Documentação Oficial do Vue.js (vuejs.org)']
    }
  },
  'Banco de Dados': {
     diario: {
      tipo: 'diario', codigo: 'COM54321', cargaHoraria: 60, creditos: 4, docente: 'Antônio Almeida', turma: 'CC1',
      objetivos: ['Modelar bancos de dados relacionais', 'Dominar a linguagem SQL', 'Entender normalização'],
      ementa: 'Conceitos de sistemas de bancos de dados. Modelagem de dados conceitual, lógica e física. Modelo relacional, álgebra relacional...',
      aulas: [
        { data: '04/08/2025', conteudo: 'Introdução a Bancos de Dados', horas: 2, faltas: 0 },
        { data: '06/08/2025', conteudo: 'Modelo Entidade-Relacionamento (MER)', horas: 2, faltas: 0 },
        { data: '11/08/2025', conteudo: 'Mapeamento MER para Relacional', horas: 2, faltas: 0 },
      ]
    },
    programa: {
      tipo: 'programa', codigo: 'COM54321', disciplina: 'BANCO DE DADOS', cargaHoraria: 60, creditos: 4,
      preRequisitos: ['COM06992 - ESTRUTURAS DE DADOS I'],
      docente: { nome: 'Antônio Almeida', lattes: 'lattes.cnpq.br/987654321' },
      ementa: 'Conceitos de sistemas de bancos de dados. Modelagem de dados conceitual, lógica e física. Modelo relacional, álgebra relacional e cálculo relacional. Linguagem SQL. Normalização. Noções de bancos de dados NoSQL.',
      objetivos: 'Fornecer ao aluno uma base sólida sobre a teoria e prática de sistemas de gerenciamento de bancos de dados relacionais.',
      conteudo: [
        { titulo: 'Introdução e Modelagem Conceitual', carga: 12 }, { titulo: 'Modelo Relacional e Álgebra Relacional', carga: 12 },
        { titulo: 'Linguagem SQL', carga: 18 }, { titulo: 'Normalização de Dados', carga: 12 },
        { titulo: 'Controle de Transações e Concorrência', carga: 6 },
      ],
      metodologia: 'Aulas teóricas com lousa e projetor, e aulas práticas em laboratório para exercícios com SGBD.',
      avaliacao: 'Duas provas teóricas (P1, P2) e um trabalho prático (TP). Média = (P1 + P2 + TP) / 3. Média para aprovação: 7.0.',
      bibliografiaBasica: ['Elmasri & Navathe - Sistemas de Banco de Dados', 'Silberschatz, Korth & Sudarshan - Sistemas de Banco de Dados'],
      bibliografiaComplementar: ['Date, C. J. - Introdução a Sistemas de Bancos de Dados']
    }
  },
    'Engenharia de Software': {
    diario: { tipo: 'diario', codigo: 'COM67890', cargaHoraria: 60, creditos: 3, docente: 'Clayton Fraga', turma: 'CC1', objetivos: ['Entender o ciclo de vida de software', 'Aplicar metodologias ágeis'], ementa: 'Introdução à Engenharia de Software. Processos de software...', aulas: [{ data: '05/08/2025', conteudo: 'Introdução e Processos de Software', horas: 2, faltas: 0 }] },
    programa: { tipo: 'programa', codigo: 'COM67890', disciplina: 'ENGENHARIA DE SOFTWARE', cargaHoraria: 60, creditos: 3, preRequisitos: ['COM10394 - BANCO DE DADOS'], docente: { nome: 'Clayton Fraga', lattes: 'lattes.cnpq.br/112233445' }, ementa: 'Introdução à Engenharia de Software. Processos de software (cascata, ágil, Scrum). Engenharia de requisitos...', objetivos: 'Apresentar os principais conceitos e práticas da Engenharia de Software para o desenvolvimento de sistemas de qualidade.', conteudo: [{ titulo: 'Processos de Software', carga: 10 }, { titulo: 'Engenharia de Requisitos', carga: 20 }, { titulo: 'Modelagem com UML', carga: 20 }, { titulo: 'Testes de Software', carga: 10 }], metodologia: 'Aulas expositivas e desenvolvimento de um projeto em grupo simulando um ambiente real.', avaliacao: 'Avaliações baseadas nas entregas do projeto (50%) e uma prova final (50%).', bibliografiaBasica: ['Pressman & Maxim - Engenharia de Software: Uma Abordagem Profissional'], bibliografiaComplementar: ['Sommerville, I. - Engenharia de Software'] }
  },
  'Redes de Computadores': {
    diario: { tipo: 'diario', codigo: 'COM09876', cargaHoraria: 60, creditos: 4, docente: 'Helder Amorim', turma: 'CC1', objetivos: ['Compreender o modelo TCP/IP', 'Configurar equipamentos de rede básicos'], ementa: 'Conceitos básicos de redes de computadores. Modelo de referência OSI e TCP/IP...', aulas: [{ data: '04/08/2025', conteudo: 'Introdução a Redes e Camada Física', horas: 2, faltas: 0 }] },
    programa: { tipo: 'programa', codigo: 'COM09876', disciplina: 'REDES DE COMPUTADORES', cargaHoraria: 60, creditos: 4, preRequisitos: ['Sistemas Operacionais'], docente: { nome: 'Helder Amorim', lattes: 'lattes.cnpq.br/554433221' }, ementa: 'Conceitos básicos de redes de computadores. Modelo de referência OSI e TCP/IP. Camadas Física, de Enlace, de Rede, de Transporte e de Aplicação...', objetivos: 'Estudar a arquitetura e os protocolos utilizados nas redes de computadores, com foco no modelo TCP/IP.', conteudo: [{ titulo: 'Camadas de Aplicação e Transporte', carga: 15 }, { titulo: 'Camada de Rede', carga: 20 }, { titulo: 'Camada de Enlace e Redes Locais', carga: 15 }, { titulo: 'Segurança de Redes', carga: 10 }], metodologia: 'Aulas teóricas e práticas com simuladores de rede (Packet Tracer).', avaliacao: 'Duas provas (P1, P2) e trabalhos práticos em simulador. Média = (P1+P2)/2 * 0.7 + Média_Trabalhos * 0.3.', bibliografiaBasica: ['Kurose & Ross - Redes de Computadores e a Internet'], bibliografiaComplementar: ['Tanenbaum & Wetherall - Redes de Computadores'] }
  }
};


function calcularTotalFaltas(nomeDisciplina) {
  const disciplina = disciplinasData[nomeDisciplina];
  if (!disciplina?.diario?.aulas) {
    return 0; 
  }
  
  return disciplina.diario.aulas.reduce((total, aula) => total + aula.faltas, 0);
}

function openModal(nomeDisciplina, tipoConteudo) {
  const data = disciplinasData[nomeDisciplina];
  if (data && data[tipoConteudo]) {
    modalContent.value = data[tipoConteudo];
    modalTitle.value = tipoConteudo === 'diario' ? 'Diário de Classe' : 'Plano de Ensino';
    isModalOpen.value = true;
  } else {
    Swal.fire({
        icon: 'info', title: 'Oops...',
        text: `Conteúdo para "${nomeDisciplina}" ainda não disponível.`,
        confirmButtonColor: '#144575'
    });
  }
}

function closeModal() {
  isModalOpen.value = false;
  modalContent.value = null;
}

function baixarConteudo() {
    alert(`Função para baixar o conteúdo de "${modalTitle.value}" será implementada aqui!`);
}
</script>

<template>
  <div class="layout-container">
    <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    <div class="content-area">
      <HeaderC titulo="Minhas Disciplinas" />

      <main class="main-content">
        <Dropdown class="dropdown" titulo="Disciplinas 2025/1" :abertoInicialmente="true">
          <div class="cards">
            <div class="card">
              <div class="cardHeader"><h2>Desenvolvimento Web</h2></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Giuliano Prado</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Faltas:</strong> {{ calcularTotalFaltas('Desenvolvimento Web') }}h</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button @click="openModal('Desenvolvimento Web', 'diario')">Diário de Classe</button>
                <button @click="openModal('Desenvolvimento Web', 'programa')">Programa de Disciplina</button>
              </div>
            </div>

            <div class="card">
              <div class="cardHeader"><h2>Banco de Dados</h2></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Antônio Almeida</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Faltas:</strong> {{ calcularTotalFaltas('Banco de Dados') }}h</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button @click="openModal('Banco de Dados', 'diario')">Diário de Classe</button>
                <button @click="openModal('Banco de Dados', 'programa')">Programa de Disciplina</button>
              </div>
            </div>
            
            <div class="card">
              <div class="cardHeader"><h2>Engenharia de Software</h2></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Clayton Fraga</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Faltas:</strong> {{ calcularTotalFaltas('Engenharia de Software') }}h</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button @click="openModal('Engenharia de Software', 'diario')">Diário de Classe</button>
                <button @click="openModal('Engenharia de Software', 'programa')">Programa de Disciplina</button>
              </div>
            </div>

            <div class="card">
              <div class="cardHeader"><h2>Redes de Computadores</h2></div>
              <div class="cardBody">
                <p><strong>Professor:</strong> Helder Amorim</p>
                <p><strong>Departamento:</strong> Computação</p>
                <p><strong>Turma:</strong> CC1</p>
                <p><strong>Faltas:</strong> {{ calcularTotalFaltas('Redes de Computadores') }}h</p>
              </div>
              <div class="cardFooter">
                <Modal />
                <button @click="openModal('Redes de Computadores', 'diario')">Diário de Classe</button>
                <button @click="openModal('Redes de Computadores', 'programa')">Programa de Disciplina</button>
              </div>
            </div>
          </div>
        </Dropdown>
      </main>

      <FooterR />
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content">
            <div class="modal-header">
              <h2>{{ modalTitle }}</h2>
              <button @click="closeModal" class="close-button">&times;</button>
            </div>
            
            <div class="modal-body" v-if="modalContent">
              <div v-if="modalContent.tipo === 'programa'" class="plano-ensino">
                <div class="info-grid">
                    <div><strong>Disciplina:</strong> {{ modalContent.codigo }} - {{ modalContent.disciplina }}</div>
                    <div><strong>Carga Horária:</strong> {{ modalContent.cargaHoraria }}h</div>
                    <div><strong>Créditos:</strong> {{ modalContent.creditos }}</div>
                    <div><strong>Docente:</strong> {{ modalContent.docente.nome }} (<a :href="'http://' + modalContent.docente.lattes" target="_blank">Lattes</a>)</div>
                    <div class="full-width"><strong>Pré-requisitos:</strong> {{ modalContent.preRequisitos.join(', ') }}</div>
                </div>
                <div class="section">
                    <h6>Ementa</h6>
                    <p>{{ modalContent.ementa }}</p>
                </div>
                <div class="section">
                    <h6>Objetivos</h6>
                    <p>{{ modalContent.objetivos }}</p>
                </div>
                <div class="section">
                    <h6>Conteúdo Programático</h6>
                    <ul>
                        <li v-for="item in modalContent.conteudo" :key="item.titulo">{{ item.titulo }} - {{ item.carga }}h</li>
                    </ul>
                </div>
                <div class="section">
                    <h6>Metodologia</h6>
                    <p>{{ modalContent.metodologia }}</p>
                </div>
                <div class="section">
                    <h6>Critérios de Avaliação</h6>
                    <p>{{ modalContent.avaliacao }}</p>
                </div>
                <div class="section">
                    <h6>Bibliografia Básica</h6>
                    <ul>
                        <li v-for="item in modalContent.bibliografiaBasica" :key="item">{{ item }}</li>
                    </ul>
                </div>
                 <div class="section">
                    <h6>Bibliografia Complementar</h6>
                    <ul>
                        <li v-for="item in modalContent.bibliografiaComplementar" :key="item">{{ item }}</li>
                    </ul>
                </div>
              </div>

              <div v-if="modalContent.tipo === 'diario'" class="diario-classe">
                <div class="info-grid">
                    <div><strong>Disciplina:</strong> {{ modalContent.codigo }}</div>
                    <div><strong>Carga Horária:</strong> {{ modalContent.cargaHoraria }}h</div>
                    <div><strong>Créditos:</strong> {{ modalContent.creditos }}</div>
                    <div><strong>Docente:</strong> {{ modalContent.docente }}</div>
                    <div><strong>Turma:</strong> {{ modalContent.turma }}</div>
                </div>
                <div class="section">
                    <h6>Objetivos da Disciplina</h6>
                    <ol>
                        <li v-for="obj in modalContent.objetivos" :key="obj">{{ obj }}</li>
                    </ol>
                </div>
                <div class="section">
                    <h6>Diário</h6>
                    <table class="aulas-table">
                        <thead><tr><th>Aula</th><th>Data</th><th>Conteúdo</th><th>Faltas (h)</th></tr></thead>
                        <tbody>
                            <tr v-for="(aula, index) in modalContent.aulas" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ aula.data }}</td>
                                <td>{{ aula.conteudo }}</td>
                                <td>{{ aula.faltas }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button @click="closeModal" class="btn btn-secondary">Voltar</button>
              <button @click="baixarConteudo" class="btn btn-primary">Baixar</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
    .layout-container {
        display: flex;
        width: 100vw;
    }

    .content-area {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .main-content {
        flex: 1;
        overflow-y: auto;
        padding: 1.5rem;
        box-sizing: border-box;
    }

    .dropdown {
        width: 100%;
        background-color: white;
    }

    .dropdown :deep(.dropdown-header) {
        background-color: transparent !important;
        color: var(--text-light);
        font-size: 1.5rem;
        padding: 0 0 1rem 0;
        border-bottom: 2px solid var(--border-color);
        margin-bottom: 1.5rem;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
        width: 100%;
    }

    .card {
        background-color: #f5f5f5;
        border: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .cardHeader {
        padding: 1rem 1.5rem;
    }

    .cardHeader h2 {
        font-size: 1.25rem;
        text-align: center;
        margin: 0;
        font-weight: 600;
        color: #144575;
    }

    .cardBody {
        flex-grow: 1;
        padding: 1.5rem;
        background-color: var(--text-light);
    }

    .cardBody p {
        margin: 0 0 0.75rem 0;
        font-size: 1rem;
        color: var(--text-dark);
        line-height: 1.5;
    }

    .cardBody p:last-child {
        margin-bottom: 0;
    }

    .cardBody strong {
        color: #000;
    }

    .cardFooter {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 1rem 1.5rem;
        gap: 0.75rem;
        border-top: 1px solid #e0e0e0;
        background-color: var(--text-light);
    }

    .cardFooter button {
        color: #f5f5f5;
    }

    .cardFooter button,
    .cardFooter :deep(.btn-open) {
        flex: 1 1 auto;
        min-height: 3rem;
        font-size: 0.9rem;
        background-color: #144575;
        border: none;
        border-radius: 8px;
        padding: 0.75rem;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
        transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .cardFooter button:hover,
    .cardFooter :deep(.btn-open:hover) {
        background-color: #103a60;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: #fff;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: #144575;
    }

    .close-button {
        background: none;
        border: none;
        font-size: 2rem;
        color: #718096;
        cursor: pointer;
    }

    .modal-body {
        flex-grow: 1;
        overflow-y: auto;
        line-height: 1.6;
        padding-right: 1rem;
    }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        border-top: 1px solid #e2e8f0;
        padding-top: 1.5rem;
        margin-top: 1.5rem;
    }

    .btn-primary {
        background-color: #144575;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
    }

    .btn-primary:hover {
        background-color: #103a60;
    }

    .btn-secondary {
        background-color: #edf2f7;
        color: #4a5568;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
    }

    .btn-secondary:hover {
        background-color: #e2e8f0;
    }

    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem 1.5rem;
        margin-bottom: 2rem;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 1rem 0;
    }

    .info-grid .full-width {
        grid-column: 1 / -1;
    }

    .section {
        margin-bottom: 1.5rem;
    }

    .section h6 {
        font-size: 0.9rem;
        text-transform: uppercase;
        color: #103a60;
        border-bottom: 2px solid #144575;
        padding-bottom: 0.25rem;
        margin-bottom: 0.75rem;
    }

    .section p,
    .section ul,
    .section ol {
        margin: 0;
        padding-left: 1.2rem;
    }

    .section a {
        color: #2563eb;
        text-decoration: none;
    }

    .section a:hover {
        text-decoration: underline;
    }

    .aulas-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9rem;
    }

    .aulas-table th,
    .aulas-table td {
        padding: 8px;
        border: 1px solid #ddd;
        text-align: left;
    }

    .aulas-table th {
        background-color: #f2f2f2;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }
</style>