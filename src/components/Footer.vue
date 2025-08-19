<template>
  <footer class="footer">
    <p>Em caso de dúvidas, consulte o 
      <router-link to="/tutorial"><span>Tutorial</span></router-link> ou 
      <router-link to="/faq" class="logo-link"><span>FAQ</span></router-link>.</p>
    <p>© 2025 UFES - Todos os direitos reservados.</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  color: white;
}

.footer span {
  color: white;
  text-decoration: underline;
  font-weight: 700;
}
</style>
