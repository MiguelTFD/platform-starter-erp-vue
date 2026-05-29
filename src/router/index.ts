import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('../layouts/AuthLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('../modules/auth/views/LoginView.vue'),
      },
    ],
  },
  {
    // ZONA PRIVADA (ERP Core)
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '', // Ruta por defecto al entrar al ERP
        name: 'Dashboard',
        component: () => import('../modules/dashboard/views/DashboardView.vue'),
      },
      {
        path: 'invoices',
        name: 'Invoices',
        component: () => import('../modules/invoices/views/InvoicesView.vue'),
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../modules/users/views/UsersView.vue'),
        // Añadimos metadatos extra para futura validación dura (Defensa en profundidad)
        meta: { roles: ['ADMIN'] } 
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;