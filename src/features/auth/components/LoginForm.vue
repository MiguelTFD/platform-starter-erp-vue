<script setup lang="ts">
import { useRouter } from "vue-router";
import { useForm } from "@tanstack/vue-form";
import { useLoginMutation } from "../composables/useLoginMutation";
import { loginSchema } from "../schemas/auth.schema";

// Componentes de PrimeVue
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Message from "primevue/message";

const router = useRouter();
const loginMutation = useLoginMutation();

// Inicialización de TanStack Form
const form = useForm({
  defaultValues: {
    email: "",
    password: "",
  },
  // Validamos todo el formulario en el submit y en el change usando el esquema de Zod
  validators: {
    onChange: loginSchema,
  },
  onSubmit: async ({ value }) => {
    // value ya está tipado como LoginForm gracias a la inferencia
    loginMutation.mutate(value, {
      onSuccess: () => {
        // Efecto secundario de UI: Redirección post-login
        router.push("/");
      },
    });
  },
});
</script>

<template>
  <form
    @submit.prevent="form.handleSubmit"
    class="flex flex-col gap-4 w-full max-w-md p-6 bg-surface-0 dark:bg-surface-900 rounded-lg shadow"
  >
    <!-- Campo: Email -->
    <form.Field name="email">
      <template #default="{ field, state }">
        <div class="flex flex-col gap-1">
          <label for="email" class="text-sm font-semibold"
            >Correo Electrónico</label
          >
          <InputText
            id="email"
            :model-value="field.state.value"
            @update:model-value="field.handleChange"
            @blur="field.handleBlur"
            :invalid="state.meta.errors.length > 0"
            placeholder="admin@erp.com"
          />
          <small v-if="state.meta.errors.length" class="text-red-500">
            {{ state.meta.errors.join(", ") }}
          </small>
        </div>
      </template>
    </form.Field>

    <!-- Campo: Contraseña -->
    <form.Field name="password">
      <template #default="{ field, state }">
        <div class="flex flex-col gap-1">
          <label for="password" class="text-sm font-semibold">Contraseña</label>
          <Password
            id="password"
            :model-value="field.state.value"
            @update:model-value="field.handleChange"
            @blur="field.handleBlur"
            :invalid="state.meta.errors.length > 0"
            :feedback="false"
            toggleMask
          />
          <small v-if="state.meta.errors.length" class="text-red-500">
            {{ state.meta.errors.join(", ") }}
          </small>
        </div>
      </template>
    </form.Field>

    <!-- Feedback de Error de Red / API -->
    <Message
      v-if="loginMutation.isError.value"
      severity="error"
      :closable="false"
    >
      {{ loginMutation.error.value?.message }}
    </Message>

    <!-- Botón Submit -->
    <Button
      type="submit"
      label="Ingresar al ERP"
      :loading="loginMutation.isPending.value"
      class="mt-2"
    />
  </form>
</template>
