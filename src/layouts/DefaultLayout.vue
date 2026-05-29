<script setup lang="ts">
import AppSidebar from './AppSidebar.vue';
</script>

<template>
  <div class="h-screen w-full flex overflow-hidden bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-surface-0">
    <AppSidebar />

    <main class="flex-1 flex flex-col overflow-hidden relative">
      <div class="flex-1 overflow-y-auto p-8">
        <router-view />
      </div>
    </main>
  </div>
</template>