<script setup lang="ts">
// Este layout envolverá todas las vistas privadas (Dashboard, Usuarios, Facturas).
</script>

<template>
  <div
    class="min-h-screen flex bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-surface-0"
  >
    <!-- Sidebar Placeholder -->
    <aside
      class="w-64 bg-surface-0 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-800 p-4 flex flex-col"
    >
      <div class="text-xl font-bold mb-6">ERP System</div>
      <nav class="flex flex-col gap-2">
        <!-- Más adelante aquí inyectaremos los links condicionales según el rol -->
        <span class="p-2 bg-surface-100 dark:bg-surface-800 rounded"
          >Dashboard</span
        >
      </nav>
    </aside>

    <!-- Contenido Principal -->
    <main class="flex-1 p-6 overflow-y-auto">
      <!-- Aquí se inyectarán las vistas protegidas -->
      <router-view />
    </main>
  </div>
</template>
