<template>
  <h1 class="text-center">Hola Pablo</h1>
  <h2 class="text-center">Contador.vue desde components</h2>
  <div class="text-center">
    <span class="border border-primary fs-1 text-bg-primary">&nbsp;&nbsp;{{ contador }}&nbsp;&nbsp;</span>
  </div>
  <div class="text-center">
    <button type="button" class="btn btn btn-outline-primary" @click="incrementar">
      Incrementar
    </button>
    <button type="button" class="btn btn-outline-primary" @click="decrementar">
      decrementar
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const contador = ref(0);
  const incrementar = () => {
    contador.value++;
  };
  const decrementar = () => {
    contador.value--;
  };
</script>

<style scoped>
  .contador {
    color: blue;
    font-size: large;
  }

  button {
    padding: 5px;
    margin: 5px;
  }
</style>