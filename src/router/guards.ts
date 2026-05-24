import type { Router } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

/**
 * Función inyectora. Aisla la lógica de seguridad del archivo de declaración de rutas.
 */
export const setupRouterGuards = (router: Router) => {
  router.beforeEach((to, _from, next) => {
    // IMPORTANTE: El store debe instanciarse DENTRO del guard, 
    // no en la raíz del archivo, para evitar errores de inicialización de Pinia.
    const authStore = useAuthStore();
    
    // Verificamos si alguna parte de la ruta (incluyendo rutas padre) requiere autenticación
    const isAuthRequired = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = authStore.isAuthenticated;

    // Regla 1: El usuario intenta entrar a una zona protegida sin token
    if (isAuthRequired && !isAuthenticated) {
      return next({ name: 'Login' });
    }

    // Regla 2: El usuario ya tiene sesión pero intenta ir a la pantalla de login
    if (to.name === 'Login' && isAuthenticated) {
      return next({ name: 'Dashboard' }); // Lo devolvemos al ERP
    }

    // Regla 3: Todo está en orden, permitir el paso
    return next();
  });
};
