import { createApp } from 'vue';
import App from './Pages/LoginHome.vue';
import router from './router/';

const app = createApp(App);
app.use(router);
app.mount('#app');