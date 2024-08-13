<template>
  <!-- <div>
    <h2>Formulario de Registro</h2>
    <input type="text" placeholder="Ingrese su nombre" />
    <input type="email" placeholder="Ingrese su email" />
    <button type="submit">Registrar</button>
  </div> -->
  <!-- Form en mayúsculas por exigencias de vee-validate -->
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-3">
      <label for="nombre" class="form-label">Ingrese su nombre</label>
      <Field type="text" class="form-control" name="nombre" id="nombre" aria-describedby="name" />
      <div id="name" class="form-text">
        We'll never share your name with anyone else.
      </div>
      <ErrorMessage name="nombre"></ErrorMessage>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Ingrese su @mail</label>
      <Field type="email" class="form-control" name="email" id="email" />
      <ErrorMessage name="email"></ErrorMessage>
    </div>
    <div class="mb-3 form-check">
      <Field type="checkbox" class="form-check-input" name="exampleCheck1" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Registrar</button>
  </Form>
</template>

<script setup>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import { schema } from '../schemas/validationSchema';
  const onSubmit = () => {
    alert('El formulario ha sido enviado, gracias');
  }
</script>
<style lang="css" scoped></style>