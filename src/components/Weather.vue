<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>{{ weatherStore.temperatura }}</div>
</template>

<script setup>
import { useWeather } from "../composables/useWeather";
import { onMounted } from "vue";
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();
onMounted(() => {
  useWeather();
});
</script>
<style lang="css" scoped></style>
