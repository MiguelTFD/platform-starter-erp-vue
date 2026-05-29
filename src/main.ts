import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';


import App from './App.vue';

import { router } from './router';
import { setupRouterGuards } from './router/guards';

import './assets/styles/tailwind.css';
import 'primeicons/primeicons.css';
import './assets/styles/base.css';

const app = createApp(App);
const pinia = createPinia();


app.use(pinia);
app.use(VueQueryPlugin);
app.use(PrimeVue, { unstyled: true });

setupRouterGuards(router); // Armamos la muralla pasándole la instancia del router
app.use(router);           // Inyectamos el router a la aplicación

app.mount('#app');
