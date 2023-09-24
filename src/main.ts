import { createApp } from 'vue'
import '../public/css/style.css'
import App from './App.vue'
import router from "./router";
import store from './store';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n';
// Import the JSON files using import
import enLocale from '/locales/en.json';
import zhLocale from '/locales/zh.json';


const i18n = createI18n({
    locale: 'zh',
    messages: {
        en: enLocale,
        zh: zhLocale
    }
});

const app = createApp(App);
app.use(ElementPlus)
app.use(router).use(store);
app.use(i18n)


app.mount('#app')

