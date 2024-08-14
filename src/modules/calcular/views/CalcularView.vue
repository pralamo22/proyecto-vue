<template>
    <div>
        <h3>Propiedades computadas</h3>
        <input type="text" v-model="valor">

        {{ valor*3 }}
        {{ valorCalculado}}
        <br>
        <h4>V-Show</h4>
        <div>
            <ResultadoSection v-show="mostrarElemento" :resultado="valorCalculado">ResultadoSection</ResultadoSection>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import ResultadoSection from '../components/ResultadoSection.vue';
    const valor = ref('');
    const valorCalculado = computed(() => {
        return valor.value * 3

    });

    const mostrarElemento = computed(() => {
        return valor.value > 10;
    });
</script>

<style lang="css" scoped>

</style>