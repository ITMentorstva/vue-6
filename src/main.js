import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: HomeView},
        {path: '/:pathMatch(.*)*', name: '404', component: PageNotFound},
    ]
});

// 404 -> Nismo uspeli da pronadjemo ovu stranicu


createApp(App)
    .use(router)
    .mount('#app')
