<template>
  <Header :mensaje="texto"></Header>
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
      <br>
      <p>Repasando componentes: </p>
      <input type="text" v-model="texto">
      {{ texto }}
    </div>
  </div>
</template>

<script setup>
  import Sidebar from "../components/Sidebar.vue";
  import Header from "@/components/Header.vue";
  import { ref } from 'vue';

  const texto = ref('');
</script>

<style scoped>
  .container {
    display: flex;
  }

  .content {
    flex: 1;
    padding: 20px;
  }
</style>