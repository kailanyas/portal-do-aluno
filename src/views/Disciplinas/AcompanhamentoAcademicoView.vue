<script setup>
    // Imports e lógica do layout principal (fora dos cards)
    import { ref } from 'vue'
    import SideBar from '@/components/SideBar.vue'
    import HeaderC from '@/components/Header.vue'
    import FooterR from '@/components/Footer.vue'
    
    const isSidebarOpen = ref(false)
    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value
    }
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            <HeaderC titulo="Acompanhamento Acadêmico" />

            <main class="main-content">
                <div class="bg">
                    <div class="cards">

                        <div class="card">
                            <div class="cardHeader">
                                <h3>Plano de Acompanhamento de Estudos (PAE)</h3>
                            </div>
                            <div class="cardBody">
                                <table>
                                    <caption class="sr-only">
                                        Tabela com o Plano de Acompanhamento de Estudos (PAE), listando período, atividade e situação.
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Período</th>
                                            <th scope="col">Atividade Acadêmica</th>
                                            <th scope="col">Situação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2025/2</th>
                                            <td>Desenvolvimento Web</td>
                                            <td>Concluído</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2025/2</th>
                                            <td>Banco de Dados</td>
                                            <td>Pendente</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2025/2</th>
                                            <td>Engenharia de Software</td>
                                            <td>Concluído</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardHeader">
                                <h3>Plano de Integralização Curricular (PIC)</h3>
                                <p>Disciplinas do Plano de Estudo</p>
                            </div>
                            <div class="cardBody">
                                <table>
                                    <caption class="sr-only">
                                        Tabela com disciplinas do Plano de Integralização Curricular, indicando período, disciplina, carga horária e créditos.
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Período</th>
                                            <th scope="col">Disciplina</th>
                                            <th scope="col">CH</th>
                                            <th scope="col">Créditos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2024/2</th>
                                            <td>Algoritmos Avançados</td>
                                            <td>60h</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2024/2</th>
                                            <td>Desenvolvimento Web</td>
                                            <td>60h</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2024/2</th>
                                            <td>Redes de Computadores</td>
                                            <td>60h</td>
                                            <td>4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardHeader">
                                <h3>Plano de Integralização Curricular (PIC)</h3>
                                <p>Atividades por Carga Horária</p>
                            </div>
                            <div class="cardBody">
                                <table>
                                    <caption class="sr-only">
                                        Tabela com atividades do Plano de Integralização Curricular por carga horária, listando período, tipo e carga horária.
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">Período</th>
                                            <th scope="col">Tipo Atividade</th>
                                            <th scope="col">CH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">2023/2</th>
                                            <td>Banco de Dados</td>
                                            <td>90h</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2023/2</th>
                                            <td>Engenharia de Software</td>
                                            <td>30h</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2022/2</th>
                                            <td>Inteligência Artificial</td>
                                            <td>45h</td>
                                        </tr>
                                    </tbody>
                                </table>
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
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1.5rem;
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
        background-color: #f5f5f5;
        border: none;
        display: flex;
        flex-direction: column;
        overflow: hidden; 
        border-radius: 12px;
        text-align: left;
        font-weight: normal;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .cardHeader {
        background-color: #f5f5f5;
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        
        min-height: 5.2rem; 
    }

    .cardHeader h3 {
        font-size: 1.2rem;
        color: #144575;
        margin: 0;
    }

    .cardHeader p {
        font-size: 0.8rem;
        color: #144575;
        margin: 0;
        opacity: 0.9; 
    }
    .cardBody {
        flex-grow: 1; 
        overflow-y: auto;
        padding: 0; 
    }

    
    .cardBody table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9rem;
    }
    
    .cardBody th, .cardBody td {
        padding: 0.75rem;
        text-align: left;
        border-bottom: 1px solid #f5f5f5;
    }
    
    .cardBody th {
        background-color: #f5f5f5;
        font-weight: bold;
        color: #495057;
    }
    
    .cardBody tbody tr:hover {
        background-color: #f5f5f5;
    }
    
    
    .status {
        padding: 0.2rem 0.5rem;
        border-radius: 12px;
        color: #144575;
        font-size: 0.75rem;
        font-weight: bold;
        text-align: center;
        display: inline-block;
    }
    .status-aprovado { background-color: #28a745; }
    .status-reprovado { background-color: #dc3545; }
    .status-cursando { background-color: #ffc107; color: #212529; }
</style>