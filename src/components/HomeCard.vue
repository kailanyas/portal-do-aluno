
<template>
    <div class="cards-container">
        <div class="card">
            <div class="card-header">
                <h3>Atalhos</h3>
            </div>
            <div class="shortcut-container">
				<router-link to="/calendario-academico" class="shortcut-link">
					<div class="shortcut-card">
						<i class="fa-solid fa-calendar-days icons"></i>
						<span>Calendário Acadêmico</span>
					</div>
				</router-link>
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
                            19 de agosto
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

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}

.card {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  font-weight: normal;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  height: 340px;
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
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.alert-item::before {
  content: "•";
  color: #102a54;
  font-size: 1.2rem;
  line-height: 1;
  margin-top: 0.3rem;
}

.alert-text span {
  color: #102a54;
  font-weight: 600;
  line-height: 1.2;
}

.shortcut-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.shortcut-link {
  text-decoration: none;
  color: inherit; 
  display: block;
}

.shortcut-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  color: #102a54;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.shortcut-card span {
  line-height: 1;
  margin: 0;
  padding: 0;
  display: inline-block;
  transform: translateY(1px);
}

.shortcut-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.icons {
  font-size: 1.5rem;
}

@media (max-width: 480px) {
  .shortcut-card {
    font-size: 0.95rem;
    padding: 0.65rem 0.9rem;
    gap: 0.5rem;
  }

  .shortcut-card i {
    font-size: 1rem;
  }
}
</style>
