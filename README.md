# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Project Structure

```sh
platform-starter-erp-vue/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       ├── base.css
│   │       └── primevue-theme.css   # Optional overrides
│   │
│   ├── core/                        # Technical infrastructure (non-business)
│   │   ├── http/
│   │   │   ├── httpClient.ts        # Axios instance + interceptors
│   │   │   └── apiEndpoints.ts      # Centralized base endpoint dictionary
│   │   ├── query/
│   │   │   └── queryClient.ts       # Vue Query client configuration
│   │   └── error/
│   │       └── errorHandler.ts      # Global error handler (e.g. for interceptors)
│   │
│   ├── features/                    # Self-contained business domains
│   │   ├── auth/
│   │   │   ├── api/                 # Pure HTTP request functions (axios)
│   │   │   ├── schemas/             # Zod: LoginSchema, RegisterSchema
│   │   │   ├── composables/         # useAuthQuery, useLoginMutation (TanStack wrappers)
│   │   │   ├── components/          # Module-private components (LoginForm.vue, etc.)
│   │   │   └── views/               # Page components (LoginView.vue, RegisterView.vue)
│   │   ├── invoices/
│   │   ├── users/
│   │   │   ├── api/
│   │   │   ├── schemas/
│   │   │   ├── composables/         # useUsersQuery, useUserTable, useUserForm
│   │   │   ├── components/
│   │   │   └── views/
│   │   └── ...                      # Other ERP modules
│   │
│   ├── shared/                      # Framework-agnostic reusable code
│   │   ├── components/              # Generic UI components (BaseButton, BaseModal)
│   │   │   ├── ui/
│   │   │   └── charts/              # ECharts wrappers (KpiChart.vue, etc.)
│   │   ├── composables/             # Global reactive functions (useDebounce, useMediaQuery)
│   │   └── utils/                   # Pure functions (formatCurrency, parseDate)
│   │
│   ├── layouts/                     # Page wrappers
│   │   ├── DefaultLayout.vue        # Sidebar + navbar + <router-view>
│   │   └── AuthLayout.vue           # Centered layout for login
│   │
│   ├── router/
│   │   ├── index.ts                 # createRouter and main routes
│   │   └── guards.ts                # Global beforeEnter guards (authentication)
│   │
│   ├── stores/                      # Global Pinia stores (cross-cutting only)
│   │   └── themeStore.ts            # Dark/light mode, UI preferences
│   │
│   ├── App.vue
│   └── main.ts                      # createApp, use(router), use(pinia), use(queryClient)
│
├── tests/                           # Unit and integration tests with Vitest
│   ├── unit/
│   └── integration/
│
├── vite.config.ts
├── tsconfig.json
└── package.json
```
