import axios from 'axios';
import { useAuthStore } from '../../stores/auth.store';
import { router } from '../../router'; // Importamos la instancia para forzar redirecciones

// 1. Instancia base aislada
export const httpClient = axios.create({
  // En un MVP asume localhost, pero prepáralo para variables de entorno
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Interceptor de Petición (Request) - Ida
httpClient.interceptors.request.use(
  (config) => {
    // Obtenemos el token síncronamente desde la memoria
    const authStore = useAuthStore();
    
    if (authStore.token && config.headers) {
      config.headers.Authorization = `Bearer ${authStore.token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Interceptor de Respuesta (Response) - Vuelta
httpClient.interceptors.response.use(
  (response) => {
    // Si la petición es exitosa (2xx), la dejamos pasar sin modificarla
    return response;
  },
  (error) => {
    // Capturamos globalmente el estado 401 (Unauthorized) o 403 (Forbidden)
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      const authStore = useAuthStore();
      
      // Destruimos la sesión local contaminada o expirada
      authStore.clearSession();
      
      // Expulsamos al usuario al perímetro de seguridad
      router.push({ name: 'Login' });
    }
    
    return Promise.reject(error);
  }
);