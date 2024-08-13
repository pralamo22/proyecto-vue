<template>
    <div class="text-center">
        <h2 class="text-primary">Lista de tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" />
        <br>
        <ul class="list-group">
            <li v-for="(tarea, index) in tareas" :key="index" class="list-group-item">
                <div>
                    <div class="fs-3"> {{ tarea }}</div>
                    <div> <button @click="borrarTarea" class="btn btn-outline-danger">Borrar</button></div>
                </div>
            </li>

        </ul>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const tareas = ref([]);
    const nuevaTarea = ref("");
    const addTarea = () => {
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value = "";
    };
    const borrarTarea = (index) => {
        tareas.value.splice(index, 1);
    }
</script>

<style scoped>
    .list-group {
        display: inline-block;
        margin: 5px;
    }

    .list-group-item {
        margin: 10px;
        border-radius: 10px;

    }
</style>