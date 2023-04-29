import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
// import 'vant/lib/index.css';
import store from './store';

// import { Icon, Collapse, CollapseItem } from 'vant';

const app = createApp(App);

app.use(router).use(store)

// app.use(Icon).use(Collapse).use(CollapseItem)

app.mount('#app')