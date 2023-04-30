import {createRouter, createWebHistory} from 'vue-router';
import home from './pages/HomePage.vue';
import login from './pages/LoginPage.vue';
import register from './pages/RegisterPage.vue';
import dashboard from './pages/DashboardPage.vue';
import ServiceComponent from "./components/ServiceComponent.vue";
import PortfolioComponent from "./components/PortfolioComponent.vue";
import ClientComponent from "./components/ClientComponent.vue";
import PricingComponent from "./components/PricingComponent.vue";
import TeamComponent from "./components/TeamComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import ContactUsPage from "./pages/ContactUsPage.vue";

const routes = [
    {
        path : '/',
        name : 'Home',
        component : home
    },
    {
        path : '/login',
        name : 'Login',
        component : login,
        meta:{
            requiresAuth:false
        }
    },
    {
        path : '/register',
        name : 'Register',
        component : register,
        meta:{
            requiresAuth:false
        }
    },
    {
        path : '/dashboard',
        name : 'Dashboard',
        component : dashboard,
        meta:{
            requiresAuth:true
        }
    },
    {
        name: 'service',
        path: '/services',
        component: ServiceComponent
    },
    {
        name: 'portfolio',
        path: '/portfolios',
        component: PortfolioComponent
    }, {
        name: 'client',
        path: '/clients',
        component: ClientComponent
    }, {
        name: 'pricing',
        path: '/prices',
        component: PricingComponent
    }, {
        name: 'team',
        path: '/teams',
        component: TeamComponent
    }, {
        name: 'blog',
        path: '/blogs',
        component: BlogComponent
    }, {
        name: 'Contact',
        path: '/contacts',
        component: ContactUsPage
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active-link',
});


// router.beforeEach((to,from) =>{
//     if(to.meta.requiresAuth && store.getters.getToken == 0){
//         return { name : 'Login'}
//     }
//     if(to.meta.requiresAuth == false && store.getters.getToken != 0){
//         return { name : 'Dashboard'}
//     }
// })

export default router;
