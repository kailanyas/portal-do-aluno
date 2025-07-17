<script setup>
	import { ref } from 'vue'
	import SideBar from '@/components/SideBar.vue'
	import HeaderC from '@/components/Header.vue'
	import FooterR from '@/components/Footer.vue'
	import Cards from '@/components/HomeCard.vue'
	
	const isSidebarOpen = ref(false)
	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value
	}
</script>

<template>
	<div class="layout-container">
    	<SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar" />

    	<div class="content-area">
      		<HeaderC titulo="Bem-vindo(a) ao Portal do Aluno!"/>

      		<main class="main-content">
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
	padding: 1.3rem;
	box-sizing: border-box;
	}
</style>

