<template>
  <!-- <div>
        <h2>Formulario de Registro</h2>
        <input type="text" placeholder="Ingrese su nombre">
        <input type="email" placeholder="Ingrese su @mail">
        <button type="submit">Registrar</button>
    </div> -->

  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <Field
        v-model="nombre"
        type="text"
        class="form-control"
        id="nombre"
        name="nombre"
      />
      <ErrorMessage name="nombre">error</ErrorMessage>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <Field
        v-model="email"
        type="email"
        class="form-control"
        id="email"
        name="email"
        aria-describedby="emailHelp"
      />
      <ErrorMessage name="email">error mail</ErrorMessage>
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Registrar</button>
  </Form>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import { ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema";
import { useRegistrarStore } from "../stores/registrarStore";
import { ref } from "vue";
const registrarStore = useRegistrarStore();
const nombre = ref("");
const email = ref("");

const onSubmit = () => {
  alert("El formulario ha sido enviado");
  registrarStore.guardarRegistro(nombre.value, email.value);
};
</script>

<style lang="css" scoped></style>
