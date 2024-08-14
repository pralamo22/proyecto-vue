<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar axVH">
    <br /><br />
    <h2>Bienvenido</h2>
    <br />
    <h5>Nombre: {{ registrarStore.nombre }}</h5>
    <br />
    <h5>email: {{ registrarStore.email }}</h5>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/lista_de_tareas">Lista de Tareas</router-link>
      </li>
      <li>
        <router-link to="/registrar">Registrar</router-link>
      </li>
      <li>
        <router-link to="/calcular">Calcular</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistrarStore } from "@/modules/registrar/stores/registrarStore";

const registrarStore = useRegistrarStore();
</script>

<style lang="css" scoped>
.sidebar {
  width: 350px;
  background-color: antiquewhite;
  padding: 20px;
}

.axVH {
  min-height: 100vh;
}
</style>
