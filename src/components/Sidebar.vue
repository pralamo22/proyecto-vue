<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar axVH">
    <h2>Barra lateral</h2>
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
    </ul>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.sidebar {
  width: 200px;
  background-color: antiquewhite;
  padding: 20px;
}
.axVH {
  min-height: 100vh;
}
</style>
