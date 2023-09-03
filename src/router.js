//IMPORTAZIONE
import { createRouter, createWebHistory } from "vue-router";

//IMPORTAZIONE PAGINE
import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';

//CREAZIONE ROUTER

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostList
        }
    ]
});

export { router }