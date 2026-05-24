import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useStorage } from '@vueuse/core';
import type { AuthUser, AuthResponse } from '../features/auth/schemas/auth.schema';

export const useAuthStore = defineStore('auth', () => {
  // 1. Estado: Persistencia reactiva automatizada (KISS)
  const token = useStorage<string | null>('jwt_token', null);
  const user = useStorage<AuthUser | null>('auth_user', null);

  // 2. Getters: Estado derivado
  const isAuthenticated = computed(() => !!token.value);
  const currentRole = computed(() => user.value?.role ?? null);

  // 3. Acciones: Mutaciones explícitas
  const setSession = (data: AuthResponse) => {
    token.value = data.token;
    user.value = data.user;
  };

  const clearSession = () => {
    token.value = null;
    user.value = null;
  };

  return {
    token,
    user,
    isAuthenticated,
    currentRole,
    setSession,
    clearSession,
  };
});
