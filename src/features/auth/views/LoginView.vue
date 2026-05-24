<script setup lang="ts">
import LoginForm from "../components/LoginForm.vue";
</script>

<template>
  <!-- 
    El layout padre (AuthLayout) controlará el centrado en la pantalla.
    Esta vista solo se preocupa por la presentación de su contenido específico.
  -->
  <div class="flex flex-col items-center justify-center w-full">
    <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0 mb-2">
        Sistema ERP
      </h1>
      <p class="text-surface-600 dark:text-surface-400">
        Ingresa tus credenciales para continuar
      </p>
    </div>

    <LoginForm />
  </div>
</template>
