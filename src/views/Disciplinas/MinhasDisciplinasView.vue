<script setup>
    import { ref } from 'vue'
    import SideBar from '@/components/SideBar.vue'
    import HeaderC from '@/components/Header.vue'
    import FooterR from '@/components/Footer.vue'
    import Cards from '@/components/DisciplinasCard.vue'
    import Modal from '@/components/Modal.vue'
    
    const isSidebarOpen = ref(false)
    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value
    }

    const open = ref(false)
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            
            <HeaderC titulo="Minhas Disciplinas"/>

            <main class="main-content">
                <div class="bg">
                    <div class="cards">
                        <div class="card">
                            <div class="cardHeader"><h3>Desenvolvimento Web</h3></div>
                            <div class="cardBody">
                                <p>Professor: Giuliano Prado</p>
                                <p>Departamento: Computação</p>
                                <p>Turma: CC1</p>
                                <p>Período: 2025/1</p>
                            </div>
                            <hr>
                            <div class="cardFooter">
                                <Modal/>
                                <button>Diário de Classe</button>
                                <button>Programa de Disciplina</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="cardHeader"><h3>Desenvolvimento Web</h3></div>
                            <div class="cardBody">
                                <p>Professor: Giuliano Prado</p>
                                <p>Departamento: Computação</p>
                                <p>Turma: CC1</p>
                                <p>Período: 2025/1</p>
                            </div>
                            <hr>
                            <div class="cardFooter">
                                <Modal/>
                                <button>Diário de Classe</button>
                                <button>Programa de Disciplina</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="cardHeader"><h3>Desenvolvimento Web</h3></div>
                            <div class="cardBody">
                                <p>Professor: Giuliano Prado</p>
                                <p>Departamento: Computação</p>
                                <p>Turma: CC1</p>
                                <p>Período: 2025/1</p>
                            </div>
                            <hr>
                            <div class="cardFooter">
                                <Modal/>
                                <button>Diário de Classe</button>
                                <button>Programa de Disciplina</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="cardHeader"><h3>Desenvolvimento Web</h3></div>
                            <div class="cardBody">
                                <p>Professor: Giuliano Prado</p>
                                <p>Departamento: Computação</p>
                                <p>Turma: CC1</p>
                                <p>Período: 2025/1</p>
                            </div>
                            <hr>
                            <div class="cardFooter">
                                <Modal/>
                                <button>Diário de Classe</button>
                                <button>Programa de Disciplina</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="cardHeader"><h3>Desenvolvimento Web</h3></div>
                            <div class="cardBody">
                                <p>Professor: Giuliano Prado</p>
                                <p>Departamento: Computação</p>
                                <p>Turma: CC1</p>
                                <p>Período: 2025/1</p>
                            </div>
                            <hr>
                            <div class="cardFooter">
                                <Modal/>
                                <button>Diário de Classe</button>
                                <button>Programa de Disciplina</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="cardHeader"><h3>Desenvolvimento Web</h3></div>
                            <div class="cardBody">
                                <p>Professor: Giuliano Prado</p>
                                <p>Departamento: Computação</p>
                                <p>Turma: CC1</p>
                                <p>Período: 2025/1</p>
                            </div>
                            <hr>
                            <div class="cardFooter">
                                <Modal/>
                                <button>Diário de Classe</button>
                                <button>Programa de Disciplina</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <FooterR />
        </div>
    </div>
</template>

<style scoped>
    .layout-container {
        display: flex;
        height: 100vh;
        width: 100vw;
    }

    .content-area {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100vh;
        overflow: hidden;
    }

    .main-content {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
        box-sizing: border-box;
        

        display: flex;
        flex-direction: column;
        align-items: center;
    }

  .bg {
        width: 95%;
        background-color: #144575;
        border-radius: 6px;
        padding: 1.5rem;
        box-sizing: border-box;

        height: 100%;
        display: flex; 
    }

    .cards {
        display: grid;
        /* ✅ CORREÇÃO 2: Grade fixa de 3 colunas e 2 linhas */
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1.5rem; /* Reduzido o gap para caber melhor */
        width: 100%;
        height: 100%;
        
    }

    @media (max-width: 900px) {
        .cards {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            grid-template-rows: auto;
            height: auto; 
        }
        .bg {
            height: auto;
            width: 100%;
        }
    }

    .card {
        background-color: #5A82AA;
        border: none;
        display: flex;
        flex-direction: column;
        overflow: hidden; 
        border-radius: 12px;
        text-align: left;
        font-weight: normal;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .cardHeader {
        width: 100%;
        height: 25%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;

        box-shadow: 0 0 0 6px #5A82AA;
    }

    .cardHeader h3{
        font-size: 1.2rem;
        color: #f5f5f5;
    }

.cardBody {
    background-color: #f5f5f5;
    flex-grow: 1; 
    overflow-y: auto;
    height: 60%; 
    padding: 0.5rem 0;
}

.cardBody p {
    margin: 0.25rem 0.5rem; 
    font-size: 1rem;
    color: #666
}

.cardFooter {
    background-color: #f5f5f5;
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    align-items: center; 
    
    padding: 0.75rem;
    gap: 0.5rem; 
    height: auto; 
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}


.cardFooter button, 
.cardFooter :deep(.btn-open) {
    flex: 1;

    min-height: 3.5rem; 
    margin: 0;
    font-size: 0.8rem;
    background-color: #5A82AA;
    color: #f5f5f5;
    border: none;
    border-radius: 6px;
    padding: 0.6rem;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    transition: background-color 0.2s ease;
}
.cardFooter button:hover,
.cardFooter :deep(.btn-open:hover) {
    background-color: #4a6e8f;
}

</style>