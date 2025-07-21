<script setup>
    import { ref } from 'vue'
    import SideBar from '@/components/SideBar.vue'
    import HeaderC from '@/components/Header.vue'
    import FooterR from '@/components/Footer.vue'
    import Swal from 'sweetalert2'
    
    const isSidebarOpen = ref(false)
    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value
    }

    function abrirLink(titulo, caminho) {
        Swal.fire({
            title: `Você deseja abrir o arquivo "${titulo}?"`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#144575',
		    cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar',
            width: '500px'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(caminho, '_blank', 'noopener')
            }
        })
    }
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            <HeaderC titulo="Documentos"/>

            <main class="main-content">
                <div id="links-content">
                    <div id="title">
                        <h3>Documento</h3>
                        <h3>Download</h3>
                    </div>

                    <div class="link-card">
                        <div class="link-header">
                            <p>Atestado de Cotista</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Atestado de Cotista', '')"></i>
                        </div>
                    </div>

                    <div class="link-card">
                        <div class="link-header">
                            <p>Atestado de Matrícula</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Atestado de Matrícula', '')"></i>
                        </div>
                    </div>
                                               
                    <div class="link-card">
                        <div class="link-header">
                            <p>Atestado de Reconhecimento</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Atestado de Reconhecimento', '')"></i>
                        </div>
                    </div>
                                        
                    <div class="link-card">
                        <div class="link-header">
                            <p>Comprovante de Matrícula Provisório</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Comprovante de Matrícula Provisório', '/pdf/Comprovante_de_matricula.pdf')"></i>
                        </div>
                    </div>
                         
                    <div class="link-card">
                        <div class="link-header">
                            <p>Comprovante de Solicitação de Matrícula</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Comprovante de Solicitação de Matrícula', '')"></i>
                        </div>
                    </div>
                                 
                    <div class="link-card">
                        <div class="link-header">
                            <p>Comprovante de Rendimentos IR</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Comprovante de Rendimentos IR', '')"></i>
                        </div>
                    </div>
                        
                    <div class="link-card">
                        <div class="link-header">
                            <p>Currículo de Cursos</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Currículo de Cursos', '')"></i>
                        </div>
                    </div>
                        
                    <div class="link-card">
                        <div class="link-header">
                            <p>Estágio</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Estágio', '')"></i>
                        </div>
                    </div>
                              
                    <div class="link-card">
                        <div class="link-header">
                            <p>Ficha Cadastral do Aluno</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Ficha Cadastral do Aluno', '')"></i>
                        </div>
                    </div>

                    <div class="link-card">
                        <div class="link-header">
                            <p>Grade de Horário Individual</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Grade de Horário Individual', '/pdf/Horario_Individual.pdf')"></i>
                        </div>
                    </div>
                    
                    <div class="link-card">
                        <div class="link-header">
                            <p>Histórico Parcial</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Histórico Parcial', '')"></i>
                        </div>
                    </div>
                    
                    <div class="link-card">
                        <div class="link-header">
                            <p>Identidade UFES</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Identidade UFES', '')"></i>
                        </div>
                    </div>
                    
                    <div class="link-card">
                        <div class="link-header">
                            <p>Integralização Curricular</p>
                            <i class="fa-solid fa-download" @click="abrirLink('Integralização Curricular', '')"></i>
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
    overflow: hidden;
}

.content-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    overflow: hidden;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    padding: 1.3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
}

#links-content {
    width: 60%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
}

#title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #144575;
    padding: 0.5rem;
    flex-wrap: wrap;
}

#title h3 {
    font-size: 1.3rem;
}


.link-card {
    padding: 0.8rem 1rem;
    margin: 0.5rem 0;
    border-radius: 10px;
    background-color: #f7f9fb;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

.link-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.link-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.link-header p {
    font-weight: 650;
    word-break: break-word;
}

.link-header i {
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
}

.link-header i:hover {
    color: #144575;
}

@media (max-width: 768px) {
    #links-content {
        width: 95%;
        padding: 0.8rem;
    }

    .main-content {
        padding: 1rem 0.5rem;
    }

    #title p {
        font-size: 1rem;
    }

    .link-header p {
        font-size: 0.95rem;
    }

    .link-header i {
        font-size: 1.3rem;
    }
}
</style>
