<template>
  <div class="container">
    <h2 class="subtitulo">Alteração de Dados Cadastrais</h2>

    <form>
      <div class="secao">
        <h3 class="secao-titulo">Dados Pessoais</h3>
        <div class="grid">
          <label>Nome Civil:<input type="text" value="Exemplo Nome Civil" disabled /></label>
          <label>Nome Social:<input type="text" value="Exemplo Nome Social" disabled /></label>
          <label>Nome da mãe ou 1º parental:<input type="text" value="Maria Exemplo" disabled /></label>
          <label>Nome do pai ou 2º parental:<input type="text" value="João Exemplo" disabled /></label>
          <label>Data de Nascimento:<input type="text" value="01/01/2000" disabled /></label>
          <label>Sexo:<input type="text" value="Masculino" disabled /></label>
          <label>Estado Civil:<input type="text" value="Solteiro(a)" disabled /></label>
          <label>Etnia:<input type="text" value="Parda" disabled /></label>
          <label>Tipo Sanguíneo:<input type="text" value="Não Informado" disabled /></label>
          <label>Fator RH:<input type="text" value="Não Informado" disabled /></label>
          <label>Ano de conclusão do Ensino Médio:<input type="text" value="2020" disabled /></label>
          <label>Deficiência(s):<input type="text" value="Sem deficiência" disabled /></label>
          <label>Identidade de Gênero:<input type="text" value="Não declarado" disabled /></label>
        </div>
        <p class="aviso">
          IMPORTANTE: a identidade de gênero será usada no Diploma Digital. Caso não informe, será usado o sexo cadastrado.
        </p>
      </div>

      <div class="secao">
        <h3 class="secao-titulo">Contato para casos de emergência</h3>
        <div class="grid">
          <label>Nome do Contato:<input type="text" value="Contato Exemplo" disabled /></label>
          <label>Telefone do Contato:<input type="text" value="(27)99999-9999" disabled /></label>
        </div>
      </div>

      <div class="secao">
        <h3 class="secao-titulo">Naturalidade</h3>
        <div class="grid">
          <label>País:<input type="text" value="Brasil" disabled /></label>
          <label>Estado:<input type="text" value="Espírito Santo" disabled /></label>
          <label>Naturalidade:<input type="text" value="João Neiva" disabled /></label>
          <label>Nacionalidade:<input type="text" value="Brasileira" disabled /></label>
        </div>
      </div>
    </form>

    <p class="aviso-final">
      Favor preencher os campos vazios ou não informados.<br />
      ATENÇÃO: Dados bloqueados devem ser alterados diretamente pela PROGRAD.
    </p>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  max-width: 700px;
  margin: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #444;
}

.container h3 {
  font-size: 16px;
  color: #006699;
  margin-top: 24px;
  margin-bottom: 12px;
}
.titulo {
  font-size: 24px;
  margin-bottom: 8px;
}
.subtitulo {
  font-size: 20px;
  color: #333;
  margin-bottom: 24px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.secao {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.secao-titulo {
  font-size: 18px;
  margin-bottom: 16px;
  color: #444;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}
label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;
}
input[type="text"] {
  margin-top: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f1f1f1;
  color: #555;
}
.aviso, .aviso-final {
  margin-top: 12px;
  font-size: 13px;
  color: #b22222;
  background: #fff3f3;
  padding: 10px;
  border-left: 4px solid #b22222;
  border-radius: 4px;
}
</style>
