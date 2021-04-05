import Vue from 'vue'
import App from './App/App.vue'
import router from './App/router';
import store from './App/store';
 
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})