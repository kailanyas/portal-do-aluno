
<template>
  <header class="header">
    <div class="header-content">
      <h1 class="title">{{ titulo }}</h1>
      <img src="../../public/imagens/logo-ufes.png" alt="Logo da UFES" class="logo-ufes" />
    </div>
  </header>
</template>

<script setup>
defineProps({
  titulo: String
})
</script>

<style scoped>


h1 {
  color: #ffffff;

}

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
  grid-column: 2; 
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

@media (max-width: 768px) {
  .title {
    font-size: 1.2rem;
  }

  .logo-ufes {
    height: 40px;
  }
}
</style>
