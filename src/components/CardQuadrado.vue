<template>
  <div class="quadrado-branco-card">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style scoped>
.quadrado-branco-card {
  width: 80%; 
  height: 90%; 
  background-color: white; 
  border-radius: 6px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  
  
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  
  padding: 30px; 
  box-sizing: border-box; 
  overflow-y: auto; 

  
  margin: 0; 
}


</style>