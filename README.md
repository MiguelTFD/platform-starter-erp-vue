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
│   │       └── primevue-theme.css   # optional overrides
│   │
│   ├── core/                        # technical infrastructure (non-business)
│   │   ├── http/
│   │   │   ├── httpclient.ts        # axios instance + interceptors
│   │   │   └── apiendpoints.ts      # centralized base endpoint dictionary
│   │   ├── query/
│   │   │   └── queryclient.ts       # vue query client configuration
│   │   └── error/
│   │       └── errorhandler.ts      # global error handler (e.g. for interceptors)
│   │
│   ├── features/                    # self-contained business domains
│   │   ├── auth/
│   │   │   ├── api/                 # pure http request functions (axios)
│   │   │   ├── schemas/             # zod: loginschema, registerschema
│   │   │   ├── composables/         # useauthquery, useloginmutation (tanstack wrappers)
│   │   │   ├── components/          # module-private components (loginform.vue, etc.)
│   │   │   └── views/               # page components (loginview.vue, registerview.vue)
│   │   ├── invoices/
│   │   ├── users/
│   │   │   ├── api/
│   │   │   ├── schemas/
│   │   │   ├── composables/         # useusersquery, useusertable, useuserform
│   │   │   ├── components/
│   │   │   └── views/
│   │   └── ...                      # other erp modules
│   │
│   ├── shared/                      # framework-agnostic reusable code
│   │   ├── components/              # generic ui components (basebutton, basemodal)
│   │   │   ├── ui/
│   │   │   └── charts/              # echarts wrappers (kpichart.vue, etc.)
│   │   ├── composables/             # global reactive functions (usedebounce, usemediaquery)
│   │   └── utils/                   # pure functions (formatcurrency, parsedate)
│   │
│   ├── layouts/                     # page wrappers
│   │   ├── defaultlayout.vue        # sidebar + navbar + <router-view>
│   │   └── authlayout.vue           # centered layout for login
│   │
│   ├── router/
│   │   ├── index.ts                 # createrouter and main routes
│   │   └── guards.ts                # global beforeenter guards (authentication)
│   │
│   ├── stores/                      # global pinia stores (cross-cutting only)
│   │   └── themestore.ts            # dark/light mode, ui preferences
│   │
│   ├── app.vue
│   └── main.ts                      # createapp, use(router), use(pinia), use(queryclient)
│
├── tests/                           # unit and integration tests with vitest
│   ├── unit/
│   └── integration/
│
├── vite.config.ts
├── tsconfig.json
└── package.json
```
