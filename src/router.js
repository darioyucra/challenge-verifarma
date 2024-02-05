import {createRouter, createWebHistory} from 'vue-router';
import {useUserStore} from './stores/user';
import Home from './views/HomeView.vue';
import Login from './views/LoginView.vue';
import Register from './views/RegisterView.vue';
import SearchMoviesView from './views/SearchMoviesView.vue';
import InfoMovieView from './views/InfoMovieView.vue';

const requiereAuth = async(to, from, next) => {
    const userStore = useUserStore();
    userStore.loadingSession = true;
    const user = await userStore.currentUser();
    if(user) {
        next();
    } else {
        next('/login')
    }
    userStore.loadingSession = false;
}

const routes = [
    {path: '/',component: Home, beforeEnter: requiereAuth},
    {path: '/search',component: SearchMoviesView, beforeEnter: requiereAuth},
    {path: '/search/:id',component: InfoMovieView, beforeEnter: requiereAuth},
    {path: '/login',component: Login},
    {path: '/register',component: Register}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;