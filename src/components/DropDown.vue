<template>
  <div class="secao-expansivel">
    <div class="cabecalho-expansivel" @click="alternarSecao">
      <h3>{{ titulo }}</h3>
      <span class="seta" :class="{ 'rotacionada': estaAberto }">▼</span>
    </div>
    <div class="conteudo-expansivel" :class="{ 'aberto': estaAberto }">
      <slot></slot>
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
  overflow: hidden;
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
}

.seta {
  transition: transform 0.3s ease;
}

.seta.rotacionada {
  transform: rotate(180deg);
}

.conteudo-expansivel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease;
  padding: 0 15px;
}

.conteudo-expansivel.aberto {
  max-height: 1000px;
}
</style>
