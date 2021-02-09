require('./bootstrap.js')
import { createApp } from 'vue';
import App from './components/App.vue'
import routes from './routes/index'
const app = createApp(App);
app.use(routes);
app.mount("#app");
