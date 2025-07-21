<template>
  <div class="faq-container">
    <div class="faq">
      <div class="header-with-back-arrow">
        <i class="fa-solid fa-circle-chevron-left back-arrow" @click="goBack"></i>
        <h1>Perguntas Frequentes (FAQ)</h1>
      </div>

      <div class="faq-item">
        <Dropdown titulo="Atividades Complementares">
          <Dropdown titulo='O que é o menu "Atividades Complementares"'>
            <div>
              <span>Permite ao aluno cadastrar atividades curriculares já realizadas</span>. Inicialmente, essas atividades ficam como "Não avaliadas" e podem ser <span>editadas ou excluídas</span> pelo aluno. Após avaliação do coordenador, a atividade pode ser:
              <ul>
                <li>Validada</li>
                <li>Validada com ressalvas</li>
                <li>Invalidada</li>
              </ul>
              Se invalidada, o aluno só pode visualizar o relatório com os detalhes da solicitação e da avaliação do coordenador.
            </div>
          </Dropdown>
          <Dropdown titulo='Por que não vejo o link "Atividades Complementares" no Portal do Aluno?'>
            <div>
              Para o aluno ver o link "Atividades Complementares" no Portal do Aluno, é preciso que <span>sua versão do curso tenha atividades complementares cadastradas</span> e que o <span>professor coordenador tenha liberado o uso para essa versão</span>. Se alguma dessas condições não for atendida, o link não aparecerá.
            </div>
          </Dropdown>
        </Dropdown>

        <Dropdown titulo="Avaliação Docente e Histórico">
          <Dropdown titulo='O que é a opção "Avaliação de Docentes"?'>
            <div>
              A avaliação de docentes pelo Portal do Aluno só fica disponível após <span>liberação da Prograd e enquanto o aluno estiver matriculado na disciplina</span>. Após o lançamento da nota, não é mais possível avaliar o docente. Um tutorial sobre como usar a ferramenta está disponível no <router-link to="/tutorial"><span>menu de tutoriais</span></router-link>.
            </div>
          </Dropdown>
          <Dropdown titulo='Minhas notas vieram com problemas no histórico/Minha nota não apareceu no histórico. O que eu faço? '>
            <div>
              O lançamento de notas é de responsabilidade do professor e/ou do departamento da disciplina. Em caso de problemas, o aluno deve <span>entrar em contato diretamente com eles</span>.
            </div>
          </Dropdown>
          <Dropdown titulo='Como é calculado o coeficiente de rendimento do aluno (CRA) exibido no histórico?'>
            <div>
              O CRA (Coeficiente de Rendimento Acadêmico) é calculado pela fórmula: <br>
              <div align="center"><span>CRA = ∑(nota da matéria × número de créditos) / ∑(créditos cursados)</span></div>
              ou seja, os créditos funcionam como pesos das notas.<br><br>
              <span>Exemplo:</span>
              <ul>
                <li>Total de créditos: <span>22</span></li>
                <li>Soma ponderada das notas: <span>169,5</span></li>
                <li>CRA = 169,5 ÷ 22 = <span>7,70</span></li>
              </ul>
            </div>
          </Dropdown>
        </Dropdown>

        <Dropdown titulo="Biblioteca">
          <Dropdown titulo='Quais os passos para renovar um livro emprestado da biblioteca?'>
            <div>
              <span>Como renovar um livro pelo site:</span>
              <ol>
                <li>Acesse: <a href="http://www.acervo.bc.ufes.br/">http://www.acervo.bc.ufes.br/</a></li>
                <li>Clique em "Meu Pergamum"</li>
                <li>Faça login com seu usuário e senha</li>
                <li>Vá em Renovação</li>
                <li>Marque o(s) livro(s) desejado(s) e clique em Renovar</li>
              </ol><br>
              <span>Atenção:</span>
              <ul>
                <li>Cada livro pode ser renovado até <span>3 vezes consecutivas</span> pelo site</li>
                <li>Não é possível renovar livros que estejam <span>reservados por outro usuário</span></li>
              </ul>
            </div>
          </Dropdown>
          <Dropdown titulo='Como faço para obter informações referentes ao Sistema de Bibliotecas (acervo, empréstimo, reserva...)? '>
            <div>
              As informações do SIB (Sistema de Bibliotecas) <span>não estão disponíveis no Portal do Aluno</span>. Elas podem ser acessadas no site próprio do SIB, onde é possível reservar livros e renovar empréstimos online. <br><br>
              Para acessar, <span>vá em Links Externos na barra de menu do Portal do Aluno e clique para acessar o SIB ou <a href="https://biblioteca.ufes.br/">clique aqui</a></span>.<br><br>
              Já o Portal do Aluno permite <span>verificar débitos com a biblioteca</span>. Para isso, vá em Biblioteca > Verificar Situação junto à Biblioteca.
            </div>
          </Dropdown>
        </Dropdown>

        <Dropdown titulo="Cadastro, Acesso e Segurança">
          <Dropdown titulo='Perdi/Não tenho minha senha para acessar o portal! E agora?'>
            <div>
              <ul>
                <li>A senha é <span>fornecida pela Prograd no início do curso</span>.</li>
                <li>Depois disso, o aluno pode recuperar a senha clicando em "Esqueceu a senha?" na tela de login, preenchendo o usuário. É importante<span> verificar a caixa de spam</span>, pois as mensagens são automáticas.</li>
              </ul>
            </div>
          </Dropdown>
          <Dropdown titulo='Como funciona a alteração de dados?'>
            <div>
              <ul>
                <li>O menu de atualização de dados está dividido em: <span>dados pessoais, endereço, documentos pessoais e senha</span>.</li>
                <li>O aluno pode inserir ou alterar informações, mas alguns dados (ex: nome dos pais) só podem ser <span>retificados presencialmente na Prograd</span>.</li>
              </ul>
            </div>
          </Dropdown>
          <Dropdown titulo='Minha data de nascimento/nome está errado e não consigo alterar. O que faço?'>
            <div>
              <span>Importante:</span> Alguns dados não podem ser alterados pelo aluno no portal, pois são baseados em documentos entregues à Prograd. Se houver erro nesses dados, é necessário <span>procurar a Prograd</span> e solicitar a correção.
            </div>
          </Dropdown>
          <Dropdown titulo='Ao tentar preencher o questionário socio-econômico ocorrem erros. O que eu faço?'>
            <div>
              <ul>
                <li>A <span>sessão expira em cerca de 15 minutos</span>. Se demorar para preencher o formulário, clique em <span>"Enviar"</span> para salvar os dados e acesse novamente para continuar.</li>
                <li>Se os problemas continuarem, entre em contato com a <span><a href="https://prograd.ufes.br/faleconosco">Prograd</a></span> ou envie uma mensagem pelo link <span>"Fale Conosco"</span>, no topo do portal.</li>
              </ul>
            </div>
          </Dropdown>
        </Dropdown>

        <Dropdown titulo="Diário de Classe e Programa de Disciplinas">
          <Dropdown titulo='O que é o Diário de Classe?'>
            <div>
              É uma ferramenta para acompanhar as aulas registradas pelo professor de cada disciplina. O preenchimento é feito pelo próprio professor, que pode enviar uma <span>cópia atualizada por e-mail</span> ao aluno sempre que houver alterações, por meio do Portal do Professor.
            </div>
          </Dropdown>
          <Dropdown titulo=' O que é o Programa de Disciplinas?'>
            <div>
              Permite ao aluno acompanhar o conteúdo planejado pelo professor para a disciplina. O preenchimento é feito pelo próprio professor, que pode enviar uma <span>cópia por e-mail</span> sempre que houver atualizações, por meio do Portal do Professor.
            </div>
          </Dropdown>
        </Dropdown>

        <Dropdown titulo="Mensagens e Contato">
          <Dropdown titulo='Ocorreu um erro no portal! O que faço?'>
            <div>
              Se ocorrer alguma falha no portal, o aluno pode <span>notificar o NTI</span> diretamente pelo próprio sistema:
              <ol>
                <li>Clique em <span>"Fale Conosco"</span> (no topo do portal, após login).</li>
                <li>Escolha a opção <span>"Notificação de problema no Portal"</span> no campo Assunto.</li>
                <li><span>Capture a tela do erro:</span>
                  <ul>
                    <li>Deixe o erro visível na tela e pressione a tecla <span>Print Screen</span>.</li>
                    <li>Abra o <span>Paint</span> ou outro editor de imagem.</li>
                    <li>Pressione <span>Ctrl+V</span> para colar a imagem.</li>
                    <li>Vá em <span>Arquivo > Salvar como</span>, escolha o <span>formato JPG/JPEG</span>, e nomeie o arquivo.</li>
                  </ul>
                </li>
                <li>No formulário, anexe a imagem no campo <span>"Tela de erro"</span>.</li>
                <li>Descreva o problema e envie a mensagem.</li>
              </ol><br>
              Se necessário, o <span>NTI entrará em contato por e-mail</span> para mais informações.
            </div>
          </Dropdown>
          <Dropdown titulo='Existe algum telefone que posso ligar em caso de dúvidas sobre o portal?'>
            <div>
              Sim, é possível buscar ajuda acessando o <span><a href="https://prograd.ufes.br/faleconosco">site da Pró-Reitoria de Graduação (Prograd)</a></span> e localizando o <span>setor responsável pela sua dúvida</span> relacionada ao portal.
            </div>
          </Dropdown>
        </Dropdown>

        <Dropdown titulo="Relatórios e PDF">
          <Dropdown titulo='Os relatórios do Diário de Classe e do Programa de Disciplinas aparecem em branco. O que está acontecendo?'>
            <div>
              Se os relatórios aparecem em branco, é porque o <span>professor ainda não preencheu as informações</span> no Portal do Professor. Assim que os dados forem inseridos, eles ficarão visíveis para os alunos no Portal do Aluno.<br><br>
              O professor também pode enviar os <span>relatórios por e-mail</span> aos alunos sempre que fizer alguma atualização.
            </div>
          </Dropdown>
          <Dropdown titulo='Como visualizar os relatórios no novo portal do aluno?'>
            <div>
              A maioria dos relatórios é exibida em <span>formato PDF</span>, permitindo que o aluno <span>imprima, salve ou envie por e-mail</span>.
            </div>
          </Dropdown>
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