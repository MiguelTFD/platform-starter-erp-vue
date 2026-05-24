import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Definición estricta de rutas
const routes: RouteRecordRaw[] = [
  {
    // Ruta pública: Login
    path: '/login',
    component: () => import('../layouts/AuthLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '', // Se carga por defecto al visitar '/login'
        name: 'Login',
        component: () => import('../features/auth/views/LoginView.vue'),
      },
    ],
  },
  {
    // Ruta privada: ERP Core
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'), // Lo construiremos después
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        // Componente temporal (placeholder) hasta que creemos el módulo de inicio
        component: () => import('../features/auth/views/LoginView.vue'), 
      },
      // Aquí anidaremos las rutas de facturas, usuarios, etc.
    ],
  },
  {
    // Catch-all: Redirección de rutas no encontradas (404)
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
];

export const router = createRouter({
  // Usamos el API History de HTML5. Sin '#' en la URL.
  history: createWebHistory(),
  routes,
});

export default router;
