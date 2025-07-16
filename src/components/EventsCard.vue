<template>
  <div class="cards-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px; /* container maior para telas largas */
  margin: 0 auto;
  box-sizing: border-box;
  height: 100%;
}

.card {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  height: 350px;
  max-width: 700px; /* cards mais largos */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

</style>
