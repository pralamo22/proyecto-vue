<template>
    <div class="header">
        La temperatura actual es: <Weather></Weather>

    </div>
</template>

<script setup>
    import Weather from './Weather.vue';
</script>

<style lang="css" scoped>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: #333;
        color: white;
    }

    h3 {
        margin: 0;
        display: inline-flexbox;
    }
</style>