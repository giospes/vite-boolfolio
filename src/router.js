import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import Projects from './pages/Projects.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/About',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/projects/:slug',
            name: 'single-product',
            component: SingleProject
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]

})

export {router};

