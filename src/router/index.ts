import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import store from "@/store/index.ts";

import Home from "@/views/Home.vue";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: "/index",
        name: "Home",
        component: Home,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
