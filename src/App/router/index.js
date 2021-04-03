import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home, name: 'home', redirect: '/red'},
    { path: '/red', component: Home, name: 'red', props: {color: 'red', time: 10000} },
    { path: '/yellow', component: Home, name: 'yellow', props: {color: 'yellow', time: 3000} },
    { path: '/green', component: Home, name: 'green', props: {color: 'green', time: 15000} }, 
];
  
const router = new VueRouter({
    routes 
});

export default router;