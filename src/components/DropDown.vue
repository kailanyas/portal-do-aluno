<template>
  <div class="secao-expansivel">
    <div class="cabecalho-expansivel" @click="alternarSecao">
      <h2>{{ titulo }}</h2>
      <span class="seta" :class="{ 'rotacionada': estaAberto }">▼</span>
    </div>
    <div class="conteudo-expansivel" :class="{ 'aberto': estaAberto }">
      <div class="conteudo-interno">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecaoExpansivel',
  props: {
    titulo: {
      type: String,
      required: true
    },
    abertoInicialmente: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      estaAberto: this.abertoInicialmente
    };
  },
  methods: {
    alternarSecao() {
      this.estaAberto = !this.estaAberto;
    }
  }
};
</script>

<style scoped>

.secao-expansivel {

  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
}

.cabecalho-expansivel {
  background-color: #f1f1f1;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.cabecalho-expansivel h3 {
  margin: 0;
  color: #333;
  font-size: 1rem;
}

.seta {
  transition: transform 0.3s ease;
}

.seta.rotacionada {
  transform: rotate(180deg);
}

.conteudo-expansivel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-out;
}

.conteudo-expansivel.aberto {
  /* Quando aberto, o conteúdo expande para sua altura total (1fr) */
  grid-template-rows: 1fr;
}

.conteudo-interno {
  overflow: hidden;
  padding: 0 15px; /* Mantém o padding */
}

.conteudo-expansivel.aberto .conteudo-interno {
    padding-top: 10px;
    padding-bottom: 15px;
}
</style>
