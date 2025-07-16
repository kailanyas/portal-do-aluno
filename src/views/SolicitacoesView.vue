<script setup>
    import { ref } from 'vue'
    import SideBar from '@/components/SideBar.vue'
    import HeaderC from '@/components/Header.vue'
    import FooterR from '@/components/Footer.vue'
    import Cards from '@/components/SolicitacoesCard.vue'
    
    const isSidebarOpen = ref(false)
    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value
    }
</script>

<template>
    <div class="layout-container">
        <SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

        <div class="content-area">
            <HeaderC />

            <main class="main-content">
                <h1 class="main-title">Solicitações</h1> 
                
                <Cards /> 
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
        padding: 1.5rem;
        box-sizing: border-box;
        

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-title {
        text-align: center; 
        width: 100%; 
        margin-bottom: 2rem; 
        margin-top: 1rem; 
        color: #ffffff; 
        font-size: 2em;
    }
</style>