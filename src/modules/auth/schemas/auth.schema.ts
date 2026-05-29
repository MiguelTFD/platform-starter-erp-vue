import { z } from 'zod';

// 1. Esquema de validación para el formulario (Runtime)
export const loginSchema = z.object({
  email: z.string().email('Formato de correo inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

// 2. Inferencia de tipos (Compile time) - Principio DRY
export type LoginForm = z.infer<typeof loginSchema>;

// 3. Contrato de la entidad User y los roles permitidos
export const RoleSchema = z.enum(['ADMIN', 'USER']);
export type Role = z.infer<typeof RoleSchema>;

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
}

// 4. Contrato de respuesta del backend (preparado para JWT)
export interface AuthResponse {
  user: AuthUser;
  token: string; // Aquí irá el JWT
}
