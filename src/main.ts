import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {VueQueryPlugin} from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue';
import './style.css';

const app = createApp(App);

app.use(createPinia());
app.use(VueQueryPlugin);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.mount('#app');
