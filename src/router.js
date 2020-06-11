import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile.vue'
import Kwetter from './views/Kwetter.vue'


Vue.use(Router);
Vue.config.silent = true;
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/Profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/Kwetter',
            name: 'Kwetter',
            component: Kwetter
        }
    
    ]
})