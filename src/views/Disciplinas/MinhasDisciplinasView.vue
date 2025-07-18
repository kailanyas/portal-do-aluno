<script setup>
    import { ref } from 'vue'
    import SideBar from '@/components/SideBar.vue'
    import HeaderC from '@/components/Header.vue'
    import FooterR from '@/components/Footer.vue'
    import Cards from '@/components/DisciplinasCard.vue'
    
    const isSidebarOpen = ref(false)
    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value
    }
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            
            <HeaderC titulo="Avaliação de Docentes"/>

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
                                <button>Avaliar Docente</button>
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
                                <button>Avaliar Docente</button>
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
                                <button>Avaliar Docente</button>
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
                                <button>Avaliar Docente</button>
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
                            <div class="cardFooter">
                                <button>Avaliar Docente</button>
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
                                <button>Avaliar Docente</button>
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
        width: 95%; /* Aumentei um pouco para dar mais espaço */
        background-color: #144575;
        border-radius: 6px;
        padding: 1.5rem;
        box-sizing: border-box;
        /* ✅ CORREÇÃO 1: Fazer o container ocupar a altura disponível */
        height: 100%;
        display: flex; /* Adicionado para centralizar o .cards se necessário */
    }

    .cards {
        display: grid;
        /* ✅ CORREÇÃO 2: Grade fixa de 3 colunas e 2 linhas */
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1.5rem; /* Reduzido o gap para caber melhor */
        width: 100%;
        /* ✅ CORREÇÃO 1: Fazer o grid ocupar a altura do pai */
        height: 100%;
    }

    /* Media query para telas menores onde a grade 3x2 não funciona bem */
    @media (max-width: 900px) {
        .cards {
            /* Volta ao comportamento responsivo automático e permite rolagem */
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            grid-template-rows: auto; /* Deixa a altura da linha automática */
            height: auto; /* Deixa a altura do container automática */
        }
        .bg {
            height: auto;
            width: 100%;
        }
    }

 .card {
    background-color: #f5f5f5; /* Fundo claro original */
    border: none;
    display: flex;
    flex-direction: column;
    overflow: hidden; 
}

/* ✅ 2. Aplicando a correção final no .cardHeader */
.cardHeader {
    background-color: #144575; /* Fundo azul, como você quer */
    width: 100%;
    height: 25%;
    margin: 0;
    padding: 0;
    
    /* Mantemos o arredondamento para alinhar com o pai */
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    box-shadow: 0 0 0 6px #144575;
}

/* ✅ 3. Revertendo o .cardBody e .cardFooter (removendo o fundo) */
.cardBody {
    flex-grow: 1; 
    overflow-y: auto;
    height: 60%; 
    padding: 0.5rem 0;
    /* background-color: #f5f5f5;  <-- REMOVIDO */
}

.cardBody p {
    margin: 0.25rem 0.5rem; 
    font-size: 0.9rem;
    color: #333; /* Mantemos o texto escuro para legibilidade */
}

.cardFooter {
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
    height: 20%;
    border-radius: 6px;
}

/* O restante do seu CSS continua igual... */
.cardFooter button {
    margin: 6px;
    font-size: 0.7rem;
    background-color: #144575;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0 0.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s ease;
}

</style>