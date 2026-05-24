import { useMutation } from '@tanstack/vue-query';
import { loginApi } from '../api/auth.api';
import { useAuthStore } from '../../../stores/auth.store';
import type { LoginForm, AuthResponse } from '../schemas/auth.schema';

export const useLoginMutation = () => {
  const authStore = useAuthStore();

  return useMutation<AuthResponse, Error, LoginForm>({
    // 1. Inyección de la función pura de API
    mutationFn: loginApi,
    
    // 2. Efecto secundario exitoso: Mutar el estado global (Client State)
    onSuccess: (data: AuthResponse) => {
      authStore.setSession(data);
    },
  });
};
