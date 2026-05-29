<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import type { Role } from '../modules/auth/schemas/auth.schema';

// Iconos de PrimeVue (PrimeIcons)
import 'primeicons/primeicons.css';

const authStore = useAuthStore();
const router = useRouter();

// 1. Contrato de la estructura del menú
interface MenuItem {
  label: string;
  routeName: string;
  icon: string;
  roles: Role[]; // Array de roles autorizados
}

// 2. Diccionario central de navegación
const menuItems: MenuItem[] = [
  { label: 'Dashboard', routeName: 'Dashboard', icon: 'pi pi-home', roles: ['ADMIN', 'USER'] },
  { label: 'Facturas', routeName: 'Invoices', icon: 'pi pi-file', roles: ['ADMIN', 'USER'] },
  // La ruta de usuarios es exclusiva para administradores
  { label: 'Usuarios', routeName: 'Users', icon: 'pi pi-users', roles: ['ADMIN'] }, 
];

// 3. Estado derivado: Filtramos el menú según la sesión activa
const visibleMenuItems = computed(() => {
  const currentRole = authStore.currentRole;
  if (!currentRole) return [];
  
  return menuItems.filter(item => item.roles.includes(currentRole));
});

// 4. Acción de salida
const handleLogout = () => {
  authStore.clearSession();
  router.push({ name: 'Login' });
};
</script>

<template>
  <aside class="w-64 bg-surface-0 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-800 flex flex-col h-full shadow-sm">
    <div class="p-6 border-b border-surface-200 dark:border-surface-800">
      <h2 class="text-xl font-bold text-primary-500 tracking-tight">ERP Starter</h2>
      <p class="text-xs text-surface-500 mt-1 uppercase tracking-wider">
        Rol: <span class="font-bold">{{ authStore.currentRole }}</span>
      </p>
    </div>

    <nav class="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
      <router-link
        v-for="item in visibleMenuItems"
        :key="item.routeName"
        :to="{ name: item.routeName }"
        class="flex items-center gap-3 px-3 py-2 rounded-md text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
        active-class="bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 font-semibold"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="p-4 border-t border-surface-200 dark:border-surface-800">
      <button 
        @click="handleLogout"
        class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-left"
      >
        <i class="pi pi-sign-out"></i>
        <span class="font-semibold">Cerrar Sesión</span>
      </button>
    </div>
  </aside>
</template>