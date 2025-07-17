
<template>
    <div class="cards-container">
        <div class="card">
            <div class="card-header">
                <h3>Card 1</h3>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>Avisos Gerais</h3>
            </div>
            <ul class="alert-items">
                <li class="alert-item">
                    <div class="alert-text">   
                        <span>
                            As inscrições para o PAEPE estão abertas
                        </span>
                    </div>
                </li>

                 <li class="alert-item">
                    <div class="alert-text">   
                        <span>
                            As inscrições para VI Semana de Ciências Farmacêuticas estão abertas
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>Datas Importantes</h3>
            </div>
            <ul class="event-items">
                <li class="event-item">
                    <i class="fa-solid fa-calendar-day" id="calendar_icon"></i>
                    <div class="event-text">   
                        <span class="event-name">
                            Trabalho de Interface Humano-Computador
                        </span>
                        <span class="event-date">
                            29 de julho
                        </span>
                    </div>
                </li>

                <li class="event-item">
                    <i class="fa-solid fa-calendar-day" id="calendar_icon"></i>
                    <div class="event-text">   
                        <span class="event-name">
                            Prova de Desenvolvimento Web
                        </span>
                        <span class="event-date">
                            2 de agosto
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="card">
            <div class="card-header">
                <h3>Avisos das Disciplinas</h3>
            </div>
            <ul class="alert-items">
                <li class="alert-item">
                    <div class="alert-text">   
                        <span>
                            As notas da prova de Projeto de Sistemas de Software estão disponíveis
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
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
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
}

.card-header h3 {
  margin-bottom: 1rem;
  color: black;
  font-size: 1.5rem;
}

.event-items {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-height: 260px;
}

.event-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
}

.event-item i {
  font-size: 1.5rem;
  color: #102a54;
  flex-shrink: 0;
}

.event-text {
  display: flex;
  flex-direction: column;
}

.event-name {
  font-weight: 600;
  color: #102a54;
  line-height: 1.2;
}

.event-date {
  color: #565758;
  font-size: 0.9rem;
  margin-top: 0.1rem;
}

.alert-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.alert-item {
  display: flex;
  align-items: center; 
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 1rem;
}

.alert-item::before {
  content: "•";
  color: #102a54;
  font-size: 1.1rem;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%); 
}


.alert-text span {
  color: #102a54;
  font-weight: 600;
  line-height: 1.2;
}


</style>
