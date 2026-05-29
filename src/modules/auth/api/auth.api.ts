import type { LoginForm, AuthResponse } from '../schemas/auth.schema';

/**
 * Simula una petición HTTP de login.
 * En el futuro, reemplazarás el interior con axios.post('/api/auth/login', credentials)
 */
export const loginApi = async (credentials: LoginForm): Promise<AuthResponse> => {
  // 1. Simulamos latencia de red (800ms)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // 2. Hardcodeamos los roles para poder probar el ruteo dinámico después
  if (credentials.email === 'admin@erp.com' && credentials.password === '123456') {
    return {
      user: { id: '1', email: 'admin@erp.com', name: 'Administrador', role: 'ADMIN' },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.admin-mock-payload.signature',
    };
  }

  if (credentials.email === 'user@erp.com' && credentials.password === '123456') {
    return {
      user: { id: '2', email: 'user@erp.com', name: 'Operador', role: 'USER' },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user-mock-payload.signature',
    };
  }

  // 3. Simulamos un error HTTP 401
  throw new Error('Credenciales inválidas');
};
