<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar axVH">
    <h2>Bienvenido</h2>
    <br />
    <h5>Nombre: {{ nombre }}</h5>
    <br />
    <h5>email: {{ email }}</h5>
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

<script setup>
import { useRegistrarStore } from "@/modules/registrar/stores/registrarStore";
import { ref, watch } from "vue";

const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);

watch(
  () => registrarStore.nombre,
  (newValue) => {
    nombre.value = newValue;
  }
);
watch(
  () => registrarStore.email,
  (newValue) => {
    email.value = newValue;
  }
);
</script>

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
