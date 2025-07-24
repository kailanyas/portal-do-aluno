<template>
  <header class="header">
    <div class="header-content">
      
      <button v-if="showBackButton" @click="goBack" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
      </button>

      <h1 class="title">{{ titulo }}</h1>

      <router-link to="/home" class="logo-link">
        <img src="/imagens/logo-ufes.png" alt="Logo da UFES" class="logo-ufes" />
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

defineProps({
  titulo: String
});

const route = useRoute();
const router = useRouter();

function goBack() {
  router.back();
}

const showBackButton = computed(() => {
  return route.path !== '/home'; 
});
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
  background-color: #144575;
}

.header-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  align-items: center;
  gap: 1rem;
  position: relative;
  max-width: 100%;
}

.back-button {
  grid-column: 1;
  justify-self: start; 
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: #144575;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #e9ecef;
}

.title {
  grid-column: 2; 
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.logo-link {
  grid-column: 3;
  justify-self: end;
  display: inline-block;
}

.logo-ufes {
  height: 60px;
}

@media (max-width: 768px) {
  .header {
    padding: 0.8rem 1rem;
  }
 
  .header-content {
    gap: 0.5rem; 
  }

  .title {
    font-size: 1.7rem; 
  }

  .logo-ufes {
    height: 40px;
  }
  
  .back-button {
    display: none;
  }
}
</style>