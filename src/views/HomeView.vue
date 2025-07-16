import Cards from '../components/Cards.vue'

<template>
	<div class="layout-container">
		<SideBar :isOpen="isSidebarOpen" @toggle="toggleSidebar"/>
		<img src="../../public/imagens/logo-ufes.png" alt="Logo da UFES" class="logo-ufes"/>

		<main class="main-content">
			<h1>Conteúdo Principal</h1>
			<p>Texto ou conteúdo da página.</p>
		</main>

  </div>
</template>

<script setup>
	import {ref} from 'vue'
	import SideBar from '../components/SideBar.vue'

	const isSidebarOpen = ref(false)

	function toggleSidebar() {
		isSidebarOpen.value = !isSidebarOpen.value
	}
</script>

<style>
.layout-container{
	display: flex;
	height: 100vh;
	width: 100%;
	overflow: hidden;
}

.main-content{
	flex: 1 1 auto;           
	padding: 1.5rem;
	overflow-y: auto;        
	max-width: 100%;         
	box-sizing: border-box;
}

.logo-ufes{
  position: fixed;
  top: 16px;
  right: 16px;
  height: 70px;
  z-index: 1000;
}
</style>
