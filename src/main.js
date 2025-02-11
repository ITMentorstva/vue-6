import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import ProductsView from "@/views/ProductsView.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: HomeView},
        {path: '/products', name: 'Products', component: ProductsView},

        // Ova linija mora biti zadnja!
        {path: '/:pathMatch(.*)*', name: '404', component: PageNotFound},
    ]
});


createApp(App)
    .use(router)
    .mount('#app')
