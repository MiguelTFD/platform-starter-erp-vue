import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura'; 

import App from './App.vue';

import { router } from './router';
import { setupRouterGuards } from './router/guards';

import './assets/styles/base.css';

const app = createApp(App);
const pinia = createPinia();

// 2. Inyección de Estado y Manejo de Datos (Server/Client State)
// IMPORTANTE: Pinia DEBE inyectarse antes que el Router para evitar colisiones 
// si los guards intentan leer el store durante la navegación inicial.
app.use(pinia);
app.use(VueQueryPlugin);

// 3. Inyección de UI Framework
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: { 
      // Preparado para modo oscuro (compatible con Tailwind/tu sistema)
      darkModeSelector: '.dark' 
    }
  }
});

// 4. Configuración y Montaje del Enrutador
setupRouterGuards(router); // Armamos la muralla pasándole la instancia del router
app.use(router);           // Inyectamos el router a la aplicación

// 5. Encendido (Mount)
app.mount('#app');
