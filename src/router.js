//IMPORTAZIONE
import { createRouter, createWebHistory } from "vue-router";

//IMPORTAZIONE PAGINE
import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';

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
        },
        {
            path: '/posts/:slug',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router }