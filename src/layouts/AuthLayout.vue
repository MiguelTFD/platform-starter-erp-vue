<script setup lang="ts">
// Este componente no necesita lógica de estado ni de negocio.
// Su única responsabilidad es la composición visual.
</script>

<template>
  <!-- 
    Contenedor principal: Ocupa el 100% del alto de la pantalla (min-h-screen).
    Usa Flexbox para centrar absolutamente cualquier contenido hijo.
    Los colores 'surface' provienen del preset de PrimeVue.
  -->
  <div
    class="min-h-screen flex items-center justify-center bg-surface-50 dark:bg-surface-950 p-4"
  >
    <div class="w-full max-w-md">
      <!-- 
        El Slot del Enrutador. 
        Aquí es donde Vue Router montará 'LoginView.vue' en tiempo de ejecución.
      -->
      <router-view />
    </div>
  </div>
</template>
