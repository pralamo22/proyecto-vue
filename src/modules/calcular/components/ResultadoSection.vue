<template>
  <div class="resultado">{{ props.resultado }}</div>
</template>

<script setup>
// import { defineProps } from 'vue';
const props = defineProps(["resultado"]);
</script>

<style lang="css" scoped>
.resultado {
  background-color: aquamarine;
}
</style>
