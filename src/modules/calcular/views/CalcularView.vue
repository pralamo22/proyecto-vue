<template>
    <div>
        <h3>Propiedades computadas</h3>
        <input type="text" v-model="valor">
        {{ valor*3 }}
        {{ valorCalculado}}
        <ResultadoSection :resultado="valorCalculado"></ResultadoSection>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import ResultadoSection from '../components/ResultadoSection.vue';
    const valor = ref('');
    const valorCalculado = computed(() => {
        return valor.value * 3

    });
</script>

<style lang="css" scoped>

</style>