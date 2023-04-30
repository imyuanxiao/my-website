import { createApp } from 'vue'
import '../public/css/style.css'
import App from './App.vue'
import router from "./router";
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);

app.use(router).use(store).use(Vant)


app.mount('#app')

