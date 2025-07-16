<template>
    <div class="cards-container">
        <div class="card">
            <div class="card-header">
                <h3>Próximos Eventos</h3>
            </div>
            <ul class="event-items">
                <li class="event-item">
                    
                </li>
            </ul>
        </div>
        
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
  text-align: left;
  font-weight: normal;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  height: 350px;
  max-width: 700px; /* cards mais largos */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
}

.card-header h3 {
  margin-bottom: 1rem;
  color: #144575;
}

.event-items {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto; /* caso muitos eventos */
  max-height: 260px;
}

.event-item {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px solid #ddd;
}

.event-name {
  font-weight: 600;
  color: #102a54;
}

.event-date {
  color: #2563eb;
  font-style: normal;
}
</style>