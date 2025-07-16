<template>
  <header class="header">
    <div class="header-content">
      <img src="../../public/imagens/logo-ufes.png" alt="Logo da UFES" class="logo-ufes" />
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  padding: 1rem 2rem;
  position: relative;
  z-index: 5;
}

.header-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  position: relative;
  max-width: 100%;
}

.title {
  grid-column: 2; /* centraliza o título na coluna do meio */
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.logo-ufes {
  grid-column: 3;
  justify-self: end;
  height: 60px;
}
</style>
