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

    function abrirLink(titulo, url) {
        Swal.fire({
            title: `Você deseja ser redirecionado para página "${titulo}?"`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#144575',
		    cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar',
            width: '500px'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(url, '_blank', 'noopener')
            }
        })
    }
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            <HeaderC titulo="Links Externos"/>

            <main class="main-content">
                <div id="links-content">
                    <a class="link" @click="abrirLink('Biblioteca (SIB)', 'https://biblioteca.ufes.br/')">
                        <div class="link-header">
                            <h2>Biblioteca (SIB)</h2>
                        </div>
                        <div class="link-main">
                            Acesse o portal do Sistema Integrado de Bibliotecas da UFES para fazer buscas no acervo, renovar empréstimos e consultar informações sobre serviços disponíveis.
                        </div>
                    </a>

                    <a class="link" @click="abrirLink('Portal da Assistência Estudantil', 'https://ae.ufes.br/')">
                            <div class="link-header">
                                <h2>Portal da Assistência Estudantil</h2>
                            </div>
                            <div class="link-main">
                                Plataforma onde estudantes podem solicitar auxílios, acompanhar editais e gerenciar seus dados no âmbito da Assistência Estudantil da UFES.
                            </div>
                    </a>

                    <a class="link" @click="abrirLink('Processos Seletivos', 'https://ps.ufes.br/')">
                        <div class="link-header">
                            <h2>Processos Seletivos (PSVS)</h2>
                        </div>
                        <div class="link-main">
                            Página oficial dos processos seletivos da UFES, com editais, resultados, cronogramas e orientações para ingresso em cursos ou programas.
                        </div>
                    </a>

                    <a class="link" @click="abrirLink('Resoluções Acadêmicas', 'https://daocs.ufes.br/resolucoes')">
                        <div class="link-header">
                            <h2>Resoluções Acadêmicas</h2>
                        </div>
                        <div class="link-main">
                            Consulte as resoluções, normas e regulamentos acadêmicos emitidos pela Direção do Centro ou Conselho Departamental da UFES.
                        </div>
                    </a>

                    <a class="link" @click="abrirLink('Site do Curso', 'https://computacao.alegre.ufes.br/')">
                        <div class="link-header">
                            <h2>Site do Curso</h2>
                        </div>
                        <div class="link-main">
                            Acesse o site oficial do seu curso, com notícias, calendário, projetos e informações institucionais.
                        </div>
                    </a>

                    <a class="link" @click="abrirLink('Projetos Prograd', 'https://permanecer.ufes.br/')">
                        <div class="link-header">
                            <h2>Projetos Prograd</h2>
                        </div>
                        <div class="link-main">
                            Conheça os projetos vinculados à Pró-Reitoria de Graduação (Prograd), como o Programa Permanecer, voltados à permanência e formação acadêmica dos estudantes.
                        </div>
                    </a>
                </div>
                
            </main>

            <FooterR />
        </div>
    </div>
</template>


<style scoped>
.layout-container {
    display: flex;
    min-height: 100vh;
    width: 100vw;
}

.content-area {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
    height: auto;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#links-content {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
}

.link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}
.link:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.link-header {
    width: 100%;
    text-align: center;
    padding: 1rem;
    color: #144575;
}

.link-main {
    text-align: center;
    margin: 0.5rem;
    padding-bottom: 1rem;
}

@media (max-width: 768px) {
    #links-content {
        grid-template-columns: 1fr;
    }

    .main-content {
        padding: 1rem;
    }

    .link {
        width: 100%;
    }
}

</style>